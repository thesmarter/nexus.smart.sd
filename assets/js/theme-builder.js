/* DevNexus Theme Builder — form + state + import/export.
   Self-contained i18n (en/ar); re-renders when the site language changes. */
(function () {
  'use strict';

  var S = window.ThemeSchema;

  var LABELS = {
    en: {
      title: 'Theme Builder',
      subtitle: 'Design a DevNexus theme visually, then export it as JSON and import it in the app.',
      preview: 'Live preview',
      presets: 'Presets',
      identity: 'Identity',
      colors: 'Colors',
      typography: 'Typography',
      effects: 'Effects',
      layout: 'Layout',
      exportSection: 'Export & import',
      name: 'Theme name',
      description: 'Description',
      version: 'Version',
      paradigm: 'Paradigm',
      lightPalette: 'Light palette',
      darkPalette: 'Dark palette',
      editLight: 'Light',
      editDark: 'Dark',
      previewLight: 'Light preview',
      previewDark: 'Dark preview',
      family: 'Font family',
      googleFont: 'Google Fonts URL',
      headingWeight: 'Heading weight',
      headingSpacing: 'Heading letter-spacing',
      headingTransform: 'Heading case',
      labelWeight: 'Label weight',
      labelSpacing: 'Label letter-spacing',
      labelTransform: 'Label case',
      sizes: 'Text sizes',
      radius: 'Radius',
      radiusLg: 'Radius (lg)',
      radiusMd: 'Radius (md)',
      radiusSm: 'Radius (sm)',
      borderWidth: 'Border width',
      shadow: 'Shadow',
      glass: 'Glass effect',
      glassBlur: 'Glass blur',
      glassOpacity: 'Glass opacity',
      hoverScale: 'Hover scale',
      cardHoverScale: 'Card hover scale',
      transition: 'Transition',
      sidebarPosition: 'Sidebar position',
      sidebarWidth: 'Sidebar width',
      sidebarCollapsed: 'Collapsed width',
      headerPosition: 'Header behavior',
      headerHeight: 'Header height',
      headerBorder: 'Header border',
      contentMax: 'Content max-width',
      contentPadding: 'Content padding',
      bgDecoration: 'Background decoration',
      glassPanels: 'Glass panels',
      uppercase: 'Uppercase',
      none: 'Normal',
      fixed: 'Fixed',
      static: 'Scrolls with page',
      left: 'Left',
      top: 'Top bar',
      hidden: 'Hidden',
      copy: 'Copy JSON',
      copied: 'Copied',
      download: 'Download theme',
      downloadGuide: 'Download guide',
      importButton: 'Import file',
      importText: 'Apply pasted JSON',
      jsonLabel: 'Theme JSON',
      help: 'Design a theme, export the JSON, then open DevNexus → Configuration → Themes → Import theme.',
      invalid: 'That file is not a valid DevNexus theme.',
      imported: 'Theme imported into the editor.',
      reset: 'Reset to Flat UI',
    },
    ar: {
      title: 'منشئ الثيمات',
      subtitle: 'صمّم ثيم DevNexus بصرياً ثم صدّره بصيغة JSON واستورده في التطبيق.',
      preview: 'معاينة مباشرة',
      presets: 'قوالب جاهزة',
      identity: 'الهوية',
      colors: 'الألوان',
      typography: 'الخطوط',
      effects: 'التأثيرات',
      layout: 'التخطيط',
      exportSection: 'التصدير والاستيراد',
      name: 'اسم الثيم',
      description: 'الوصف',
      version: 'الإصدار',
      paradigm: 'النمط',
      lightPalette: 'لوحة الوضع الفاتح',
      darkPalette: 'لوحة الوضع الداكن',
      editLight: 'فاتح',
      editDark: 'داكن',
      previewLight: 'معاينة فاتحة',
      previewDark: 'معاينة داكنة',
      family: 'عائلة الخط',
      googleFont: 'رابط Google Fonts',
      headingWeight: 'ثقل العناوين',
      headingSpacing: 'تباعد حروف العناوين',
      headingTransform: 'حالة أحرف العناوين',
      labelWeight: 'ثقل التسميات',
      labelSpacing: 'تباعد حروف التسميات',
      labelTransform: 'حالة أحرف التسميات',
      sizes: 'أحجام النص',
      radius: 'الاستدارة',
      radiusLg: 'الاستدارة (كبيرة)',
      radiusMd: 'الاستدارة (متوسطة)',
      radiusSm: 'الاستدارة (صغيرة)',
      borderWidth: 'سماكة الحدود',
      shadow: 'الظل',
      glass: 'تأثير الزجاج',
      glassBlur: 'ضبابية الزجاج',
      glassOpacity: 'عتامة الزجاج',
      hoverScale: 'تكبير عند التحويم',
      cardHoverScale: 'تكبير البطاقة عند التحويم',
      transition: 'الانتقال',
      sidebarPosition: 'موضع الشريط الجانبي',
      sidebarWidth: 'عرض الشريط الجانبي',
      sidebarCollapsed: 'العرض المطوي',
      headerPosition: 'سلوك الترويسة',
      headerHeight: 'ارتفاع الترويسة',
      headerBorder: 'حد الترويسة',
      contentMax: 'أقصى عرض للمحتوى',
      contentPadding: 'حشوة المحتوى',
      bgDecoration: 'زخرفة الخلفية',
      glassPanels: 'لوحات زجاجية',
      uppercase: 'أحرف كبيرة',
      none: 'عادي',
      fixed: 'ثابتة',
      static: 'تتحرك مع الصفحة',
      left: 'يسار',
      top: 'شريط علوي',
      hidden: 'مخفي',
      copy: 'نسخ JSON',
      copied: 'تم النسخ',
      download: 'تنزيل الثيم',
      downloadGuide: 'تنزيل الدليل',
      importButton: 'استيراد ملف',
      importText: 'تطبيق JSON الملصق',
      jsonLabel: 'JSON الثيم',
      help: 'صمّم ثيماً وصدّر ملف JSON، ثم افتح DevNexus ← الإعدادات ← الثيمات ← استيراد ثيم.',
      invalid: 'هذا الملف ليس ثيماً صالحاً لـ DevNexus.',
      imported: 'تم استيراد الثيم إلى المحرر.',
      reset: 'إعادة إلى Flat UI',
    },
  };

  var state = {
    schema: S.clone(S.DEFAULT_SCHEMA),
    editMode: 'colors',
    previewMode: 'dark',
    status: null,
  };

  var els = {};

  function lang() {
    return localStorage.getItem('devnexus-lang') === 'ar' ? 'ar' : 'en';
  }
  function L(key) {
    return (LABELS[lang()] && LABELS[lang()][key]) || LABELS.en[key] || key;
  }

  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        if (k === 'class') node.className = props[k];
        else if (k === 'text') node.textContent = props[k];
        else if (k === 'html') node.innerHTML = props[k];
        else if (k.indexOf('on') === 0) node.addEventListener(k.slice(2), props[k]);
        else if (props[k] !== undefined && props[k] !== null) node.setAttribute(k, props[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function setPath(path, value) {
    var parts = path.split('.');
    var obj = state.schema;
    for (var i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    obj[parts[parts.length - 1]] = value;
  }
  function getPath(path) {
    return path.split('.').reduce(function (o, k) { return o ? o[k] : undefined; }, state.schema);
  }

  function field(label, input, extraClass) {
    return el('label', { class: 'tb-field ' + (extraClass || '') }, [
      el('span', { class: 'tb-label', text: label }),
      input,
    ]);
  }

  function textInput(path, opts) {
    opts = opts || {};
    var input = el('input', {
      class: 'tb-input', type: opts.type || 'text', value: String(getPath(path)),
      placeholder: opts.placeholder || '',
    });
    input.addEventListener('input', function () {
      setPath(path, opts.number ? Number(input.value) : input.value);
      commit();
    });
    return input;
  }

  function selectInput(path, options) {
    var select = el('select', { class: 'tb-select' });
    options.forEach(function (o) {
      var opt = el('option', { value: o.value, text: o.label });
      if (String(getPath(path)) === o.value) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      setPath(path, select.value);
      commit();
    });
    return select;
  }

  function checkbox(path, label) {
    var input = el('input', { type: 'checkbox' });
    input.checked = !!getPath(path);
    input.addEventListener('change', function () {
      setPath(path, input.checked);
      commit();
    });
    return el('label', { class: 'tb-check' }, [input, el('span', { text: label })]);
  }

  function section(key, open, body) {
    var wrap = el('div', { class: 'tb-section', 'data-open': open ? 'true' : 'false' });
    var head = el('button', { type: 'button', class: 'tb-section-head' }, [
      el('span', { text: L(key) }),
      el('span', { class: 'tb-chevron', text: '\u25BE' }),
    ]);
    head.addEventListener('click', function () {
      wrap.setAttribute('data-open', wrap.getAttribute('data-open') === 'true' ? 'false' : 'true');
    });
    wrap.appendChild(head);
    wrap.appendChild(el('div', { class: 'tb-section-body' }, body));
    return wrap;
  }

  function colorRow(modeKey) {
    var wrap = el('div', { class: 'tb-color-row' });
    S.COLOR_KEYS.concat(S.SEMANTIC_KEYS).forEach(function (key) {
      var path = modeKey + '.' + key;
      var input = el('input', { type: 'color', value: getPath(path) });
      input.addEventListener('input', function () {
        setPath(path, input.value.toUpperCase());
        commit();
      });
      wrap.appendChild(el('label', { class: 'tb-color' }, [
        input,
        el('span', { class: 'tb-color-name', text: key }),
      ]));
    });
    return wrap;
  }

  function modeTabs() {
    var wrap = el('div', { class: 'tb-mode-switch' });
    [['colors', 'editLight'], ['colorsDark', 'editDark']].forEach(function (pair) {
      var btn = el('button', { type: 'button', text: L(pair[1]) });
      btn.setAttribute('aria-pressed', state.editMode === pair[0] ? 'true' : 'false');
      btn.addEventListener('click', function () {
        state.editMode = pair[0];
        build();
      });
      wrap.appendChild(btn);
    });
    return wrap;
  }

  function paradigmOptions() {
    return S.PARADIGMS.map(function (p) { return { value: p, label: p }; });
  }
  function caseOptions() {
    return [{ value: 'none', label: L('none') }, { value: 'uppercase', label: L('uppercase') }];
  }

  function buildColorsBody() {
    var label = state.editMode === 'colors' ? L('lightPalette') : L('darkPalette');
    return [
      el('div', { class: 'tb-actions-row' }, [modeTabs()]),
      el('p', { class: 'tb-note', text: label }),
      colorRow(state.editMode),
    ];
  }

  function build() {
    var s = state.schema;
    document.querySelectorAll('[data-tb]').forEach(function (node) {
      node.textContent = L(node.getAttribute('data-tb'));
    });
    els.form.innerHTML = '';
    els.presets.innerHTML = '';

    S.PRESETS.forEach(function (p) {
      var btn = el('button', { type: 'button', class: 'tb-preset', text: p.label });
      btn.addEventListener('click', function () { loadPreset(p.file); });
      els.presets.appendChild(btn);
    });

    var sizes = el('div', { class: 'tb-grid tb-grid-3' },
      S.SIZE_KEYS.map(function (k) { return field(k, textInput('typography.sizes.' + k)); }));

    els.form.appendChild(section('identity', true, [
      el('div', { class: 'tb-grid' }, [
        field(L('name'), textInput('name')),
        field(L('version'), textInput('version')),
      ]),
      field(L('description'), textInput('description')),
      field(L('paradigm'), selectInput('paradigm', paradigmOptions())),
    ]));

    els.form.appendChild(section('colors', true, buildColorsBody()));

    els.form.appendChild(section('typography', false, [
      field(L('family'), textInput('typography.family')),
      field(L('googleFont'), textInput('typography.googleFont')),
      el('div', { class: 'tb-grid-3' }, [
        field(L('headingWeight'), textInput('typography.heading.weight', { type: 'number', number: true })),
        field(L('headingSpacing'), textInput('typography.heading.letterSpacing')),
        field(L('headingTransform'), selectInput('typography.heading.transform', caseOptions())),
      ]),
      el('div', { class: 'tb-grid-3' }, [
        field(L('labelWeight'), textInput('typography.label.weight', { type: 'number', number: true })),
        field(L('labelSpacing'), textInput('typography.label.letterSpacing')),
        field(L('labelTransform'), selectInput('typography.label.transform', caseOptions())),
      ]),
      el('p', { class: 'tb-note', text: L('sizes') }),
      sizes,
    ]));

    els.form.appendChild(section('effects', false, [
      el('div', { class: 'tb-grid' }, [
        field(L('radius'), textInput('effects.radius')),
        field(L('radiusLg'), textInput('effects.radiusLg')),
        field(L('radiusMd'), textInput('effects.radiusMd')),
        field(L('radiusSm'), textInput('effects.radiusSm')),
        field(L('borderWidth'), textInput('effects.borderWidth')),
        field(L('shadow'), selectInput('effects.shadow',
          S.SHADOWS.map(function (v) { return { value: v, label: v }; }))),
        field(L('hoverScale'), textInput('effects.hoverScale')),
        field(L('cardHoverScale'), textInput('effects.cardHoverScale')),
        field(L('transition'), textInput('effects.transition')),
      ]),
      checkbox('effects.glassEffect.enabled', L('glass')),
      el('div', { class: 'tb-grid' }, [
        field(L('glassBlur'), textInput('effects.glassEffect.blur')),
        field(L('glassOpacity'), textInput('effects.glassEffect.opacity')),
      ]),
    ]));

    els.form.appendChild(section('layout', false, [
      el('div', { class: 'tb-grid' }, [
        field(L('sidebarPosition'), selectInput('layout.sidebar.position',
          S.SIDEBAR_POSITIONS.map(function (v) { return { value: v, label: L(v) }; }))),
        field(L('sidebarWidth'), textInput('layout.sidebar.width')),
        field(L('sidebarCollapsed'), textInput('layout.sidebar.collapsedWidth')),
        field(L('headerPosition'), selectInput('layout.header.position',
          S.HEADER_POSITIONS.map(function (v) { return { value: v, label: L(v) }; }))),
        field(L('headerHeight'), textInput('layout.header.height')),
        field(L('contentMax'), textInput('layout.content.maxWidth')),
        field(L('contentPadding'), textInput('layout.content.padding')),
      ]),
      checkbox('layout.header.borderBottom', L('headerBorder')),
      checkbox('layout.shell.backgroundDecoration', L('bgDecoration')),
      checkbox('layout.shell.glassPanels', L('glassPanels')),
    ]));

    els.form.appendChild(section('exportSection', false, [
      el('div', { class: 'tb-actions-row' }, [
        actionBtn('copy', 'tb-btn-primary', onCopy),
        actionBtn('download', 'tb-btn-secondary', onDownloadJson),
        actionBtn('downloadGuide', 'tb-btn-secondary', onDownloadGuide),
        actionBtn('reset', 'tb-btn-ghost', onReset),
      ]),
      el('div', { class: 'tb-actions-row' }, [
        importButton(),
        actionBtn('importText', 'tb-btn-secondary', onImportText),
      ]),
      el('p', { class: 'tb-note', text: L('help') }),
      el('label', { class: 'tb-field' }, [
        el('span', { class: 'tb-label', text: L('jsonLabel') }),
        els.json = el('textarea', { class: 'tb-textarea', spellcheck: 'false' }),
      ]),
      el('p', { class: 'tb-note', text: state.status || '' }),
    ]));

    updateJson();
    applyPreview();
  }

  function actionBtn(labelKey, cls, handler) {
    var btn = el('button', { type: 'button', class: 'tb-btn ' + cls, text: L(labelKey) });
    btn.addEventListener('click', handler);
    return btn;
  }

  function importButton() {
    var input = el('input', { type: 'file', accept: '.json,application/json', style: 'display:none' });
    var btn = el('button', { type: 'button', class: 'tb-btn tb-btn-secondary', text: L('importButton') });
    btn.addEventListener('click', function () { input.click(); });
    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function () { applyRaw(reader.result); input.value = ''; };
      reader.readAsText(file);
    });
    return el('span', {}, [btn, input]);
  }

  function commit() {
    updateJson();
    applyPreview();
  }

  function updateJson() {
    if (els.json) els.json.value = JSON.stringify(state.schema, null, 2);
  }

  function applyPreview() {
    window.ThemePreview.apply(state.schema, state.previewMode);
  }

  function setStatus(msg) {
    state.status = msg;
    if (els.form && els.json) {
      var notes = els.form.querySelectorAll('.tb-note');
      if (notes.length) notes[notes.length - 1].textContent = msg;
    }
  }

  function applyRaw(raw) {
    try {
      var parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (!parsed || typeof parsed !== 'object') throw new Error('not object');
      state.schema = S.normalize(parsed);
      build();
      setStatus(L('imported'));
    } catch (e) {
      setStatus(L('invalid'));
    }
  }

  function onCopy() {
    navigator.clipboard.writeText(JSON.stringify(state.schema, null, 2)).then(function () {
      setStatus(L('copied'));
      setTimeout(function () { setStatus(''); }, 1500);
    });
  }

  function download(name, text) {
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = el('a', { href: url, download: name });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function slug() {
    return (state.schema.name || 'theme').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function onDownloadJson() { download(slug() + '.json', JSON.stringify(state.schema, null, 2)); }

  function onDownloadGuide() {
    var lines = [
      '# ' + state.schema.name + ' — DevNexus Theme Guide',
      '',
      state.schema.description,
      '',
      'Import this theme in DevNexus → Configuration → Themes → Import theme.',
      '',
      '## Palette',
      '- Light background: `' + state.schema.colors.background + '`',
      '- Dark background: `' + state.schema.colorsDark.background + '`',
      '- Primary: `' + state.schema.colors.primary + '`',
      '',
      '## Design tokens',
      '- Radius: `' + state.schema.effects.radius + '`',
      '- Border width: `' + state.schema.effects.borderWidth + '`',
      '- Shadow: `' + state.schema.effects.shadow + '`',
      '- Glass: ' + (state.schema.effects.glassEffect.enabled ? 'on' : 'off'),
      '',
      '## Layout',
      '- Sidebar: ' + state.schema.layout.sidebar.position + ' @ ' + state.schema.layout.sidebar.width,
      '- Header: ' + state.schema.layout.header.position + ' @ ' + state.schema.layout.header.height,
      '',
    ];
    download(slug() + '-guide.md', lines.join('\n'));
  }

  function onImportText() {
    if (els.json && els.json.value) applyRaw(els.json.value);
  }

  function onReset() { state.schema = S.clone(S.DEFAULT_SCHEMA); build(); }

  function loadPreset(file) {
    fetch('/assets/themes/' + file)
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (json) { applyRaw(json); })
      .catch(function () { setStatus(L('invalid')); });
  }

  function init() {
    els.form = document.getElementById('tbForm');
    els.presets = document.getElementById('tbPresets');
    els.preview = document.getElementById('tbPreview');
    if (!els.form || !els.preview) return;

    window.ThemePreview.mount(els.preview);

    var lightBtn = document.getElementById('tbPreviewLight');
    var darkBtn = document.getElementById('tbPreviewDark');
    function setPreviewMode(mode) {
      state.previewMode = mode;
      lightBtn.setAttribute('aria-pressed', mode === 'light' ? 'true' : 'false');
      darkBtn.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
      applyPreview();
    }
    if (lightBtn) lightBtn.addEventListener('click', function () { setPreviewMode('light'); });
    if (darkBtn) darkBtn.addEventListener('click', function () { setPreviewMode('dark'); });

    build();
    setPreviewMode(localStorage.getItem('devnexus-theme') === 'light' ? 'light' : 'dark');

    // Load the shipped Flat UI theme so the editor opens on real defaults.
    loadPreset('default-flat.json');

    document.addEventListener('devnexus:langchange', function () { build(); });
    document.addEventListener('devnexus:themechange', function (e) {
      if (e.detail && e.detail.theme) setPreviewMode(e.detail.theme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
