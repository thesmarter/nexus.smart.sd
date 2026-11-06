/* DevNexus Theme Builder — schema model + parser.
   Mirrors src/themes/schema.ts and schema-parser.ts so the exported JSON
   renders identically inside the desktop app. */
(function () {
  'use strict';

  var COLOR_KEYS = [
    'background', 'foreground', 'primary', 'primary-foreground',
    'secondary', 'secondary-foreground', 'muted', 'muted-foreground',
    'accent', 'accent-foreground', 'destructive', 'destructive-foreground',
    'border', 'input', 'ring', 'card', 'card-foreground',
    'popover', 'popover-foreground',
  ];

  var SEMANTIC_KEYS = [
    'bg-page', 'bg-sidebar', 'surface-1', 'surface-2', 'border-strong',
    'accent-blue', 'accent-green', 'accent-red', 'accent-amber',
  ];

  var SIZE_KEYS = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

  var LINE_RATIO = {
    xs: 1.3333, sm: 1.4286, base: 1.5, lg: 1.5556, xl: 1.4,
    '2xl': 1.3333, '3xl': 1.2, '4xl': 1.1111, '5xl': 1.1,
  };

  var PANEL_SHADOWS = {
    none: 'none',
    flat: '0 1px 0 0 color-mix(in srgb, var(--border) 70%, transparent)',
    material: '0 1px 2px rgba(0, 0, 0, 0.14), 0 4px 14px rgba(0, 0, 0, 0.1)',
    neumorphic: '8px 8px 18px rgba(0, 0, 0, 0.08), -8px -8px 18px rgba(255, 255, 255, 0.55)',
  };

  var PARADIGMS = ['flat', 'glass', 'material', 'neumorphic', 'high-contrast', 'macos', 'windows'];
  var SHADOWS = ['none', 'flat', 'material', 'neumorphic'];
  var SIDEBAR_POSITIONS = ['left', 'top', 'hidden'];
  var HEADER_POSITIONS = ['fixed', 'static'];

  var DEFAULT_SCHEMA = {
    name: 'Flat UI',
    description: 'A bold, reductive flat design system with zero artifice.',
    version: '1.0.0',
    paradigm: 'flat',
    colors: {
      background: '#F4F6F8', foreground: '#1F2933', primary: '#4F46E5',
      'primary-foreground': '#FFFFFF', secondary: '#0D9488', 'secondary-foreground': '#FFFFFF',
      muted: '#ECEFF3', 'muted-foreground': '#5C6773', accent: '#D97706',
      'accent-foreground': '#FFFFFF', destructive: '#DC2626', 'destructive-foreground': '#FFFFFF',
      border: '#DDE2E8', input: '#CFD6DE', ring: '#4F46E5', card: '#FFFFFF',
      'card-foreground': '#1F2933', popover: '#FFFFFF', 'popover-foreground': '#1F2933',
      'bg-page': '#F4F6F8', 'bg-sidebar': '#EDF0F4', 'surface-1': '#FFFFFF',
      'surface-2': '#EEF1F5', 'border-strong': '#C6CFD9', 'accent-blue': '#4F46E5',
      'accent-green': '#0D9488', 'accent-red': '#DC2626', 'accent-amber': '#D97706',
    },
    colorsDark: {
      background: '#0B1120', foreground: '#F1F5F9', primary: '#818CF8',
      'primary-foreground': '#0B1120', secondary: '#2DD4BF', 'secondary-foreground': '#0B1120',
      muted: '#1A2434', 'muted-foreground': '#9AA6B5', accent: '#FBBF24',
      'accent-foreground': '#0B1120', destructive: '#FB7185', 'destructive-foreground': '#0B1120',
      border: '#263244', input: '#263244', ring: '#818CF8', card: '#121A29',
      'card-foreground': '#F1F5F9', popover: '#121A29', 'popover-foreground': '#F1F5F9',
      'bg-page': '#0B1120', 'bg-sidebar': '#0D1422', 'surface-1': '#121A29',
      'surface-2': '#1A2434', 'border-strong': '#33405A', 'accent-blue': '#818CF8',
      'accent-green': '#2DD4BF', 'accent-red': '#FB7185', 'accent-amber': '#FBBF24',
    },
    typography: {
      family: "'Outfit', sans-serif",
      googleFont: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap',
      heading: { weight: 800, letterSpacing: '-0.02em', transform: 'none' },
      label: { weight: 600, letterSpacing: '0.05em', transform: 'uppercase' },
      sizes: {
        xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem',
        '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem',
      },
    },
    effects: {
      radius: '0.5rem', radiusLg: '0.75rem', radiusMd: '0.375rem', radiusSm: '0.25rem',
      borderWidth: '1px', shadow: 'none',
      glassEffect: { enabled: false, blur: '0px', opacity: '1' },
      hoverScale: '1', cardHoverScale: '1', transition: 'all 0.2s ease-out',
    },
    layout: {
      sidebar: { position: 'left', width: '15rem', collapsedWidth: '4.5rem' },
      header: { position: 'fixed', height: '3rem', borderBottom: true },
      content: { maxWidth: 'none', padding: '1.25rem' },
      shell: { backgroundDecoration: false, glassPanels: false },
    },
  };

  var PRESETS = [
    { id: 'flat', label: 'Flat UI', file: 'default-flat.json' },
    { id: 'neon', label: 'Neon Terminal', file: 'Neon.json' },
    { id: 'aurora', label: 'Aurora Flat', file: 'aurora-flat.json' },
    { id: 'macos', label: 'macOS', file: 'macos.json' },
    { id: 'windows', label: 'Windows 11', file: 'windows.json' },
  ];

  function isRecord(v) {
    return typeof v === 'object' && v !== null && !Array.isArray(v);
  }
  function rec(v) { return isRecord(v) ? v : {}; }
  function str(v, fb) { return typeof v === 'string' && v.trim() !== '' ? v : fb; }
  function num(v, fb) { return typeof v === 'number' && isFinite(v) ? v : fb; }
  function bool(v, fb) { return typeof v === 'boolean' ? v : fb; }
  function oneOf(v, list, fb) { return list.indexOf(v) !== -1 ? v : fb; }

  function normalizeColors(raw, fallback) {
    var src = rec(raw);
    var out = {};
    Object.keys(fallback).forEach(function (k) {
      out[k] = str(src[k], fallback[k]);
    });
    return out;
  }

  function normalize(raw) {
    var src = rec(raw);
    var base = DEFAULT_SCHEMA;

    var sizing = {};
    SIZE_KEYS.forEach(function (k) {
      sizing[k] = str(rec(rec(src.typography).sizes)[k], base.typography.sizes[k]);
    });

    var heading = rec(rec(src.typography).heading);
    var label = rec(rec(src.typography).label);
    var effects = rec(src.effects);
    var glass = rec(effects.glassEffect);
    var layout = rec(src.layout);
    var sidebar = rec(layout.sidebar);
    var header = rec(layout.header);
    var content = rec(layout.content);
    var shell = rec(layout.shell);

    return {
      name: str(src.name, base.name),
      description: str(src.description, base.description),
      version: str(src.version, base.version),
      paradigm: oneOf(src.paradigm, PARADIGMS, base.paradigm),
      colors: normalizeColors(src.colors, base.colors),
      colorsDark: normalizeColors(src.colorsDark, base.colorsDark),
      typography: {
        family: str(rec(src.typography).family, base.typography.family),
        googleFont: typeof rec(src.typography).googleFont === 'string'
          ? rec(src.typography).googleFont : base.typography.googleFont,
        heading: {
          weight: num(heading.weight, base.typography.heading.weight),
          letterSpacing: str(heading.letterSpacing, base.typography.heading.letterSpacing),
          transform: oneOf(heading.transform, ['uppercase', 'none'], 'none'),
        },
        label: {
          weight: num(label.weight, base.typography.label.weight),
          letterSpacing: str(label.letterSpacing, base.typography.label.letterSpacing),
          transform: oneOf(label.transform, ['uppercase', 'none'], 'none'),
        },
        sizes: sizing,
      },
      effects: {
        radius: str(effects.radius, base.effects.radius),
        radiusLg: str(effects.radiusLg, base.effects.radiusLg),
        radiusMd: str(effects.radiusMd, base.effects.radiusMd),
        radiusSm: str(effects.radiusSm, base.effects.radiusSm),
        borderWidth: str(effects.borderWidth, base.effects.borderWidth),
        shadow: oneOf(effects.shadow, SHADOWS, base.effects.shadow),
        glassEffect: {
          enabled: bool(glass.enabled, base.effects.glassEffect.enabled),
          blur: str(glass.blur, base.effects.glassEffect.blur),
          opacity: str(glass.opacity, base.effects.glassEffect.opacity),
        },
        hoverScale: str(effects.hoverScale, base.effects.hoverScale),
        cardHoverScale: str(effects.cardHoverScale, base.effects.cardHoverScale),
        transition: str(effects.transition, base.effects.transition),
      },
      layout: {
        sidebar: {
          position: oneOf(sidebar.position, SIDEBAR_POSITIONS, base.layout.sidebar.position),
          width: str(sidebar.width, base.layout.sidebar.width),
          collapsedWidth: str(sidebar.collapsedWidth, base.layout.sidebar.collapsedWidth),
        },
        header: {
          position: oneOf(header.position, HEADER_POSITIONS, base.layout.header.position),
          height: str(header.height, base.layout.header.height),
          borderBottom: bool(header.borderBottom, base.layout.header.borderBottom),
        },
        content: {
          maxWidth: str(content.maxWidth, base.layout.content.maxWidth),
          padding: str(content.padding, base.layout.content.padding),
        },
        shell: {
          backgroundDecoration: bool(shell.backgroundDecoration, base.layout.shell.backgroundDecoration),
          glassPanels: bool(shell.glassPanels, base.layout.shell.glassPanels),
        },
      },
    };
  }

  /* Maps a theme to the same CSS custom properties the desktop app injects. */
  function toVariables(schema, mode) {
    var s = normalize(schema);
    var colors = mode === 'dark' ? s.colorsDark : s.colors;
    var vars = {};

    COLOR_KEYS.concat(SEMANTIC_KEYS).forEach(function (k) {
      if (colors[k]) vars['--' + k] = colors[k];
    });

    vars['--font-family'] = s.typography.family;
    vars['--heading-weight'] = String(s.typography.heading.weight);
    vars['--heading-letter-spacing'] = s.typography.heading.letterSpacing;
    vars['--heading-transform'] = s.typography.heading.transform;
    vars['--label-weight'] = String(s.typography.label.weight);
    vars['--label-letter-spacing'] = s.typography.label.letterSpacing;
    vars['--label-transform'] = s.typography.label.transform;

    SIZE_KEYS.forEach(function (k) {
      vars['--text-' + k] = s.typography.sizes[k];
      vars['--text-' + k + '--line-height'] =
        (parseFloat(s.typography.sizes[k]) * LINE_RATIO[k]).toFixed(4) + 'rem';
    });

    vars['--radius'] = s.effects.radius;
    vars['--radius-lg'] = s.effects.radiusLg;
    vars['--radius-md'] = s.effects.radiusMd;
    vars['--radius-sm'] = s.effects.radiusSm;
    vars['--border-width'] = s.effects.borderWidth;
    vars['--shadow-panel'] = PANEL_SHADOWS[s.effects.shadow] || 'none';
    vars['--hover-scale'] = s.effects.hoverScale;
    vars['--card-hover-scale'] = s.effects.cardHoverScale;
    vars['--transition-default'] = s.effects.transition;

    vars['--sidebar-width'] = s.layout.sidebar.width;
    vars['--sidebar-collapsed-width'] = s.layout.sidebar.collapsedWidth;
    vars['--header-height'] = s.layout.header.height;
    vars['--header-border-bottom'] = s.layout.header.borderBottom ? '1px' : '0px';
    vars['--content-max-width'] = s.layout.content.maxWidth;
    vars['--content-padding'] = s.layout.content.padding;
    vars['--glass-blur'] = s.effects.glassEffect.blur;
    vars['--glass-opacity'] = s.effects.glassEffect.opacity;

    return vars;
  }

  window.ThemeSchema = {
    COLOR_KEYS: COLOR_KEYS,
    SEMANTIC_KEYS: SEMANTIC_KEYS,
    SIZE_KEYS: SIZE_KEYS,
    PARADIGMS: PARADIGMS,
    SHADOWS: SHADOWS,
    SIDEBAR_POSITIONS: SIDEBAR_POSITIONS,
    HEADER_POSITIONS: HEADER_POSITIONS,
    PRESETS: PRESETS,
    DEFAULT_SCHEMA: DEFAULT_SCHEMA,
    normalize: normalize,
    toVariables: toVariables,
    clone: function (schema) { return JSON.parse(JSON.stringify(schema)); },
  };
})();
