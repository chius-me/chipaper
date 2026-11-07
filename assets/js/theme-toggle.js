(() => {
  const root = document.documentElement;
  const toggle = document.currentScript.previousElementSibling;
  const media = matchMedia('(prefers-color-scheme: dark)');

  function sendCommentTheme() {
    const theme = root.dataset.theme === 'dark' ? 'noborder_dark' : 'noborder_light';
    document.querySelector('iframe.giscus-frame')?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }

  function updateTheme(theme) {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', theme === 'dark' ? toggle.dataset.themeLight : toggle.dataset.themeDark);
    sendCommentTheme();
  }

  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('chipaper-theme', theme); } catch (_) {}
    updateTheme(theme);
  });
  updateTheme(root.dataset.theme);
  toggle.hidden = false;

  media.addEventListener('change', event => {
    let saved;
    try { saved = localStorage.getItem('chipaper-theme'); } catch (_) {}
    if (!saved) updateTheme(event.matches ? 'dark' : 'light');
  });

  document.addEventListener('DOMContentLoaded', () => {
    const comments = document.querySelector('.comments');
    if (!comments) return;

    const observer = new MutationObserver(watchFrame);
    function watchFrame() {
      const frame = comments.querySelector('iframe.giscus-frame');
      if (!frame) return;
      frame.addEventListener('load', sendCommentTheme);
      sendCommentTheme();
      observer.disconnect();
    }
    observer.observe(comments, { childList: true, subtree: true });
    watchFrame();
  }, { once: true });
})();
