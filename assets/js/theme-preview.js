/* DevNexus Theme Builder — live preview of the desktop shell.
   Renders a miniature app (header, sidebar, panels, buttons) and applies the
   theme through the same CSS custom properties the app injects at runtime. */
(function () {
  'use strict';

  var MARKUP = [
    '<div class="tbp-app">',
    '  <header class="tbp-header">',
    '    <div class="tbp-brand"><span class="tbp-logo">N</span><span class="tbp-brand-text">DevNexus</span></div>',
    '    <div class="tbp-header-actions">',
    '      <span class="tbp-chip">Local</span>',
    '      <span class="tbp-chip">PHP 8.4</span>',
    '      <button type="button" class="tbp-btn tbp-btn-ghost">Appearance</button>',
    '    </div>',
    '  </header>',
    '  <div class="tbp-body">',
    '    <nav class="tbp-sidebar">',
    '      <span class="tbp-nav is-active">Dashboard</span>',
    '      <span class="tbp-nav">Sites</span>',
    '      <span class="tbp-nav">Share</span>',
    '      <span class="tbp-nav">Services</span>',
    '      <span class="tbp-nav">Database</span>',
    '      <span class="tbp-nav">Jobs</span>',
    '      <span class="tbp-nav">Config</span>',
    '    </nav>',
    '    <main class="tbp-content">',
    '      <div class="tbp-content-inner">',
    '        <h1 class="tbp-title">Dashboard</h1>',
    '        <p class="tbp-subtitle">System overview and service health</p>',
    '        <div class="tbp-metrics">',
    '          <div class="tbp-metric"><span class="tbp-metric-value">4</span><span class="tbp-metric-label">Active Sites</span></div>',
    '          <div class="tbp-metric"><span class="tbp-metric-value">6/6</span><span class="tbp-metric-label">Running Services</span></div>',
    '          <div class="tbp-metric"><span class="tbp-metric-value">3</span><span class="tbp-metric-label">Tool Versions</span></div>',
    '        </div>',
    '        <section class="tbp-panel">',
    '          <div class="tbp-panel-head"><h2>Global Services</h2><span class="tbp-chip">6/6</span></div>',
    '          <div class="tbp-list">',
    '            <div class="tbp-list-row"><span class="tbp-dot is-on"></span>PHP-FPM<span class="tbp-muted">Running</span></div>',
    '            <div class="tbp-list-row"><span class="tbp-dot is-on"></span>MySQL<span class="tbp-muted">Running</span></div>',
    '            <div class="tbp-list-row"><span class="tbp-dot is-off"></span>Redis<span class="tbp-muted">Stopped</span></div>',
    '          </div>',
    '        </section>',
    '        <div class="tbp-actions">',
    '          <button type="button" class="tbp-btn tbp-btn-primary">Start All</button>',
    '          <button type="button" class="tbp-btn tbp-btn-secondary">Restart All</button>',
    '          <button type="button" class="tbp-btn tbp-btn-danger">Stop All</button>',
    '        </div>',
    '      </div>',
    '    </main>',
    '  </div>',
    '</div>',
  ].join('\n');

  var rootEl = null;
  var appEl = null;
  var fontLinks = {};

  function mount(root) {
    rootEl = root;
    rootEl.innerHTML = MARKUP;
    appEl = rootEl.querySelector('.tbp-app');
  }

  function apply(schema, mode) {
    if (!appEl) return;
    var vars = window.ThemeSchema.toVariables(schema, mode);
    Object.keys(vars).forEach(function (k) {
      appEl.style.setProperty(k, vars[k]);
    });

    appEl.setAttribute('data-paradigm', schema.paradigm);
    appEl.setAttribute('data-sidebar', schema.layout.sidebar.position);
    appEl.setAttribute('data-header', schema.layout.header.position);
    appEl.setAttribute('data-shadow-style', schema.effects.shadow);
    appEl.setAttribute('data-glass', schema.effects.glassEffect.enabled ? 'true' : 'false');
    appEl.setAttribute('data-glass-panels', schema.layout.shell.glassPanels ? 'true' : 'false');
    appEl.setAttribute('data-bg-decoration', schema.layout.shell.backgroundDecoration ? 'true' : 'false');

    var href = schema.typography.googleFont;
    if (href && !fontLinks[href]) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
      fontLinks[href] = true;
    }
  }

  window.ThemePreview = { mount: mount, apply: apply };
})();
