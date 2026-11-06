(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const media = matchMedia('(prefers-color-scheme: dark)');
  const sendCommentTheme = () => {
    document.querySelector('iframe.giscus-frame')?.contentWindow?.postMessage({ giscus: { setConfig: { theme: root.dataset.theme === 'dark' ? 'noborder_dark' : 'noborder_light' } } }, 'https://giscus.app');
  };
  function updateTheme(theme) {
    root.dataset.theme = theme;
    toggle?.setAttribute('aria-label', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    sendCommentTheme();
  }
  if (toggle) {
    toggle.hidden = false;
    updateTheme(root.dataset.theme);
    toggle.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('chipaper-theme', theme); } catch (_) {}
      updateTheme(theme);
    });
  }
  media.addEventListener('change', event => {
    let saved;
    try { saved = localStorage.getItem('chipaper-theme'); } catch (_) {}
    if (!saved) updateTheme(event.matches ? 'dark' : 'light');
  });
  const comments = document.querySelector('.comments');
  if (comments) {
    const observer = new MutationObserver(() => {
      const frame = comments.querySelector('iframe.giscus-frame');
      if (!frame) return;
      frame.addEventListener('load', sendCommentTheme);
      sendCommentTheme();
      observer.disconnect();
    });
    observer.observe(comments, { childList: true, subtree: true });
  }

  document.querySelectorAll('.prose .highlight').forEach(block => {
    const pre = block.querySelector('pre');
    const code = pre?.querySelector('code');
    if (!code) return;
    pre.tabIndex = 0;
    pre.setAttribute('aria-label', '代码，可横向滚动');
    const toolbar = document.createElement('div');
    toolbar.className = 'code-toolbar';
    const language = document.createElement('span');
    language.textContent = code.dataset.lang || 'code';
    toolbar.append(language);
    if (navigator.clipboard?.writeText) {
      const copy = document.createElement('button');
      copy.className = 'code-copy';
      copy.type = 'button';
      copy.textContent = '复制';
      copy.setAttribute('aria-label', '复制代码');
      copy.setAttribute('aria-live', 'polite');
      copy.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(code.textContent);
          copy.textContent = '已复制';
        } catch (_) { copy.textContent = '没复制上'; }
        setTimeout(() => { copy.textContent = '复制'; }, 2000);
      });
      toolbar.append(copy);
    }
    block.prepend(toolbar);
  });
  document.querySelectorAll('.prose table').forEach(table => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', '表格，可横向滚动');
    table.before(wrapper);
    wrapper.append(table);
  });

  const input = document.querySelector('#search-input');
  if (!input) return;
  const results = document.querySelector('#search-results');
  const status = document.querySelector('#search-status');
  let indexPromise;
  let revision = 0;
  input.form.addEventListener('submit', event => event.preventDefault());
  input.addEventListener('input', async () => {
    const current = ++revision;
    const query = input.value.trim().toLocaleLowerCase();
    results.replaceChildren();
    if (!query) { status.textContent = '打几个字就开始。'; return; }
    status.textContent = '正在找…';
    try {
      indexPromise ||= fetch(input.dataset.index).then(response => {
        if (!response.ok) throw new Error('Search index unavailable');
        return response.json();
      }).catch(error => { indexPromise = undefined; throw error; });
      const index = await indexPromise;
      if (current !== revision) return;
      const words = query.split(/\s+/);
      const matches = index.filter(post => words.every(word => `${post.title} ${post.tags.join(' ')} ${post.content}`.toLocaleLowerCase().includes(word)));
      status.textContent = matches.length ? `找到 ${matches.length} 篇。` : '没有对上的，换个词试试。';
      matches.forEach(post => {
        const item = document.createElement('li');
        item.className = 'post-item';
        const heading = document.createElement('h3');
        const link = document.createElement('a');
        link.href = post.url;
        link.textContent = post.title;
        heading.append(link);
        const meta = document.createElement('p');
        meta.className = 'post-meta';
        meta.textContent = post.date;
        const summary = document.createElement('p');
        summary.className = 'post-summary';
        summary.textContent = post.content.slice(0, 150);
        item.append(heading, meta, summary);
        results.append(item);
      });
    } catch (_) { if (current === revision) status.textContent = '索引暂时没载出来。'; }
  });
})();
