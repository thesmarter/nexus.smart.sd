/* ============================================
   DevNexus — Main JavaScript
   i18n, Theme, Navigation, Animations
   ============================================ */

(function () {
  'use strict';

  // ─── Translations ────────────────────────────────────────
  const en = {
    /* Nav */
    'nav.home': 'Home',
    'nav.docs': 'Docs',
    'nav.founders': 'Founders',
    'nav.download': 'Download',
    'tb.nav': 'Theme Builder',
    'nav.getting-started': 'Getting Started',
    'nav.features': 'Features',
    'nav.showcase': 'Screenshots',

    /* Meta (SEO) */
    'meta.description': 'DevNexus is a free, open-source XAMPP and Laragon alternative for PHP & Laravel. Manage PHP, MySQL, Caddy, Redis, and Mailpit from one desktop app on Windows, macOS, and Linux.',

    /* Hero */
    'hero.label': 'Latest Release v0.4.1',
    'hero.title': 'DevNexus — Local PHP/Laravel Development Environment',
    'hero.subtitle': 'The free, open-source XAMPP and Laragon alternative for PHP & Laravel. Manage your entire local development stack from a single, beautiful desktop app.',
    'hero.cta': 'Download Now',
    'hero.learn': 'Learn More',
    'hero.feature1': 'PHP 8.0–8.4 Per-Site Isolation',
    'hero.feature2': 'Built-in MCP Server + 8 AI Assistants',
    'hero.feature3': 'Cron Scheduler & Queue Workers',
    'hero.feature4': 'Node.js Dev Servers with Auto Proxy',
    'hero.github': 'Star on GitHub',

    /* Stats */
    'stat.commands': 'Commands',
    'stat.mcp': 'MCP Tools',
    'stat.ai': 'AI Clients',
    'stat.platforms': 'Supported Platforms',

    /* Features */
    'features.title': 'Everything You Need for Local PHP Development',
    'features.subtitle': 'A complete development environment manager from PHP version management and per-site isolation to AI-powered control and Node.js servers.',
    'feat.php.title': 'PHP Version Manager',
    'feat.php.desc': 'Download, install, and switch between PHP 8.0 through 8.4. Enable/disable extensions with one click. Automatic php.ini generation.',
    'feat.php.tag': 'PHP 8.0 — 8.4',
    'feat.mysql.title': 'MySQL Database Manager',
    'feat.mysql.desc': 'One-click MySQL setup with automatic config generation. phpMyAdmin and Adminer integration for database management. Export/restore tools.',
    'feat.mysql.tag': 'MySQL 8+',
    'feat.caddy.title': 'Caddy Web Server',
    'feat.caddy.desc': 'Automatic Caddyfile generation with PHP-FPM FastCGI support. Per-site virtual hosts with *.test domains. Auto TLS and live config reload.',
    'feat.caddy.tag': 'Auto HTTPS',
    'feat.projects.title': 'Smart Project Manager',
    'feat.projects.desc': 'Auto-discover Laravel, CakePHP, WordPress and more. Quick actions: open in browser, editor, git, artisan, composer, and database backup.',
    'feat.projects.tag': 'Auto-Discovery',
    'feat.binaries.title': 'Binary Download Manager',
    'feat.binaries.desc': 'Download and manage PHP, MySQL, Node.js, PostgreSQL, Caddy, Redis, Mailpit, and Composer binaries from within the app.',
    'feat.binaries.tag': 'One-Click Install',
    'feat.themes.title': 'Beautiful Theme System',
    'feat.themes.desc': 'Five built-in themes — Flat UI, Aurora Flat, Neon Terminal, macOS and Windows. Design your own in the visual Theme Builder, then import it as JSON. Full dark/light mode with design tokens.',
    'feat.themes.tag': 'Customizable',
    'feat.system.title': 'System Integration',
    'feat.system.desc': 'Automatic PATH injection, /etc/hosts management, SSL trust installation, system tray controls, and filesystem watcher for auto-reload.',
    'feat.system.tag': 'Seamless',
    'feat.logs.title': 'Real-Time Log Viewer',
    'feat.logs.desc': 'Monitor all services in real-time with color-coded log output. Auto-refresh, manual refresh, and log file download.',
    'feat.logs.tag': 'Live Monitoring',
    'feat.updater.title': 'Auto Updater',
    'feat.updater.desc': 'Built-in update checker with GitHub Releases integration. One-click updates keep your tools current.',
    'feat.updater.tag': 'Seamless',
    'feat.mcp.title': 'Built-in MCP Server',
    'feat.mcp.desc': '17 AI tools via the MCP protocol with Bearer token auth. Two-click setup for Claude Code, Cursor, VS Code, Windsurf, Zed, and more.',
    'feat.mcp.tag': 'AI Ready',
    'feat.isolation.title': 'Per-Site PHP Isolation',
    'feat.isolation.desc': 'Each project gets its own PHP-FPM pool or built-in server. Run different PHP versions per site with zero conflicts.',
    'feat.isolation.tag': 'Zero Conflicts',
    'feat.xdebug.title': 'Xdebug On-Demand',
    'feat.xdebug.desc': 'Xdebug activates only when triggered via cookie or header — full debugging with zero overhead in normal mode.',
    'feat.xdebug.tag': 'Trigger Mode',
    'feat.cron.title': 'Job Scheduler',
    'feat.cron.desc': 'Built-in cron manager with minute-to-monthly intervals. Schedule artisan commands, scripts, and automated backups.',
    'feat.cron.tag': 'Scheduled Tasks',
    'feat.node.title': 'Node.js Dev Servers',
    'feat.node.desc': 'Auto-detect Next.js, Vue, Vite projects. Start dev servers with Caddy reverse proxy and hot-reload on *.test domains.',
    'feat.node.tag': 'Hot Reload',
    'feat.selfheal.title': 'Self-Healing Diagnostics',
    'feat.selfheal.desc': 'Auto-detect port conflicts, stale PIDs, and corrupt configs. One-click fix per service with full diagnostics.',
    'feat.selfheal.tag': 'Auto Fix',

    /* Showcase / Screenshots */
    'showcase.title': 'See DevNexus in Action',
    'showcase.subtitle': 'A clean, modern interface for managing your entire development stack.',
    'showcase.dashboard': 'Dashboard — system overview and service health',
    'showcase.services': 'Services — manage PHP, MySQL, Caddy, and more',
    'showcase.sites': 'Sites — project discovery and management',
    'showcase.binaries': 'Binaries — download and install tools',
    'showcase.database': 'Database — phpMyAdmin and Adminer integration',
    'showcase.logs': 'Logs — real-time service monitoring',

    /* OS Support */
    'os.title': 'Cross-Platform Support',
    'os.subtitle': 'Available on all major operating systems with native performance.',
    'os.linux': 'Linux',
    'os.linux.desc': 'Deb, AppImage, RPM',
    'os.macos': 'macOS',
    'os.macos.desc': 'Intel & Apple Silicon',
    'os.windows': 'Windows',
    'os.windows.desc': 'MSI Installer',

    /* CTA */
    'cta.title': 'Ready to Supercharge Your Development Workflow?',
    'cta.subtitle': 'Download DevNexus today and experience the future of local PHP development.',
    'cta.btn': 'Get Started Free',

    /* Footer */
    'footer.desc': 'The all-in-one local PHP/Laravel development environment manager. Built with ❤️ by smartTeam',
    'footer.product': 'Product',
    'footer.links.home': 'Home',
    'footer.links.docs': 'Documentation',
    'footer.links.download': 'Download',
    'footer.company': 'Company',
    'footer.links.founders': 'About Us',
    'footer.links.github': 'GitHub',
    'footer.links.linkedin': 'LinkedIn',
    'footer.links.contact': 'Contact',
    'footer.resources': 'Resources',
    'footer.links.changelog': 'Changelog',
    'footer.links.releases': 'Releases',
    'footer.copyright': '© 2026 smartTeam. All rights reserved.',
    'footer.theme': 'Theme',

    /* Docs Page */
    'docs.title': 'Documentation',
    'docs.intro.title': 'Introduction',
    'docs.intro.p1': 'DevNexus is a cross-platform desktop application designed to simplify local PHP and Laravel development. It manages all the services you need — PHP, MySQL, Caddy, Redis, Mailpit, and more — through a single, intuitive interface.',
    'docs.intro.p2': 'Built with Tauri v2 for a native experience, DevNexus combines the power of a Rust backend with a modern React frontend.',
    'docs.intro.p3': 'DevNexus is a free, open-source alternative to XAMPP and Laragon. Unlike XAMPP, DevNexus isolates PHP per project, supports PHP 8.0–8.4 side by side, and ships with a built-in MCP server so AI coding assistants can manage your environment directly.',
    'docs.intro.compare.title': 'DevNexus vs. XAMPP vs. Laragon',
    'docs.intro.compare.col1': 'Feature',
    'docs.intro.compare.r1': 'Multiple PHP versions side by side',
    'docs.intro.compare.r2': 'Per-site PHP isolation',
    'docs.intro.compare.r3': 'Cross-platform (Linux/macOS/Windows)',
    'docs.intro.compare.r4': 'Built-in AI / MCP server',
    'docs.intro.compare.r5': 'Automatic HTTPS (*.test domains)',
    'docs.intro.compare.r6': 'Open source (MIT)',
    'docs.intro.compare.windowsonly': 'Windows only',
    'docs.intro.compare.manual': 'Manual',
    'docs.install.title': 'Installation',
    'docs.install.step1': 'Download the latest release for your operating system from the GitHub Releases page.',
    'docs.install.step2': 'Run the installer (DMG for macOS, MSI for Windows, DEB/AppImage/RPM for Linux).',
    'docs.install.step3': 'Launch DevNexus from your applications menu.',
    'docs.install.step4': 'The app will automatically detect your ~/www directory and suggest downloading required services.',
    'docs.install.intro': 'Installing DevNexus takes less than five minutes and requires no prior configuration:',
    'docs.install.notelabel': 'Note:',
    'docs.install.notetext': 'DevNexus is compatible with Linux (x86_64, aarch64), macOS (Intel, Apple Silicon), and Windows (x86_64).',
    'docs.getting-started.title': 'Getting Started',
    'docs.getting-started.p1': 'When you first launch DevNexus, you will see the Dashboard. From here, you can:',
    'docs.getting-started.item1': 'Download and install PHP, MySQL, Caddy, and other services from the Binaries page',
    'docs.getting-started.item2': 'Start/stop services from the Services page',
    'docs.getting-started.item3': 'Discover and manage your projects from the Sites page',
    'docs.getting-started.item4': 'Configure extensions and settings from the Config page',
    'docs.php.title': 'PHP Version Management',
    'docs.php.p1': 'DevNexus supports PHP versions 8.0 through 8.4. Binaries are downloaded from static-php.dev, pre-compiled for your platform.',
    'docs.php.p2': 'You can enable/disable extensions with a single click, and the app automatically generates optimized php.ini files.',
    'docs.mysql.title': 'MySQL Database Management',
    'docs.mysql.p1': 'DevNexus downloads official MySQL Community Server binaries and initializes the data directory automatically.',
    'docs.mysql.p2': 'For database administration, DevNexus integrates phpMyAdmin and Adminer, both served locally through Caddy.',
    'docs.caddy.title': 'Caddy Web Server',
    'docs.caddy.p1': 'Caddy is configured automatically with PHP-FPM FastCGI support. Each project gets its own *.test domain with automatic TLS certificates.',
    'docs.caddy.p2': 'The configuration reloads automatically when files change in your projects directory.',
    'docs.redis.title': 'Redis Cache',
    'docs.redis.p1': 'DevNexus provides one-click Redis server management for caching and session storage. Simply click start on the Redis service card and it runs on the default port 6379.',
    'docs.redis.p2': 'No configuration needed — Redis starts with optimized defaults for local development.',
    'docs.redis.p3': 'Redis is commonly used in Laravel projects for three things: application cache, session storage, and queue driver for background jobs. Point your .env at the local instance and it works exactly like production Redis.',
    'docs.redis.use1': 'application cache',
    'docs.redis.use2': 'session storage',
    'docs.redis.use3': 'queue driver',
    'docs.mailpit.title': 'Mailpit — Email Testing',
    'docs.mailpit.p1': 'Mailpit is an SMTP testing tool integrated into DevNexus. It captures all outgoing emails from your applications and provides a web UI to view them.',
    'docs.mailpit.p2': 'SMTP Server: localhost:1025 — Web UI: http://localhost:8025',
    'docs.mailpit.p3': 'No more emails accidentally sent to real addresses during development. Mailpit catches them all.',
    'docs.mailpit.p4': 'For Laravel, point your mail configuration at Mailpit and every notification, password reset, and queued email is caught locally and viewable in the browser instead of leaving your machine.',
    'docs.phpfpm.title': 'Per-Site PHP Isolation',
    'docs.phpfpm.p1': 'DevNexus creates a separate PHP-FPM pool for each site, ensuring complete isolation. Each project uses its own PHP version, extensions, and configuration without conflicts.',
    'docs.phpfpm.p2': 'On Unix systems, each site gets its own FPM pool with a dedicated Unix socket. On Windows, DevNexus uses separate PHP built-in servers per site.',
    'docs.phpfpm.how': 'The PHP version for each site is detected from: 1) .devnexus.json config, 2) .php-version file, 3) composer.json requirements, or 4) the global default.',
    'docs.xdebug.title': 'Xdebug On-Demand',
    'docs.xdebug.p1': 'DevNexus supports Xdebug with a "trigger on demand" approach. When enabled for a site, Xdebug loads but stays in xdebug.mode=off until you send a debug trigger cookie or header.',
    'docs.xdebug.p2': 'This means zero performance overhead during normal development, but full debugging is available whenever you need it. Xdebug listens on port 9003 by default.',
    'docs.xdebug.how': 'To enable: set "xdebug": true in your site .devnexus.json configuration. DevNexus auto-locates the Xdebug extension binary for your PHP version.',
    'docs.mcp.title': 'AI / MCP Server',
    'docs.mcp.p1': 'DevNexus includes a built-in MCP (Model Context Protocol) server that exposes 17 tools for AI assistants to control your development environment. The server runs locally on 127.0.0.1:8938 with Bearer token authentication.',
    'docs.mcp.p2': 'Supported AI Clients (auto-setup): Claude Code, Claude Desktop, Cursor, Windsurf, Zed, OpenCode, VS Code, and JetBrains/Junie.',
    'docs.mcp.p3': 'Enable the MCP server from Settings. DevNexus can auto-configure all supported AI clients with a single click via the Setup AI Clients button.',
    'docs.mcp.p4': 'DevNexus also installs a DevNexus Skill file for Claude Code with example commands and workflows.',
    'docs.cron.title': 'Job Scheduler',
    'docs.cron.p1': 'DevNexus includes a built-in cron/job manager that runs scheduled tasks in the background. Schedule any command with minute-to-monthly intervals.',
    'docs.cron.p2': 'Each job runs in the background with full logging. You can view run history, clear logs, and trigger any job immediately with the Run Now button.',
    'docs.node.title': 'Node.js Dev Servers',
    'docs.node.p1': 'DevNexus auto-detects Node.js projects (Next.js, Vue, Vite, Express) and manages their development servers. Each site gets a dedicated dev server with a Caddy reverse proxy on a *.test domain.',
    'docs.node.p2': 'Package Manager Detection: DevNexus detects npm, yarn, pnpm, or bun from lockfiles and uses the correct command automatically.',
    'docs.node.p3': 'NVM Integration: Per-project .nvmrc support — DevNexus reads your Node version file and uses the correct version via NVM.',
    'docs.node.p4': 'Dev ports are automatically assigned (11000–11999) or configurable per site. The reverse proxy is managed by Caddy with automatic HTTPS.',
    'docs.queue.title': 'Queue Workers',
    'docs.queue.p1': 'DevNexus manages Laravel queue workers per site. Start, stop, and monitor php artisan queue:work processes for each project independently.',
    'docs.queue.p2': 'Each worker is tracked by PID with full lifecycle management. View running workers and their status from the queue workers panel.',
    'docs.selfhealing.title': 'Self-Healing Diagnostics',
    'docs.selfhealing.p1': 'DevNexus automatically detects common service issues and provides one-click fixes.',
    'docs.selfhealing.f1': 'Stale PIDs — detects and cleans processes that are no longer running',
    'docs.selfhealing.f2': 'Port Conflicts — identifies ports in use by other processes',
    'docs.selfhealing.f3': 'Corrupt Configs — regenerates broken Caddyfiles and PHP-FPM configs',
    'docs.selfhealing.f4': 'Stopped Services — restarts services that should be running',
    'docs.selfhealing.p2': 'Run a full diagnostic scan from Settings → Health to see all issues. Fix individual issues or click Fix All to resolve everything at once.',
    'docs.system.title': 'System Integration',
    'docs.system.p1': 'DevNexus integrates deeply with your operating system to provide a seamless development experience.',
    'docs.system.path': 'PATH Injection — All binary directories are automatically added to your system PATH.',
    'docs.system.hosts': '/etc/hosts Management — Each project gets a *.test domain with automatic privilege escalation.',
    'docs.system.ssl': 'SSL Trust — Caddy Root CA is injected into your system certificate store for trusted local HTTPS.',
    'docs.system.watcher': 'File Watcher — Automatically reloads Caddy configuration when files change.',
    'docs.themes.title': 'Theme System',
    'docs.themes.p1': 'DevNexus ships with five built-in themes and a complete JSON theme format: colors, typography, effects and layout are all driven by design tokens.',
    'docs.themes.flat': 'Flat UI — Clean, zero-depth default theme',
    'docs.themes.aurora': 'Aurora Flat — Warm earthy palette with vermilion and jade accents',
    'docs.themes.neon': 'Neon Terminal — Dark, high-contrast cyberpunk theme',
    'docs.themes.macos': 'macOS — SF Pro typography, translucent chrome, layered shadows',
    'docs.themes.windows': 'Windows — Fluent 2 with acrylic surfaces and a 4px radius',
    'docs.themes.builder.title': 'Visual Theme Builder',
    'docs.themes.builder.p': 'Design a theme in your browser with a live preview, then download the JSON and import it into DevNexus.',
    'docs.themes.builder.cta': 'Open the Theme Builder',
    'docs.themes.customize.title': 'What you can customize',
    'docs.themes.gallery.title': 'Themes in action',
    'docs.themes.gallery.p': 'The same interface under two native-inspired themes — every surface, radius and shadow comes from the theme JSON.',
    'docs.img.themes-page': 'The Themes page — pick a built-in theme, adjust text size, import your own',
    'docs.img.theme-builder': 'The online Theme Builder — presets, live preview and JSON export',
    'docs.img.theme-macos': 'macOS theme applied',
    'docs.img.theme-windows': 'Windows theme applied',
    'docs.themes.custom': 'Import / Export — Themes are plain JSON files, validated on import',
    'docs.themes.tokens': 'Colors — Full light and dark palettes plus semantic status tokens',
    'docs.themes.typography': 'Typography — Font family, heading and label styles, and a 9-step size scale',
    'docs.themes.effects': 'Effects — Radius, border width, shadow presets, glass blur and hover motion',
    'docs.themes.layout': 'Layout — Sidebar position (left/top/hidden), header, content width and padding',
    'docs.themes.p2': 'Toggle dark and light mode, adjust the global text size, or create your own theme and share it with the community.',
    'docs.faq.title': 'Frequently Asked Questions',
    'docs.faq.q1': 'Is DevNexus free?',
    'docs.faq.a1': 'Yes, DevNexus is completely free and open source under the MIT license.',
    'docs.faq.q2': 'Which operating systems are supported?',
    'docs.faq.a2': 'DevNexus supports Linux (deb, AppImage, RPM), macOS (Intel & Apple Silicon), and Windows (MSI).',
    'docs.faq.q3': 'Do I need to install PHP separately?',
    'docs.faq.a3': 'No. DevNexus downloads and manages PHP binaries for you. You can install multiple versions and switch between them.',
    'docs.faq.q4': 'Can I use DevNexus with existing projects?',
    'docs.faq.a4': 'Absolutely. DevNexus auto-discovers projects in your ~/www directory and supports Laravel, CakePHP, WordPress, Slim, and more.',
    'docs.faq.q5': 'Is DevNexus a good alternative to XAMPP or Laragon?',
    'docs.faq.a5': 'Yes. DevNexus offers everything XAMPP and Laragon provide — plus per-site PHP isolation, multiple simultaneous PHP versions, automatic HTTPS, and a built-in AI/MCP server — while remaining fully open source and cross-platform.',
    'docs.faq.q6': 'Can I run multiple PHP versions at the same time?',
    'docs.faq.a6': 'Yes. Each site gets its own PHP-FPM pool, so one project can run PHP 8.1 while another runs PHP 8.4, simultaneously, with zero conflicts.',
    'docs.faq.q7': 'Does DevNexus work with AI coding assistants like Claude Code?',
    'docs.faq.a7': 'Yes. DevNexus includes a built-in MCP server with 17 tools and auto-setup for Claude Code, Claude Desktop, Cursor, Windsurf, Zed, VS Code, and JetBrains IDEs.',
    'docs.faq.q8': 'Does DevNexus support Node.js projects alongside PHP?',
    'docs.faq.a8': 'Yes. DevNexus auto-detects Next.js, Vue, and Vite projects, manages their dev servers, and reverse-proxies them through Caddy on *.test domains with hot reload.',

    /* Home FAQ (AEO) */
    'faq.label': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Concise answers to the most common questions about DevNexus.',
    'faq.q1': 'What is DevNexus?',
    'faq.a1': 'DevNexus is a free, open-source desktop application that manages your entire local PHP/Laravel development stack — PHP, MySQL, Caddy, Redis, Mailpit and more — through a single interface.',
    'faq.q2': 'Is DevNexus free?',
    'faq.a2': 'Yes, DevNexus is completely free and open source under the MIT license. Star it on GitHub to support the project.',
    'faq.q3': 'Which operating systems are supported?',
    'faq.a3': 'DevNexus supports Linux (deb, AppImage, RPM), macOS (Intel & Apple Silicon), and Windows (MSI). See all downloads.',
    'faq.q4': 'Do I need to install PHP separately?',
    'faq.a4': 'No. DevNexus downloads and manages PHP binaries for you — PHP 8.0 through 8.4 — and you can switch between versions with one click. Learn about PHP version management.',
    'faq.q5': 'Can I use DevNexus with existing projects?',
    'faq.a5': 'Absolutely. DevNexus auto-discovers projects in your ~/www directory and supports Laravel, CakePHP, WordPress, Slim, and more.',
    'faq.more': 'More questions? Read the full documentation FAQ.',

    /* Learn / Start Here (internal links) */
    'learn.label': 'Documentation',
    'learn.title': 'Start Here — Tutorials & Guides',
    'learn.subtitle': 'Quick-start steps, guides, and answers to help you get the most out of DevNexus.',
    'learn.card1.title': 'Getting Started',
    'learn.card1.desc': 'Install DevNexus, download your services, and create your first project in minutes.',
    'learn.card1.cta': 'Read the guide →',
    'learn.card2.title': 'Installation Guide',
    'learn.card2.desc': 'Step-by-step installer instructions for Windows, macOS, and Linux.',
    'learn.card2.cta': 'Read the guide →',
    'learn.card3.title': 'PHP Version Management',
    'learn.card3.desc': 'Install multiple PHP versions, switch instantly, and manage extensions.',
    'learn.card3.cta': 'Read the guide →',
    'learn.card4.title': 'MySQL & Databases',
    'learn.card4.desc': 'One-click MySQL setup with phpMyAdmin and Adminer integration.',
    'learn.card4.cta': 'Read the guide →',
    'learn.card5.title': 'Caddy & Auto HTTPS',
    'learn.card5.desc': 'Per-site *.test domains with automatic TLS and live config reload.',
    'learn.card5.cta': 'Read the guide →',
    'learn.card6.title': 'Full Documentation',
    'learn.card6.desc': 'Everything from themes and Mailpit to system integration and FAQ.',
    'learn.card6.cta': 'Open docs →',

    /* Founders Page */
    'founders.title': 'About Us',
    'founders.subtitle': 'Meet the team behind DevNexus — passionate developers building tools for developers.',
    'founders.story.title': 'Our Story',
    'founders.story.p1': 'DevNexus was born from a simple idea: local PHP development should be simple, not a chore. As developers working with Laravel and PHP daily, we experienced firsthand the friction of manually configuring and managing development environments.',
    'founders.story.p2': 'We built DevNexus to solve this problem — a single, beautiful desktop application that manages your entire development stack. What started as an internal tool quickly evolved into a full-featured application that we are proud to share with the developer community.',
    'founders.mission.title': 'Our Mission',
    'founders.mission.p1': 'To empower developers with tools that eliminate friction and enable them to focus on what matters most — building great software.',
    'founders.team.title': 'smartTeam',
    'founders.team.p1': 'smartTeam is a professional software company specialized in designing and developing integrated systems and creative technical solutions. As a leader in modern technologies, we provide a wide range of services including Enterprise Resource Planning (ERP), web development, Android and iOS mobile applications, Search Engine Optimization (SEO), and E-commerce solutions.',
    'founders.team.bio': 'A leading software company specializing in professional systems, mobile applications (iOS/Android), ERP solutions, and SEO services.',

    /* Team Members */
    'team.title': 'Meet the Team',
    'team.eman.name': 'Eman Saeed',
    'team.eman.role': 'UI/UX Designer',
    'team.eman.bio': "Designs the DevNexus interface end to end — from the dashboard and theme system to the website you're reading now. Focused on clarity, accessibility, and a native feel across dark and light modes.",
    'team.eltayeb.name': 'Eltayeb Hassan',
    'team.eltayeb.role': 'Full-Stack Developer',
    'team.eltayeb.bio': "Builds and maintains DevNexus's Rust backend and React frontend. Leads feature development across PHP version management, MySQL integration, and the built-in MCP server.",
    'team.fadi.name': 'Fadi Omar',
    'team.fadi.role': 'DevOps Engineer',
    'team.fadi.bio': 'Owns the build, release, and cross-platform packaging pipeline — from binary downloads and auto-updates to system integration on Linux, macOS, and Windows.',
    'team.community.name': 'Open Source Community',
    'team.community.role': 'Contributors',
    'team.community.bio': 'We welcome contributions from developers worldwide. The DevNexus community helps shape the future of local PHP development with every pull request and issue.',
    'founders.values': 'Our Values',
    'founders.val1': 'Open Source First — We believe software should be transparent and accessible.',
    'founders.val2': 'Developer Experience — Every pixel and interaction is designed with developers in mind.',
    'founders.val3': 'Cross-Platform — Quality tools should work everywhere, regardless of your OS.',
    'founders.val4': 'Performance — Native speed with a beautiful interface, no compromises.',
  };

  const ar = {
    'nav.home': 'الرئيسية',
    'nav.docs': 'التوثيق',
    'nav.founders': 'المؤسسون',
    'nav.download': 'تحميل',
    'tb.nav': 'منشئ الثيمات',
    'nav.getting-started': 'بدء الاستخدام',
    'nav.features': 'المميزات',
    'nav.showcase': 'لقطات الشاشة',

    /* Meta (SEO) */
    'meta.description': 'DevNexus بديل مجاني ومفتوح المصدر لبرنامجي XAMPP و Laragon لتطوير PHP و Laravel محلياً. أدر PHP وMySQL وCaddy وRedis وMailpit من تطبيق سطح مكتب واحد على ويندوز وماك ولينكس.',

    'hero.label': 'أحدث إصدار v0.4.1',
    'hero.title': 'ديفنيكسس — بيئة تطوير PHP/Laravel المحلية',
    'hero.subtitle': 'البديل المجاني ومفتوح المصدر لبرنامجي XAMPP و Laragon لتطوير PHP و Laravel. أدر بيئة التطوير المحلية بالكامل من تطبيق سطح مكتب واحد جميل.',
    'hero.cta': 'حمّل الآن',
    'hero.learn': 'اعرف المزيد',
    'hero.feature1': 'عزل PHP 8.0–8.4 لكل مشروع',
    'hero.feature2': 'خادم MCP مدمج + 8 مساعدي ذكاء اصطناعي',
    'hero.feature3': 'جدولة المهام وعمال الصفوف',
    'hero.feature4': 'خوادم Node.js مع بروكسي تلقائي',
    'hero.github': 'نجمة على GitHub',

    'stat.commands': 'أوامر',
    'stat.mcp': 'أدوات MCP',
    'stat.ai': 'عملاء الذكاء الاصطناعي',
    'stat.platforms': 'المنصات المدعومة',

    'features.title': 'كل ما تحتاجه لتطوير PHP المحلي',
    'features.subtitle': 'مدير بيئة تطوير متكامل من إدارة إصدارات PHP والعزل لكل مشروع إلى التحكم بالذكاء الاصطناعي وخوادم Node.js.',
    'feat.php.title': 'مدير إصدارات PHP',
    'feat.php.desc': 'حمّل، ثبّت، وبدّل بين PHP 8.0 إلى 8.4. فعّل/عطّل الإضافات بنقرة واحدة. إنشاء php.ini تلقائي.',
    'feat.php.tag': 'PHP 8.0 — 8.4',
    'feat.mysql.title': 'مدير قواعد بيانات MySQL',
    'feat.mysql.desc': 'إعداد MySQL بنقرة واحدة مع إنشاء إعدادات تلقائي. دمج phpMyAdmin و Adminer لإدارة قواعد البيانات. أدوات التصدير والاستعادة.',
    'feat.mysql.tag': 'MySQL 8+',
    'feat.caddy.title': 'خادم ويب Caddy',
    'feat.caddy.desc': 'إنشاء ملفات Caddy تلقائياً مع دعم PHP-FPM. نطاقات افتراضية لكل مشروع بنطاق *.test. شهادات TLS تلقائية وتحديث مباشر.',
    'feat.caddy.tag': 'HTTPS تلقائي',
    'feat.projects.title': 'مدير مشاريع ذكي',
    'feat.projects.desc': 'اكتشاف تلقائي لـ Laravel، CakePHP، WordPress والمزيد. إجراءات سريعة: فتح في المتصفح، المحرر، git، artisan، composer، ونسخ احتياطي.',
    'feat.projects.tag': 'اكتشاف تلقائي',
    'feat.binaries.title': 'مدير تحميل البرامج',
    'feat.binaries.desc': 'تحميل وإدارة PHP، MySQL، Node.js، Nginx، PostgreSQL، Caddy، Redis، Mailpit، و Composer من داخل التطبيق.',
    'feat.binaries.tag': 'تثبيت بنقرة واحدة',
    'feat.themes.title': 'نظام سمات جميل',
    'feat.themes.desc': 'خمس سمات مدمجة — Flat UI و Aurora Flat و Neon Terminal و macOS و Windows. صمّم سمتك في منشئ السمات المرئي ثم استوردها كملف JSON. وضع داكن/فاتح كامل مع رموز تصميم.',
    'feat.themes.tag': 'قابل للتخصيص',
    'feat.system.title': 'دمج مع النظام',
    'feat.system.desc': 'إدارة PATH تلقائياً، إدارة /etc/hosts، تثبيت شهادات SSL، عناصر التحكم في علبة النظام، ومتابعة الملفات لإعادة التحميل.',
    'feat.system.tag': 'متكامل',
    'feat.logs.title': 'عارض السجلات المباشر',
    'feat.logs.desc': 'راقب جميع الخدمات آنياً مع إخراج سجلات ملون. تحديث تلقائي، تحديث يدوي، وتحميل ملفات السجلات.',
    'feat.logs.tag': 'مراقبة حية',
    'feat.updater.title': 'تحديث تلقائي',
    'feat.updater.desc': 'مفحّص تحديثات مدمج مع دمج GitHub Releases. تحديثات بنقرة واحدة تحافظ على أدواتك حديثة.',
    'feat.updater.tag': 'سلس',
    'feat.mcp.title': 'خادم MCP مدمج',
    'feat.mcp.desc': '17 أداة ذكاء اصطناعي عبر بروتوكول MCP مع توثيق Bearer. إعداد بنقرة لكلود كود، كرسور، VS Code، Windsurf، Zed والمزيد.',
    'feat.mcp.tag': 'جاهز للذكاء الاصطناعي',
    'feat.isolation.title': 'عزل PHP لكل مشروع',
    'feat.isolation.desc': 'يحصل كل مشروع على مجمع PHP-FPM أو خادم مدمج خاص. شغّل إصدارات PHP مختلفة لكل موقع دون تعارضات.',
    'feat.isolation.tag': 'صفر تعارضات',
    'feat.xdebug.title': 'Xdebug عند الطلب',
    'feat.xdebug.desc': 'يُفعّل Xdebug فقط عند الطلب عبر كوكي أو رأس — تصحيح كامل مع صفر عبء في الوضع العادي.',
    'feat.xdebug.tag': 'وضع المشغّل',
    'feat.cron.title': 'جدولة المهام',
    'feat.cron.desc': 'مدير مهام مدمج بفواصل من الدقيقة إلى الشهر. جدولة أوامر artisan وسكربتات ونسخ احتياطية تلقائية.',
    'feat.cron.tag': 'مهام مجدولة',
    'feat.node.title': 'خوادم Node.js',
    'feat.node.desc': 'كشف تلقائي لمشاريع Next.js و Vue و Vite. تشغيل خوادم تطوير مع بروكسي Caddy وتحديث فوري على نطاقات *.test.',
    'feat.node.tag': 'تحديث فوري',
    'feat.selfheal.title': 'تشخيص ذاتي للشفاء',
    'feat.selfheal.desc': 'كشف تعارضات المنافذ و PIDs القديمة والتكوينات التالفة. إصلاح نقرة واحدة لكل خدمة مع تشخيص كامل.',
    'feat.selfheal.tag': 'إصلاح تلقائي',

    'showcase.title': 'شاهد DevNexus أثناء العمل',
    'showcase.subtitle': 'واجهة نظيفة وعصرية لإدارة مجموعة التطوير بالكامل.',
    'showcase.dashboard': 'لوحة التحكم — نظرة عامة على النظام وحالة الخدمات',
    'showcase.services': 'الخدمات — إدارة PHP، MySQL، Caddy والمزيد',
    'showcase.sites': 'المشاريع — اكتشاف وإدارة المشاريع',
    'showcase.binaries': 'البرامج — تحميل وتثبيت الأدوات',
    'showcase.database': 'قواعد البيانات — دمج phpMyAdmin و Adminer',
    'showcase.logs': 'السجلات — مراقبة الخدمات آنياً',

    'os.title': 'دعم عبر المنصات',
    'os.subtitle': 'متوفر على جميع أنظمة التشغيل الرئيسية بأداء أصلي.',
    'os.linux': 'لينكس',
    'os.linux.desc': 'Deb، AppImage، RPM',
    'os.macos': 'ماك',
    'os.macos.desc': 'Intel و Apple Silicon',
    'os.windows': 'ويندوز',
    'os.windows.desc': 'مثبّت الـMSI',

    'cta.title': 'هل أنت مستعد لتطوير سير عملك؟',
    'cta.subtitle': 'حمّل DevNexus اليوم وجرّب مستقبل تطوير PHP المحلي.',
    'cta.btn': 'ابدأ مجاناً',

    'footer.desc': 'مدير بيئة تطوير PHP/Laravel المحلي المتكامل. بُني بحب بواسطة smartTeam',
    'footer.product': 'المنتج',
    'footer.links.home': 'الرئيسية',
    'footer.links.docs': 'التوثيق',
    'footer.links.download': 'تحميل',
    'footer.company': 'الشركة',
    'footer.links.founders': 'من نحن',
    'footer.links.github': 'جيت هب',
    'footer.links.linkedin': 'لينكد إن',
    'footer.links.contact': 'اتصل بنا',
    'footer.resources': 'المصادر',
    'footer.links.changelog': 'سجل التغييرات',
    'footer.links.releases': 'الإصدارات',
    'footer.copyright': '© 2026 smartTeam. جميع الحقوق محفوظة.',
    'footer.theme': 'السمة',

    'docs.title': 'التوثيق',
    'docs.intro.title': 'مقدمة',
    'docs.intro.p1': 'DevNexus هو تطبيق سطح مكتب متعدد المنصات مصمم لتبسيط تطوير PHP و Laravel المحلي. يدير جميع الخدمات التي تحتاجها — PHP، MySQL، Caddy، Redis، Mailpit، والمزيد — من خلال واجهة واحدة بديهية.',
    'docs.intro.p2': 'مبني باستخدام Tauri v2 لتجربة أصلية، يجمع DevNexus بين قوة Rust الخلفية وواجهة React الحديثة.',
    'docs.intro.p3': 'DevNexus بديل مجاني ومفتوح المصدر لبرنامجي XAMPP و Laragon. على عكس XAMPP، يعزل DevNexus بيئة PHP لكل مشروع على حدة، ويدعم تشغيل إصدارات PHP من 8.0 إلى 8.4 في نفس الوقت، ويأتي مزودًا بخادم MCP مدمج يتيح لمساعدات الذكاء الاصطناعي إدارة بيئة التطوير مباشرة.',
    'docs.intro.compare.title': 'DevNexus مقابل XAMPP و Laragon',
    'docs.intro.compare.col1': 'الميزة',
    'docs.intro.compare.r1': 'تشغيل عدة إصدارات PHP في نفس الوقت',
    'docs.intro.compare.r2': 'عزل PHP لكل موقع على حدة',
    'docs.intro.compare.r3': 'يعمل على لينكس وماك وويندوز',
    'docs.intro.compare.r4': 'خادم ذكاء اصطناعي / MCP مدمج',
    'docs.intro.compare.r5': 'HTTPS تلقائي (نطاقات .test*)',
    'docs.intro.compare.r6': 'مفتوح المصدر (MIT)',
    'docs.intro.compare.windowsonly': 'ويندوز فقط',
    'docs.intro.compare.manual': 'يدوي',
    'docs.install.title': 'التثبيت',
    'docs.install.step1': 'حمّل أحدث إصدار لنظام تشغيلك من صفحة الإصدارات على GitHub.',
    'docs.install.step2': 'شغّل المثبّت (DMG لماك، MSI لويندوز، DEB/AppImage/RPM للينكس).',
    'docs.install.step3': 'شغّل DevNexus من قائمة التطبيقات.',
    'docs.install.step4': 'سيكتشف التطبيق تلقائياً مجلد ~/www ويقترح تحميل الخدمات المطلوبة.',
    'docs.install.intro': 'تثبيت DevNexus يستغرق أقل من خمس دقائق ولا يتطلب أي إعداد مسبق:',
    'docs.install.notelabel': 'ملاحظة:',
    'docs.install.notetext': 'يعمل DevNexus على لينكس (x86_64، aarch64)، ماك (Intel وApple Silicon)، وويندوز (x86_64).',
    'docs.getting-started.title': 'بدء الاستخدام',
    'docs.getting-started.p1': 'عند تشغيل DevNexus لأول مرة، ستظهر لوحة التحكم. من هنا يمكنك:',
    'docs.getting-started.item1': 'تحميل وتثبيت PHP، MySQL، Caddy، والخدمات الأخرى من صفحة البرامج',
    'docs.getting-started.item2': 'تشغيل/إيقاف الخدمات من صفحة الخدمات',
    'docs.getting-started.item3': 'اكتشاف وإدارة مشاريعك من صفحة المشاريع',
    'docs.getting-started.item4': 'تكوين الإضافات والإعدادات من صفحة الإعدادات',
    'docs.php.title': 'إدارة إصدارات PHP',
    'docs.php.p1': 'يدعم DevNexus إصدارات PHP من 8.0 إلى 8.4. يتم تحميل البرامج من static-php.dev، مجمّعة مسبقاً لمنصتك.',
    'docs.php.p2': 'يمكنك تفعيل/تعطيل الإضافات بنقرة واحدة، ويقوم التطبيق تلقائياً بإنشاء ملفات php.ini محسّنة.',
    'docs.mysql.title': 'إدارة قواعد بيانات MySQL',
    'docs.mysql.p1': 'يقوم DevNexus بتحميل برامج MySQL Community Server الرسمية وتهيئة مجلد البيانات تلقائياً.',
    'docs.mysql.p2': 'لإدارة قواعد البيانات، يدمج DevNexus phpMyAdmin و Adminer، وكلاهما يُخدم محلياً عبر Caddy.',
    'docs.caddy.title': 'خادم ويب Caddy',
    'docs.caddy.p1': 'يتم تكوين Caddy تلقائياً مع دعم PHP-FPM FastCGI. كل مشروع يحصل على نطاق *.test مع شهادات TLS تلقائية.',
    'docs.caddy.p2': 'يتم إعادة تحميل الإعدادات تلقائياً عند تغيير الملفات في مجلد المشاريع.',
    'docs.redis.title': 'Redis — التخزين المؤقت',
    'docs.redis.p1': 'يوفر DevNexus إدارة خادم Redis بنقرة واحدة للتخزين المؤقت والجلسات. يكفي الضغط على زر التشغيل في بطاقة خدمة Redis ليعمل على المنفذ الافتراضي 6379.',
    'docs.redis.p2': 'لا حاجة لتكوين — Redis يعمل بإعدادات محسّنة مسبقاً.',
    'docs.redis.p3': 'يُستخدم Redis في مشاريع Laravel عادةً لثلاثة أغراض: التخزين المؤقت للتطبيق (cache)، وتخزين الجلسات (sessions)، ومحرك الطوابير (queue) للمهام الخلفية. اضبط ملف .env على الخادم المحلي وسيعمل تمامًا مثل Redis في بيئة الإنتاج.',
    'docs.redis.use1': 'التخزين المؤقت',
    'docs.redis.use2': 'تخزين الجلسات',
    'docs.redis.use3': 'محرك الطوابير',
    'docs.mailpit.title': 'Mailpit — اختبار البريد الإلكتروني',
    'docs.mailpit.p1': 'Mailpit هي أداة اختبار SMTP مدمجة في DevNexus. تلتقط جميع رسائل البريد الصادرة من تطبيقاتك وتوفر واجهة ويب لعرضها.',
    'docs.mailpit.p2': 'خادم SMTP: localhost:1025 — واجهة الويب: http://localhost:8025',
    'docs.mailpit.p3': 'لا مزيد من رسائل البريد المرسلة عن طريق الخطأ أثناء التطوير.',
    'docs.mailpit.p4': 'في Laravel، اضبط إعدادات البريد على Mailpit وسيتم التقاط كل إشعار وإعادة تعيين كلمة مرور وبريد مُجدوَل محليًا، مع إمكانية عرضه في المتصفح بدل إرساله فعليًا.',
    'docs.phpfpm.title': 'عزل PHP لكل مشروع',
    'docs.phpfpm.p1': 'ينشئ DevNexus مجمع PHP-FPM منفصلاً لكل موقع، مما يضمن عزلاً كاملاً. يستخدم كل مشروع إصدار PHP وإضافاته وإعداداته الخاصة دون تعارضات.',
    'docs.phpfpm.p2': 'على أنظمة Unix، يحصل كل موقع على مجمع FPM خاص بمقبس مخصص. على ويندوز، يستخدم DevNexus خوادم PHP مدمجة منفصلة لكل موقع.',
    'docs.phpfpm.how': 'يُكتشف إصدار PHP لكل موقع من: 1) ملف .devnexus.json، 2) ملف .php-version، 3) متطلبات composer.json، أو 4) الإعداد الافتراضي العام.',
    'docs.xdebug.title': 'Xdebug عند الطلب',
    'docs.xdebug.p1': 'يدعم DevNexus Xdebug بنهج "التشغيل عند الطلب". عند التفعيل لموقع، يُحمَّل Xdebug لكنه يبقى في وضع xdebug.mode=off حتى ترسل كوكي أو رأس مشغّل.',
    'docs.xdebug.p2': 'هذا يعني صفر عبء أداء أثناء التطوير العادي، مع توفر تصحيح كامل عند الحاجة. يستمع Xdebug على المنفذ 9003 افتراضياً.',
    'docs.xdebug.how': 'لتفعيله: اضبط "xdebug": true في ملف .devnexus.json لموقعك. يحدد DevNexus تلقائياً ملف إضافة Xdebug لإصدار PHP الخاص بك.',
    'docs.mcp.title': 'خادم AI / MCP',
    'docs.mcp.p1': 'يتضمن DevNexus خادم MCP (بروتوكول سياق النموذج) مدمجاً يعرض 17 أداة لمساعدي الذكاء الاصطناعي للتحكم في بيئة التطوير. يعمل الخادم محلياً على 127.0.0.1:8938 مع توثيق Bearer.',
    'docs.mcp.p2': 'عملاء الذكاء الاصطناعي المدعومون (إعداد تلقائي): Claude Code، Claude Desktop، Cursor، Windsurf، Zed، OpenCode، VS Code، و JetBrains/Junie.',
    'docs.mcp.p3': 'فعّل خادم MCP من الإعدادات. يستطيع DevNexus إعداد جميع عملاء الذكاء الاصطناعي المدعومين بنقرة واحدة عبر زر Setup AI Clients.',
    'docs.mcp.p4': 'يثبّت DevNexus أيضاً ملف Skill خاص به لبرنامج Claude Code مع أمثلة أوامر وسير عمل.',
    'docs.cron.title': 'جدولة المهام',
    'docs.cron.p1': 'يتضمن DevNexus مدير مهام cron مدمجاً يشغّل المهام المجدولة في الخلفية. جدول أي أمر بفواصل من الدقيقة إلى الشهر.',
    'docs.cron.p2': 'كل مهمة تعمل في الخلفية مع تسجيل كامل. يمكنك عرض سجل التشغيل ومسحه وتشغيل أي مهمة فوراً بزر Run Now.',
    'docs.node.title': 'خوادم Node.js',
    'docs.node.p1': 'يكتشف DevNexus تلقائياً مشاريع Node.js (Next.js، Vue، Vite، Express) ويدير خوادم التطوير الخاصة بها. يحصل كل موقع على خادم تطوير مخصص مع بروكسي Caddy على نطاق *.test.',
    'docs.node.p2': 'كشف مدير الحزم: يكتشف DevNexus npm، yarn، pnpm، أو bun من ملفات القفل ويستخدم الأمر الصحيح تلقائياً.',
    'docs.node.p3': 'دمج NVM: دعم .nvmrc لكل مشروع — يقرأ DevNexus ملف إصدار Node الخاص بك ويستخدم الإصدار الصحيح عبر NVM.',
    'docs.node.p4': 'تُعيّن منافذ التطوير تلقائياً (11000–11999) أو قابلة للتخصيص لكل موقع. يدير Caddy البروكسي العكسي مع HTTPS تلقائي.',
    'docs.queue.title': 'عمال الصفوف',
    'docs.queue.p1': 'يدير DevNexus عمال صفوف Laravel لكل موقع. ابدأ وأوقف وراقب عمليات php artisan queue:work لكل مشروع بشكل مستقل.',
    'docs.queue.p2': 'كل عامل يُتتبع بواسطة PID مع إدارة دورة حياة كاملة. اعرض العمال العاملين وحالتهم من لوحة عمال الصفوف.',
    'docs.selfhealing.title': 'تشخيص ذاتي للشفاء',
    'docs.selfhealing.p1': 'يكتشف DevNexus تلقائياً مشاكل الخدمات الشائعة ويوفر إصلاحات بنقرة واحدة.',
    'docs.selfhealing.f1': 'PIDs قديمة — يكتشف وينظف العمليات التي لم تعد تعمل',
    'docs.selfhealing.f2': 'تعارضات المنافذ — يحدد المنافذ المستخدمة بواسطة عمليات أخرى',
    'docs.selfhealing.f3': 'تكوينات تالفة — يعيد إنشاء ملفات Caddy و PHP-FPM المكسورة',
    'docs.selfhealing.f4': 'خدمات متوقفة — يعيد تشغيل الخدمات التي يفترض أن تعمل',
    'docs.selfhealing.p2': 'شغّل فحص تشخيص كامل من الإعدادات → الصحة لرؤية كل المشاكل. أصلح المشاكل الفردية أو انقر Fix All لحل كل شيء دفعة واحدة.',
    'docs.system.title': 'دمج مع النظام',
    'docs.system.p1': 'يتكامل DevNexus بعمق مع نظام التشغيل الخاص بك لتوفير تجربة تطوير سلسة.',
    'docs.system.path': 'إدارة PATH — يتم إضافة مسارات البرامج تلقائياً إلى PATH النظام.',
    'docs.system.hosts': 'إدارة /etc/hosts — كل مشروع يحصل على نطاق *.test مع صلاحيات تلقائية.',
    'docs.system.ssl': 'شهادات SSL — يتم تثبيت شهادة Caddy Root CA في متجر الشهادات.',
    'docs.system.watcher': 'مراقب الملفات — إعادة تحميل إعدادات Caddy تلقائياً عند تغيير الملفات.',
    'docs.themes.title': 'نظام السمات',
    'docs.themes.p1': 'يأتي DevNexus بخمس سمات مدمجة وتنسيق كامل للسمات بصيغة JSON: الألوان والخطوط والتأثيرات والتخطيط كلها مبنية على رموز التصميم.',
    'docs.themes.flat': 'Flat UI — سمة افتراضية نظيفة وبلا عمق',
    'docs.themes.aurora': 'Aurora Flat — لوحة ترابية دافئة بلمسات قرمزية وزمرّدية',
    'docs.themes.neon': 'Neon Terminal — سمة داكنة عالية التباين بمظهر سايبربانك',
    'docs.themes.macos': 'macOS — خطوط SF Pro وواجهة شفافة وظلال متدرجة',
    'docs.themes.windows': 'Windows — تصميم Fluent 2 بأسطح أكريليك وزوايا 4 بكسل',
    'docs.themes.builder.title': 'منشئ السمات المرئي',
    'docs.themes.builder.p': 'صمّم سمة في المتصفح مع معاينة مباشرة، ثم نزّل ملف JSON واستورده في DevNexus.',
    'docs.themes.builder.cta': 'افتح منشئ السمات',
    'docs.themes.customize.title': 'ما يمكنك تخصيصه',
    'docs.themes.gallery.title': 'السمات أثناء الاستخدام',
    'docs.themes.gallery.p': 'الواجهة نفسها تحت سمتين مستوحيتين من أنظمة التشغيل — كل سطح وانحناء وظل مصدره ملف JSON الخاص بالسمة.',
    'docs.img.themes-page': 'صفحة السمات — اختر سمة مدمجة أو اضبط حجم النص أو استورد سمتك',
    'docs.img.theme-builder': 'منشئ السمات عبر الإنترنت — قوالب ومعاينة مباشرة وتصدير JSON',
    'docs.img.theme-macos': 'سمة macOS مطبَّقة',
    'docs.img.theme-windows': 'سمة Windows مطبَّقة',
    'docs.themes.custom': 'الاستيراد والتصدير — السمات ملفات JSON بسيطة يتم التحقق منها عند الاستيراد',
    'docs.themes.tokens': 'الألوان — لوحات كاملة للوضعين الفاتح والداكن مع رموز الحالة الدلالية',
    'docs.themes.typography': 'الخطوط — عائلة الخط وأنماط العناوين والتسميات وسلّم مقاسات من 9 خطوات',
    'docs.themes.effects': 'التأثيرات — الانحناءات وسماكة الحدود وأنماط الظلال وضباب الزجاج وحركة التمرير',
    'docs.themes.layout': 'التخطيط — موضع الشريط الجانبي (يسار/أعلى/مخفي) والترويسة وعرض المحتوى والهوامش',
    'docs.themes.p2': 'بدّل بين الوضع الداكن والفاتح، واضبط حجم النص العام، أو أنشئ سمتك الخاصة وشاركها مع المجتمع.',
    'docs.faq.title': 'الأسئلة الشائعة',
    'docs.faq.q1': 'هل DevNexus مجاني؟',
    'docs.faq.a1': 'نعم، DevNexus مجاني تماماً ومفتوح المصدر تحت رخصة MIT.',
    'docs.faq.q2': 'ما هي أنظمة التشغيل المدعومة؟',
    'docs.faq.a2': 'يدعم DevNexus لينكس (deb، AppImage، RPM)، ماك (Intel و Apple Silicon)، وويندوز (MSI).',
    'docs.faq.q3': 'هل أحتاج لتثبيت PHP بشكل منفصل؟',
    'docs.faq.a3': 'لا. يقوم DevNexus بتحميل وإدارة برامج PHP نيابة عنك. يمكنك تثبيت إصدارات متعددة والتبديل بينها.',
    'docs.faq.q4': 'هل يمكنني استخدام DevNexus مع مشاريعي الحالية؟',
    'docs.faq.a4': 'بالتأكيد. يكتشف DevNexus تلقائياً المشاريع في مجلد ~/www ويدعم Laravel، CakePHP، WordPress، Slim، والمزيد.',
    'docs.faq.q5': 'هل DevNexus بديل جيد لـ XAMPP أو Laragon؟',
    'docs.faq.a5': 'نعم. يوفر DevNexus كل ما يقدمه XAMPP و Laragon — بالإضافة إلى عزل PHP لكل موقع، وتشغيل عدة إصدارات PHP في آن واحد، وHTTPS تلقائي، وخادم ذكاء اصطناعي/MCP مدمج — مع بقائه مفتوح المصدر بالكامل ومتعدد المنصات.',
    'docs.faq.q6': 'هل يمكنني تشغيل عدة إصدارات PHP في نفس الوقت؟',
    'docs.faq.a6': 'نعم. كل موقع يحصل على مجموعة PHP-FPM خاصة به، فيمكن لمشروع أن يعمل بإصدار PHP 8.1 بينما يعمل مشروع آخر بإصدار PHP 8.4، في نفس الوقت وبدون أي تعارض.',
    'docs.faq.q7': 'هل يعمل DevNexus مع مساعدات الذكاء الاصطناعي البرمجية مثل Claude Code؟',
    'docs.faq.a7': 'نعم. يتضمن DevNexus خادم MCP مدمج بـ 17 أداة، مع إعداد تلقائي لـ Claude Code وClaude Desktop وCursor وWindsurf وZed وVS Code وبيئات JetBrains.',
    'docs.faq.q8': 'هل يدعم DevNexus مشاريع Node.js بجانب PHP؟',
    'docs.faq.a8': 'نعم. يكتشف DevNexus تلقائياً مشاريع Next.js وVue وVite، ويدير خوادم التطوير الخاصة بها، ويوجّهها عبر Caddy على نطاقات .test* مع إعادة التحميل الفوري (hot reload).',

    /* Home FAQ (AEO) */
    'faq.label': 'الأسئلة الشائعة',
    'faq.title': 'الأسئلة الشائعة',
    'faq.subtitle': 'إجابات موجزة عن أكثر الأسئلة شيوعاً حول DevNexus.',
    'faq.q1': 'ما هو DevNexus؟',
    'faq.a1': 'DevNexus هو تطبيق سطح مكتب مجاني ومفتوح المصدر يدير مجموعة تطوير PHP/Laravel المحلية بالكامل — PHP، MySQL، Caddy، Redis، Mailpit والمزيد — من خلال واجهة واحدة.',
    'faq.q2': 'هل DevNexus مجاني؟',
    'faq.a2': 'نعم، DevNexus مجاني تماماً ومفتوح المصدر تحت رخصة MIT. أضف نجمة على GitHub لدعم المشروع.',
    'faq.q3': 'ما هي أنظمة التشغيل المدعومة؟',
    'faq.a3': 'يدعم DevNexus لينكس (deb، AppImage، RPM)، ماك (Intel و Apple Silicon)، وويندوز (MSI). شاهد جميع التنزيلات.',
    'faq.q4': 'هل أحتاج لتثبيت PHP بشكل منفصل؟',
    'faq.a4': 'لا. يقوم DevNexus بتحميل وإدارة برامج PHP نيابة عنك — PHP 8.0 حتى 8.4 — ويمكنك التبديل بين الإصدارات بنقرة واحدة. تعرّف على إدارة إصدارات PHP.',
    'faq.q5': 'هل يمكنني استخدام DevNexus مع مشاريعي الحالية؟',
    'faq.a5': 'بالتأكيد. يكتشف DevNexus تلقائياً المشاريع في مجلد ~/www ويدعم Laravel، CakePHP، WordPress، Slim، والمزيد.',
    'faq.more': 'لديك المزيد من الأسئلة؟ اقرأ الأسئلة الشائعة الكاملة في التوثيق.',

    /* Learn / Start Here (internal links) */
    'learn.label': 'التوثيق',
    'learn.title': 'ابدأ هنا — دروس وأدلة',
    'learn.subtitle': 'خطوات بدء سريعة وأدلة وإجابات تساعدك على تحقيق أقصى استفادة من DevNexus.',
    'learn.card1.title': 'بدء الاستخدام',
    'learn.card1.desc': 'ثبّت DevNexus، حمّل خدماتك، وأنشئ مشروعك الأول في دقائق.',
    'learn.card1.cta': 'اقرأ الدليل ←',
    'learn.card2.title': 'دليل التثبيت',
    'learn.card2.desc': 'تعليمات تثبيت خطوة بخطوة لويندوز وماك ولينكس.',
    'learn.card2.cta': 'اقرأ الدليل ←',
    'learn.card3.title': 'إدارة إصدارات PHP',
    'learn.card3.desc': 'ثبّت عدة إصدارات من PHP، بدّل فوراً، وأدر الإضافات.',
    'learn.card3.cta': 'اقرأ الدليل ←',
    'learn.card4.title': 'MySQL وقواعد البيانات',
    'learn.card4.desc': 'إعداد MySQL بنقرة واحدة مع تكامل phpMyAdmin و Adminer.',
    'learn.card4.cta': 'اقرأ الدليل ←',
    'learn.card5.title': 'Caddy و HTTPS التلقائي',
    'learn.card5.desc': 'نطاقات *.test لكل مشروع مع شهادات TLS تلقائية وإعادة تحميل فورية.',
    'learn.card5.cta': 'اقرأ الدليل ←',
    'learn.card6.title': 'التوثيق الكامل',
    'learn.card6.desc': 'كل شيء من السمات و Mailpit إلى تكامل النظام والأسئلة الشائعة.',
    'learn.card6.cta': 'افتح التوثيق ←',

    'founders.title': 'من نحن',
    'founders.subtitle': 'تعرف على الفريق الذي يقف وراء DevNexus — مطورون شغوفون يبنون أدوات للمطورين.',
    'founders.story.title': 'قصتنا',
    'founders.story.p1': 'وُلد DevNexus من فكرة بسيطة: تطوير PHP المحلي يجب أن يكون بسيطاً، ليس عملاً روتينياً. كمطورين نعمل مع Laravel و PHP يومياً، عانينا من تعقيد تكوين وإدارة بيئات التطوير يدوياً.',
    'founders.story.p2': 'قمنا ببناء DevNexus لحل هذه المشكلة — تطبيق سطح مكتب واحد جميل يدير مجموعة التطوير بالكامل. ما بدأ كأداة داخلية تطور بسرعة إلى تطبيق متكامل نفخر بمشاركته مع مجتمع المطورين.',
    'founders.mission.title': 'مهمتنا',
    'founders.mission.p1': 'تمكين المطورين بأدوات تزيل التعقيد وتمكنهم من التركيز على ما يهم حقاً — بناء برمجيات رائعة.',
    'founders.team.title': 'smartTeam',
    'founders.team.p1': 'smartTeam شركة برمجيات احترافية متخصصة في تصميم وتطوير الأنظمة المتكاملة والحلول التقنية الإبداعية. باعتبارها من الشركات الرائدة في التقنيات الحديثة، تقدّم smartTeam مجموعة واسعة من الخدمات تشمل تخطيط موارد المؤسسات (ERP)، تطوير مواقع الويب، تطبيقات الجوال لأنظمة Android وiOS، تحسين محركات البحث (SEO)، وحلول التجارة الإلكترونية.',
    'founders.team.bio': 'شركة برمجيات رائدة متخصصة في تطوير الأنظمة الاحترافية، تطبيقات الموبايل، حلول ERP، وخدمات تحسين محركات البحث.',

    /* Team Members */
    'team.title': 'فريق العمل',
    'team.eman.name': 'إيمان سعيد',
    'team.eman.role': 'مصممة UI/UX',
    'team.eman.bio': 'تصمم واجهة DevNexus بالكامل — من لوحة التحكم ونظام السمات إلى الموقع الذي تقرأه الآن. تركّز على الوضوح وسهولة الوصول وتجربة استخدام طبيعية في الوضعين الداكن والفاتح.',
    'team.eltayeb.name': 'الطيب حسن',
    'team.eltayeb.role': 'مطوّر متكامل (Full-Stack)',
    'team.eltayeb.bio': 'يبني ويطوّر الواجهة الخلفية بلغة Rust والواجهة الأمامية بـ React لتطبيق DevNexus. يقود تطوير المميزات في إدارة إصدارات PHP، ودمج MySQL، وخادم MCP المدمج.',
    'team.fadi.name': 'فادي عمر',
    'team.fadi.role': 'مهندس DevOps',
    'team.fadi.bio': 'مسؤول عن خط البناء والإصدار والتغليف متعدد المنصات — من تحميل الملفات التنفيذية والتحديث التلقائي إلى التكامل مع النظام على لينكس وماك وويندوز.',
    'team.community.name': 'مجتمع المصدر المفتوح',
    'team.community.role': 'المساهمون',
    'team.community.bio': 'نرحب بمساهمات المطورين من جميع أنحاء العالم. مجتمع DevNexus يساعد في تشكيل مستقبل تطوير PHP المحلي مع كل طلب دمج (pull request) وكل مشكلة (issue) يتم فتحها.',
    'founders.values': 'قيمنا',
    'founders.val1': 'المصدر المفتوح أولاً — نؤمن أن البرمجيات يجب أن تكون شفافة ومتاحة للجميع.',
    'founders.val2': 'تجربة المطور — كل بكسل وتفاعل مصمم مع وضع المطورين في الاعتبار.',
    'founders.val3': 'متعدد المنصات — الأدوات عالية الجودة يجب أن تعمل في كل مكان، بغض النظر عن نظام التشغيل.',
    'founders.val4': 'الأداء — سرعة أصلية مع واجهة جميلة، بدون تنازلات.',
  };

  // ─── State ──────────────────────────────────────────────
  let currentLang = localStorage.getItem('devnexus-lang') || 'en';
  let currentTheme = localStorage.getItem('devnexus-theme') || 'dark';
  const translations = { en, ar };

  // ─── DOM refs ───────────────────────────────────────────
  function t(key) {
    return translations[currentLang][key] || key;
  }

  function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translated = t(key);
      if (el.tagName === 'META' && el.hasAttribute('content')) {
        el.setAttribute('content', translated);
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', translated);
      } else if (el.tagName === 'IMG') {
        el.setAttribute('alt', translated);
      } else {
        el.textContent = translated;
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', currentLang === 'ar');

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = currentLang === 'en' ? 'ع' : 'EN';
      langToggle.setAttribute('title', currentLang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
    }

    // Dynamic page title + meta
    const pageTitles = {
      '/': 'DevNexus — Local PHP/Laravel Development Environment',
      '/docs': 'Documentation — DevNexus',
      '/founders': 'About Us — DevNexus',
      '/themes': 'Theme Builder — DevNexus',
    };
    const pageTitlesAr = {
      '/': 'ديفنيكسس — بيئة تطوير PHP/Laravel المحلية',
      '/docs': 'التوثيق — DevNexus',
      '/founders': 'من نحن — DevNexus',
      '/themes': 'منشئ الثيمات — DevNexus',
    };
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    document.title = currentLang === 'ar'
      ? (pageTitlesAr[path] || 'ديفنيكسس — DevNexus')
      : (pageTitles[path] || 'DevNexus');
  }

  function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('devnexus-lang', lang);
    translatePage();
    updateAlternateLinks(lang);
    updateVersionBadge();
    // Notify page-level widgets (e.g. the Theme Builder) to re-render.
    document.dispatchEvent(new CustomEvent('devnexus:langchange', { detail: { lang } }));
  }

  function toggleLang() {
    setLang(currentLang === 'en' ? 'ar' : 'en');
  }

  // ─── Theme ──────────────────────────────────────────────
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('devnexus-theme', theme);
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    // Notify page-level widgets (e.g. the Theme Builder preview).
    document.dispatchEvent(new CustomEvent('devnexus:themechange', { detail: { theme } }));
  }

  function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  // ─── Alternate links for SEO ────────────────────────────
  function updateAlternateLinks(lang) {
    const head = document.querySelector('head');
    const baseUrl = 'https://nexus.smart.sd';
    const path = window.location.pathname;

    // Remove old alternate links
    head.querySelectorAll('link[hreflang]').forEach(el => el.remove());

    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = baseUrl + path + (lang === 'ar' ? '' : '');
    head.appendChild(enLink);

    const arLink = document.createElement('link');
    arLink.rel = 'alternate';
    arLink.hreflang = 'ar';
    arLink.href = baseUrl + path + '?lang=ar';
    head.appendChild(arLink);

    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = baseUrl + path;
    head.appendChild(xDefault);
  }

  // ─── Mobile menu ────────────────────────────────────────
  function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const links = document.querySelector('.navbar-links');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
      }
    });
  }

  // ─── Scroll Animations ──────────────────────────────────
  function setupScrollAnimations() {
    const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

    // Fallback for browsers without IntersectionObserver:
    // never leave content hidden at opacity 0.
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return;
    }

    // threshold: 0 — fires as soon as any part of the element is visible.
    // This matters for very tall elements (e.g. the docs content column)
    // whose intersection ratio never reaches larger thresholds.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -50px 0px' });

    targets.forEach(el => observer.observe(el));
  }

  // ─── Active nav link ────────────────────────────────────
  function setActiveNav() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    document.querySelectorAll('.navbar-links a').forEach(a => {
      const href = a.getAttribute('href');
      a.classList.toggle('active', href === path);
    });
  }

  // ─── New i18n keys (Phase 2) ──────────────────────────
  Object.assign(en, {
    'how.title': 'How It Works',
    'how.subtitle': 'Get started in three simple steps with DevNexus.',
    'how.step1.title': 'Download & Install',
    'how.step1.desc': 'Download DevNexus for your platform. Run the installer and launch the app.',
    'how.step2.title': 'Download Services',
    'how.step2.desc': 'From the Binaries page, download PHP, MySQL, Caddy, and any other services you need.',
    'how.step3.title': 'Start Building',
    'how.step3.desc': 'Start your services, create or import projects, and begin developing with everything pre-configured.',
    'why.title': 'Why DevNexus?',
    'why.subtitle': 'See how DevNexus compares to other local development solutions.',
    'why.devnexus': 'DevNexus',
    'why.xampp': 'XAMPP',
    'why.valet': 'Laravel Valet',
    'why.laragon': 'Laragon',
    'why.f1': 'PHP Version Manager',
    'why.f2': 'MySQL Manager',
    'why.f3': 'Built-in Web Server (Caddy)',
    'why.f4': 'Redis Support',
    'why.f5': 'Mailpit Integration',
    'why.f6': 'Cross-Platform',
    'why.f7': 'Modern GUI',
    'why.f8': 'Project Auto-Discovery',
    'why.f9': 'Theme System',
    'why.f10': 'Free & Open Source',
    'why.yes': '✓',
    'why.no': '✗',
    'why.limited': '~',
    'github.title': 'Open Source',
    'github.subtitle': 'DevNexus is free and open source. Contributions are welcome!',
    'github.btn': 'Star on GitHub',
    'github.stars': 'Stars',
    'github.releases': 'Releases',
    'github.contributors': 'Contributors',
    'tech.title': 'Built With Modern Technology',
    'tech.subtitle': 'DevNexus combines cutting-edge technologies for a native, performant experience.',
    'tech.tauri': 'Tauri v2',
    'tech.tauri.desc': 'Desktop Runtime',
    'tech.react': 'React 19',
    'tech.react.desc': 'Frontend Framework',
    'tech.rust': 'Rust',
    'tech.rust.desc': 'Backend Engine',
    'tech.tailwind': 'Tailwind CSS',
    'tech.tailwind.desc': 'Styling',
    'tech.typescript': 'TypeScript',
    'tech.typescript.desc': 'Type Safety',
    'tech.vite': 'Vite',
    'tech.vite.desc': 'Build Tool',
    'dl.title': 'Download DevNexus',
    'dl.subtitle': 'Available for all major platforms. Download the version for your operating system.',
    'dl.auto.title': 'Auto-Detected Platform',
    'dl.auto.desc': 'We detected your system as',
    'dl.auto.btn': 'Download for',
    'dl.other.title': 'Other Platforms',
    'dl.linux': 'Linux',
    'dl.linux.desc': 'deb / AppImage / rpm',
    'dl.macos': 'macOS',
    'dl.macos.desc': 'Intel & Apple Silicon',
    'dl.windows': 'Windows',
    'dl.windows.desc': 'MSI Installer',
    'dl.btn.deb': 'Download .deb',
    'dl.btn.appimage': 'Download .AppImage',
    'dl.btn.rpm': 'Download .rpm',
    'dl.btn.dmg': 'Download .dmg',
    'dl.btn.msi': 'Download .msi',
    'dl.version': 'Version v0.4.1',
    'dl.sha': 'SHA256',
    'dl.coming': 'Coming soon',
    'dl.none': 'No downloads available',
    'dl.source': 'Source Code',
    'dl.releases': 'All Releases',
    'dl.installGuide': 'Installation Guide',
    'screenshots.title': 'Screenshots',
    'screenshots.subtitle': 'A clean, modern interface for managing your entire development stack.',
    'community.title': 'Join the Community',
    'community.subtitle': 'Connect with other developers, contribute, and help shape the future of local PHP development.',
    'community.btn': 'Get Involved',
    '404.title': 'Page Not Found',
    '404.desc': 'Oops! The page you are looking for does not exist or has been moved.',
    '404.btn': 'Go Home',
    'nav.showcase': 'Screenshots',
    'nav.how': 'How It Works',
    'nav.why': 'Why DevNexus',
    'nav.community': 'Community',
  });

  Object.assign(ar, {
    'how.title': 'كيف يعمل',
    'how.subtitle': 'ابدأ في ثلاث خطوات بسيطة مع DevNexus.',
    'how.step1.title': 'حمّل وثبّت',
    'how.step1.desc': 'حمّل DevNexus لمنصتك. شغّل المثبّت وأطلق التطبيق.',
    'how.step2.title': 'حمّل الخدمات',
    'how.step2.desc': 'من صفحة البرامج، حمّل PHP، MySQL، Caddy، وأي خدمات أخرى تحتاجها.',
    'how.step3.title': 'ابدأ البناء',
    'how.step3.desc': 'شغّل خدماتك، أنشئ أو استورد المشاريع، وابدأ التطوير مع كل شيء مهيأ مسبقاً.',
    'why.title': 'لماذا DevNexus؟',
    'why.subtitle': 'شاهد كيف يقارن DevNexus مع حلول التطوير المحلي الأخرى.',
    'why.devnexus': 'DevNexus',
    'why.xampp': 'XAMPP',
    'why.valet': 'Laravel Valet',
    'why.laragon': 'Laragon',
    'why.f1': 'مدير إصدارات PHP',
    'why.f2': 'مدير MySQL',
    'why.f3': 'خادم ويب مدمج (Caddy)',
    'why.f4': 'دعم Redis',
    'why.f5': 'دمج Mailpit',
    'why.f6': 'متعدد المنصات',
    'why.f7': 'واجهة رسومية عصرية',
    'why.f8': 'اكتشاف تلقائي للمشاريع',
    'why.f9': 'نظام سمات',
    'why.f10': 'مجاني ومفتوح المصدر',
    'why.yes': '✓',
    'why.no': '✗',
    'why.limited': '~',
    'github.title': 'مفتوح المصدر',
    'github.subtitle': 'DevNexus مجاني ومفتوح المصدر. المساهمات مرحب بها!',
    'github.btn': 'نجمة على GitHub',
    'github.stars': 'نجوم',
    'github.releases': 'إصدارات',
    'github.contributors': 'مساهمون',
    'tech.title': 'مبني بتقنيات حديثة',
    'tech.subtitle': 'يجمع DevNexus بين أحدث التقنيات لتجربة أصلية عالية الأداء.',
    'tech.tauri': 'Tauri v2',
    'tech.tauri.desc': 'منصة سطح المكتب',
    'tech.react': 'React 19',
    'tech.react.desc': 'إطار الواجهة',
    'tech.rust': 'Rust',
    'tech.rust.desc': 'محرك الخلفية',
    'tech.tailwind': 'Tailwind CSS',
    'tech.tailwind.desc': 'التصميم',
    'tech.typescript': 'TypeScript',
    'tech.typescript.desc': 'أمان الأنواع',
    'tech.vite': 'Vite',
    'tech.vite.desc': 'أداة البناء',
    'dl.title': 'حمّل DevNexus',
    'dl.subtitle': 'متوفر لجميع المنصات الرئيسية. حمّل الإصدار المناسب لنظام تشغيلك.',
    'dl.auto.title': 'النظام المُكتشف تلقائياً',
    'dl.auto.desc': 'قمنا باكتشاف نظامك كـ',
    'dl.auto.btn': 'حمّل لـ',
    'dl.other.title': 'المنصات الأخرى',
    'dl.linux': 'لينكس',
    'dl.linux.desc': 'deb / AppImage / rpm',
    'dl.macos': 'ماك',
    'dl.macos.desc': 'Intel و Apple Silicon',
    'dl.windows': 'ويندوز',
    'dl.windows.desc': 'مثبّت الـMSI',
    'dl.btn.deb': 'تحميل .deb',
    'dl.btn.appimage': 'تحميل .AppImage',
    'dl.btn.rpm': 'تحميل .rpm',
    'dl.btn.dmg': 'تحميل .dmg',
    'dl.btn.msi': 'تحميل .msi',
    'dl.version': 'الإصدار v0.4.1',
    'dl.sha': 'SHA256',
    'dl.coming': 'قريباً',
    'dl.none': 'لا توجد تحميلات متاحة',
    'dl.source': 'الكود المصدري',
    'dl.releases': 'جميع الإصدارات',
    'dl.installGuide': 'دليل التثبيت',
    'screenshots.title': 'لقطات الشاشة',
    'screenshots.subtitle': 'واجهة نظيفة وعصرية لإدارة مجموعة التطوير بالكامل.',
    'community.title': 'انضم للمجتمع',
    'community.subtitle': 'تواصل مع مطورين آخرين، ساهم، وساعد في تشكيل مستقبل تطوير PHP المحلي.',
    'community.btn': 'شارك الآن',
    '404.title': 'الصفحة غير موجودة',
    '404.desc': 'عذراً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    '404.btn': 'العودة للرئيسية',
    'nav.showcase': 'لقطات الشاشة',
    'nav.how': 'كيف يعمل',
    'nav.why': 'لماذا DevNexus',
    'nav.community': 'المجتمع',
  });

  // ─── New i18n keys (Phase 3 — Docs update) ────────────
  Object.assign(en, {
    'docs.img.download-page': 'Download page with installers for every platform',
    'docs.install.req.title': 'System Requirements',
    'docs.install.req.col1': 'Platform',
    'docs.install.req.col2': 'Requirements',
    'docs.install.req.linux': 'Linux (x86_64 / aarch64)',
    'docs.install.req.linux.val': 'glibc 2.28+, GTK 3, WebKit2GTK 4.1, pkexec (PolicyKit)',
    'docs.install.req.macos': 'macOS (Intel / Apple Silicon)',
    'docs.install.req.macos.val': 'macOS 10.15+, Xcode CLI tools',
    'docs.install.req.windows': 'Windows (x86_64)',
    'docs.install.req.windows.val': 'Windows 10+, WebView2',
    'docs.install.pkgs.title': 'Available Packages',
    'docs.install.pkgs.col1': 'OS',
    'docs.install.pkgs.col2': 'Architecture',
    'docs.install.pkgs.col3': 'Package',
    'docs.install.pkgs.linux1': 'Linux',
    'docs.install.pkgs.linux1.arch': 'x86_64',
    'docs.install.pkgs.linux1.ptype': '.deb, .rpm, .AppImage, .pkg.tar.zst',
    'docs.install.pkgs.linux2.arch': 'aarch64',
    'docs.install.pkgs.linux2.ptype': '.deb, .AppImage',
    'docs.install.pkgs.macos1': 'macOS',
    'docs.install.pkgs.macos1.arch': 'Intel (x86_64)',
    'docs.install.pkgs.macos1.ptype': '.dmg',
    'docs.install.pkgs.macos2.arch': 'Apple Silicon (aarch64)',
    'docs.install.pkgs.macos2.ptype': '.dmg',
    'docs.install.pkgs.windows1': 'Windows',
    'docs.install.pkgs.windows1.arch': 'x86_64',
    'docs.install.pkgs.windows1.ptype': '.msi, .exe (NSIS)',
    'docs.img.first-launch': 'DevNexus window on first launch',
    'docs.getting-started.tools.title': 'Downloading Tools',
    'docs.getting-started.tools.p': 'Before using services, you need to download the required binaries from the Binaries page:',
    'docs.getting-started.tools.col1': 'Tool',
    'docs.getting-started.tools.col2': 'Purpose',
    'docs.getting-started.tools.col3': 'Required',
    'docs.getting-started.tools.php': 'PHP runtime (choose a version)',
    'docs.getting-started.tools.mysql': 'Database server',
    'docs.getting-started.tools.caddy': 'Web server with auto-TLS',
    'docs.getting-started.tools.redis': 'Cache / queue backend',
    'docs.getting-started.tools.mailpit': 'Local email testing',
    'docs.getting-started.tools.postgres': 'Alternative database',
    'docs.getting-started.tools.yes': 'Yes',
    'docs.getting-started.tools.optional': 'Optional',
    'docs.getting-started.services.title': 'Starting Services',
    'docs.getting-started.services.p': 'Once binaries are downloaded, go to the Services page. Click Start All or toggle individual services — DevNexus starts each service on its default port, resolves port conflicts automatically, and updates the Dashboard in real time.',
    'docs.getting-started.firstproject.title': 'Creating Your First Project',
    'docs.getting-started.firstproject.p': 'Go to Sites → Create Site, enter a project name, and select a type (e.g. Laravel). DevNexus scaffolds the project, configures its environment, and serves it at https://<name>.test with automatic TLS.',
    'docs.getting-started.verify.title': 'Verifying Everything Works',
    'docs.getting-started.verify.p': 'Open the Dashboard to verify your environment is ready:',
    'docs.getting-started.verify.item1': 'Services are running',
    'docs.getting-started.verify.item2': 'Sites are discovered and active',
    'docs.getting-started.verify.item3': 'PHP version is configured',
    'docs.getting-started.verify.item4': 'Domains resolve (.test entries in /etc/hosts)',
    'docs.img.binaries-page': 'Binaries page where you download required tools',
    'docs.img.services-page': 'Services page with running services',
    'docs.img.create-site': 'Creating a new site',
    'docs.img.dashboard-verified': 'Dashboard with everything running',
    'docs.sites.title': 'Sites & Projects',
    'docs.sites.p1': 'DevNexus automatically discovers, configures, and manages your local web projects. Each project gets a .test domain, an automatic TLS certificate, an /etc/hosts entry, a Caddy vhost, and a per-site PHP version.',
    'docs.img.sites-overview': 'Sites page with your project list',
    'docs.sites.discovery.title': 'Project Discovery',
    'docs.sites.discovery.p': 'DevNexus auto-detects project types by scanning for signature files:',
    'docs.sites.discovery.col1': 'Project Type',
    'docs.sites.discovery.col2': 'Detection Signal',
    'docs.sites.discovery.laravel': 'Laravel',
    'docs.sites.discovery.laravel.sig': 'artisan file present',
    'docs.sites.discovery.wordpress': 'WordPress',
    'docs.sites.discovery.wordpress.sig': 'wp-settings.php present',
    'docs.sites.discovery.cakephp': 'CakePHP',
    'docs.sites.discovery.cakephp.sig': 'bin/cake present',
    'docs.sites.discovery.slim': 'Slim',
    'docs.sites.discovery.slim.sig': 'slim in composer.json',
    'docs.sites.discovery.generic': 'Generic PHP',
    'docs.sites.discovery.generic.sig': 'composer.json or index.php',
    'docs.sites.discovery.static': 'Static',
    'docs.sites.discovery.static.sig': 'HTML files, no PHP framework',
    'docs.sites.discovery.node': 'Node.js',
    'docs.sites.discovery.node.sig': 'package.json with framework detection',
    'docs.img.project-detection': 'Project type detection in action',
    'docs.sites.create.title': 'Creating a New Project',
    'docs.sites.create.p': 'Go to Sites → Create Site, enter a project name, and select a type. DevNexus scaffolds the project, configures the .env file with database credentials and APP_URL, creates a Caddy vhost entry, adds the .test domain to /etc/hosts, and generates an SSL certificate.',
    'docs.sites.create.cli': 'From the CLI:',
    'docs.sites.link.title': 'Linking Existing Projects',
    'docs.sites.link.p': 'To link projects that live outside ~/www, go to Sites → Link Project, browse to the project folder, and DevNexus auto-detects the type and configures it. The project becomes available at https://<folder-name>.test.',
    'docs.sites.config.title': 'Per-Site Configuration',
    'docs.sites.config.p': 'Each project can have a .devnexus.json file in its root to override defaults:',
    'docs.sites.config.col1': 'Field',
    'docs.sites.config.col2': 'Description',
    'docs.sites.config.type': 'Override auto-detected project type',
    'docs.sites.config.domain': 'Custom .test domain (default: folder name)',
    'docs.sites.config.php_version': 'PHP version for this site (overrides global)',
    'docs.sites.config.document_root': 'Subdirectory for web root (default: project root)',
    'docs.sites.config.node_port': 'Fixed dev server port for Node.js projects',
    'docs.sites.run.title': 'Run Artisan / Composer',
    'docs.sites.run.p': 'Execute Laravel Artisan or Composer commands from the GUI or MCP — for example php artisan migrate, php artisan queue:work, or composer require spatie/laravel-permission.',
    'docs.img.run-artisan': 'Running artisan / composer commands',
    'docs.img.create-new-site': 'Create site form',
    'docs.img.link-project': 'Link project dialog',
    'docs.img.php-versions': 'PHP version manager',
    'docs.img.php-extensions': 'PHP extensions with toggles',
    'docs.img.mysql-service': 'MySQL service detail',
    'docs.postgres.title': 'PostgreSQL',
    'docs.postgres.p1': 'PostgreSQL is available as an optional alternative database, managed as a binary tool and downloadable from the Binaries page.',
    'docs.postgres.p2': 'Default port: 5432 · Config file: dev-stack/config/postgresql.conf',
    'docs.img.postgresql-service': 'PostgreSQL service detail',
    'docs.img.caddy-service': 'Caddy service detail',
    'docs.img.redis-service': 'Redis service detail',
    'docs.img.mailpit-service': 'Mailpit inbox at localhost:8025',
    'docs.img.nodejs-service': 'Node.js dev server status',
    'docs.config.title': 'Configuration Files',
    'docs.config.p1': 'DevNexus uses XDG-compliant paths so all managed files live in a predictable, platform-specific data directory.',
    'docs.config.datadir.title': 'Data Directory',
    'docs.config.datadir.col1': 'Platform',
    'docs.config.datadir.col2': 'Path',
    'docs.config.datadir.linux': 'Linux',
    'docs.config.datadir.macos': 'macOS',
    'docs.config.datadir.windows': 'Windows',
    'docs.config.dirs.title': 'Directory Layout',
    'docs.config.app.p': 'Main application configuration:',
    'docs.config.mcp.p': 'MCP server settings:',
    'docs.cli.title': 'CLI Reference',
    'docs.cli.p1': 'DevNexus ships with a standalone command-line interface (devnexus-cli) for managing your development environment without the GUI. It shares the same business logic as the app — no duplication.',
    'docs.cli.install.p': 'The CLI is bundled with DevNexus: on Linux/macOS it is available on PATH as devnexus; on Windows as devnexus.exe in the installation directory.',
    'docs.img.cli-usage': 'Running devnexus status in the terminal',
    'docs.cli.commands.title': 'Common Commands',
    'docs.cli.commands.col1': 'Command',
    'docs.cli.commands.col2': 'Description',
    'docs.cli.commands.status': 'Show the status of all managed services',
    'docs.cli.commands.start': 'Start a background service (caddy, mysql, postgres, redis, mailpit, phpfpm)',
    'docs.cli.commands.stop': 'Stop a running service',
    'docs.cli.commands.restart': 'Stop then start a service',
    'docs.cli.commands.startall': 'Start all managed services sequentially',
    'docs.cli.commands.stopall': 'Stop all managed services',
    'docs.cli.commands.listsites': 'List all discovered project sites',
    'docs.cli.commands.createsite': 'Create a new project (--name, --type)',
    'docs.cli.commands.backup': 'Create a full, projects-only, or config-only backup; list backups',
    'docs.cli.example.title': 'Examples',
    'docs.backup.title': 'Backup & Restore',
    'docs.backup.p1': 'DevNexus provides built-in backup and restore capabilities for your entire development environment.',
    'docs.img.backup-page': 'Backup management page',
    'docs.backup.types.col1': 'Backup Type',
    'docs.backup.types.col2': 'Contents',
    'docs.backup.types.col3': 'Use Case',
    'docs.backup.types.full': 'Full',
    'docs.backup.types.full.contents': 'Projects + Config',
    'docs.backup.types.full.use': 'Complete environment backup',
    'docs.backup.types.projects': 'Projects',
    'docs.backup.types.projects.contents': 'Project files only',
    'docs.backup.types.projects.use': 'Source code backup',
    'docs.backup.types.config': 'Config',
    'docs.backup.types.config.contents': 'Configuration files only',
    'docs.backup.types.config.use': 'Settings backup',
    'docs.backup.create.title': 'Creating Backups',
    'docs.backup.create.p': 'From the GUI: open the Backup page, choose the type (Full, Projects, or Config), and click Create Backup. From the CLI:',
    'docs.img.create-backup': 'Creating a new backup',
    'docs.backup.schedule.title': 'Scheduled Backups',
    'docs.backup.schedule.p': 'Automate backups daily, weekly, or monthly from Backup → Schedule, or through the built-in job scheduler.',
    'docs.img.scheduled-backups': 'Backup scheduling configuration',
    'docs.backup.restore.title': 'Restore',
    'docs.backup.restore.p': 'Select a backup from the list and click Restore. During restore, the current configuration is backed up as a safety net, the selected archive is extracted, services restart with the new config, and the hosts file is re-synchronized.',
    'docs.img.restore-backup': 'Restore confirmation',
    'docs.backup.best.title': 'Best Practices',
    'docs.backup.best.item1': 'Schedule daily backups for active projects',
    'docs.backup.best.item2': 'Create a full backup before upgrading PHP or MySQL versions',
    'docs.backup.best.item3': 'Keep important backups on external storage',
    'docs.backup.best.item4': 'Periodically verify backups can be restored',
    'docs.img.mcp-architecture': 'AI assistant ↔ MCP server ↔ DevNexus',
    'docs.img.mcp-settings': 'Settings page with MCP toggle',
    'docs.img.ai-client-setup': 'AI client setup results',
    'docs.img.agent-skill': 'Agent skill installation confirmation',
  });

  Object.assign(ar, {
    'docs.img.download-page': 'صفحة التحميل مع ملفات التثبيت لجميع المنصات',
    'docs.install.req.title': 'متطلبات النظام',
    'docs.install.req.col1': 'المنصة',
    'docs.install.req.col2': 'المتطلبات',
    'docs.install.req.linux': 'لينكس (x86_64 / aarch64)',
    'docs.install.req.linux.val': 'glibc 2.28+، GTK 3، WebKit2GTK 4.1، pkexec (PolicyKit)',
    'docs.install.req.macos': 'ماك (Intel / Apple Silicon)',
    'docs.install.req.macos.val': 'macOS 10.15+، أدوات سطر أوامر Xcode',
    'docs.install.req.windows': 'ويندوز (x86_64)',
    'docs.install.req.windows.val': 'ويندوز 10+، WebView2',
    'docs.install.pkgs.title': 'الحزم المتاحة',
    'docs.install.pkgs.col1': 'نظام التشغيل',
    'docs.install.pkgs.col2': 'المعمارية',
    'docs.install.pkgs.col3': 'الحزمة',
    'docs.install.pkgs.linux1': 'لينكس',
    'docs.install.pkgs.linux1.arch': 'x86_64',
    'docs.install.pkgs.linux1.ptype': '.deb، .rpm، .AppImage، .pkg.tar.zst',
    'docs.install.pkgs.linux2.arch': 'aarch64',
    'docs.install.pkgs.linux2.ptype': '.deb، .AppImage',
    'docs.install.pkgs.macos1': 'ماك',
    'docs.install.pkgs.macos1.arch': 'Intel (x86_64)',
    'docs.install.pkgs.macos1.ptype': '.dmg',
    'docs.install.pkgs.macos2.arch': 'Apple Silicon (aarch64)',
    'docs.install.pkgs.macos2.ptype': '.dmg',
    'docs.install.pkgs.windows1': 'ويندوز',
    'docs.install.pkgs.windows1.arch': 'x86_64',
    'docs.install.pkgs.windows1.ptype': '.msi، .exe (NSIS)',
    'docs.img.first-launch': 'نافذة DevNexus عند أول تشغيل',
    'docs.getting-started.tools.title': 'تحميل الأدوات',
    'docs.getting-started.tools.p': 'قبل استخدام الخدمات، تحتاج إلى تحميل البرامج المطلوبة من صفحة البرامج:',
    'docs.getting-started.tools.col1': 'الأداة',
    'docs.getting-started.tools.col2': 'الغرض',
    'docs.getting-started.tools.col3': 'مطلوبة',
    'docs.getting-started.tools.php': 'بيئة PHP (اختر إصداراً)',
    'docs.getting-started.tools.mysql': 'خادم قواعد البيانات',
    'docs.getting-started.tools.caddy': 'خادم ويب مع TLS تلقائي',
    'docs.getting-started.tools.redis': 'ذاكرة تخزين مؤقت / طابور خلفي',
    'docs.getting-started.tools.mailpit': 'اختبار البريد الإلكتروني محلياً',
    'docs.getting-started.tools.postgres': 'قاعدة بيانات بديلة',
    'docs.getting-started.tools.yes': 'نعم',
    'docs.getting-started.tools.optional': 'اختيارية',
    'docs.getting-started.services.title': 'تشغيل الخدمات',
    'docs.getting-started.services.p': 'بعد تحميل البرامج، انتقل إلى صفحة الخدمات. اضغط زر تشغيل الكل أو شغّل الخدمات بشكل فردي — يبدأ DevNexus كل خدمة على المنفذ الافتراضي لها، ويحل تعارضات المنافذ تلقائياً، ويحدّث لوحة التحكم في الوقت الفعلي.',
    'docs.getting-started.firstproject.title': 'إنشاء أول مشروع',
    'docs.getting-started.firstproject.p': 'انتقل إلى المواقع ← إنشاء موقع، أدخل اسم المشروع واختر النوع (مثل Laravel). سيقوم DevNexus بإنشاء المشروع وتكوين بيئته وتشغيله على https://<name>.test مع TLS تلقائي.',
    'docs.getting-started.verify.title': 'التحقق من عمل كل شيء',
    'docs.getting-started.verify.p': 'افتح لوحة التحكم للتحقق من جاهزية بيئتك:',
    'docs.getting-started.verify.item1': 'الخدمات قيد التشغيل',
    'docs.getting-started.verify.item2': 'المواقع مكتشفة ونشطة',
    'docs.getting-started.verify.item3': 'إصدار PHP مهيأ',
    'docs.getting-started.verify.item4': 'النطاقات تتحل (.test في /etc/hosts)',
    'docs.img.binaries-page': 'صفحة البرامج حيث تحمّل الأدوات المطلوبة',
    'docs.img.services-page': 'صفحة الخدمات مع الخدمات قيد التشغيل',
    'docs.img.create-site': 'إنشاء موقع جديد',
    'docs.img.dashboard-verified': 'لوحة التحكم مع كل شيء يعمل',
    'docs.sites.title': 'المواقع والمشاريع',
    'docs.sites.p1': 'يكتشف DevNexus مشاريع الويب المحلية ويكوّنها ويديرها تلقائياً. يحصل كل مشروع على نطاق .test وشهادة TLS تلقائية وإدخال في /etc/hosts ومضيف Caddy وإصدار PHP خاص به.',
    'docs.img.sites-overview': 'صفحة المواقع مع قائمة مشاريعك',
    'docs.sites.discovery.title': 'اكتشاف المشاريع',
    'docs.sites.discovery.p': 'يكتشف DevNexus أنواع المشاريع تلقائياً من خلال فحص الملفات المميزة:',
    'docs.sites.discovery.col1': 'نوع المشروع',
    'docs.sites.discovery.col2': 'إشارة الاكتشاف',
    'docs.sites.discovery.laravel': 'Laravel',
    'docs.sites.discovery.laravel.sig': 'وجود ملف artisan',
    'docs.sites.discovery.wordpress': 'WordPress',
    'docs.sites.discovery.wordpress.sig': 'وجود wp-settings.php',
    'docs.sites.discovery.cakephp': 'CakePHP',
    'docs.sites.discovery.cakephp.sig': 'وجود bin/cake',
    'docs.sites.discovery.slim': 'Slim',
    'docs.sites.discovery.slim.sig': 'slim في composer.json',
    'docs.sites.discovery.generic': 'PHP عام',
    'docs.sites.discovery.generic.sig': 'composer.json أو index.php',
    'docs.sites.discovery.static': 'ثابت',
    'docs.sites.discovery.static.sig': 'ملفات HTML بدون إطار عمل PHP',
    'docs.sites.discovery.node': 'Node.js',
    'docs.sites.discovery.node.sig': 'package.json مع اكتشاف الإطار',
    'docs.img.project-detection': 'اكتشاف نوع المشروع أثناء العمل',
    'docs.sites.create.title': 'إنشاء مشروع جديد',
    'docs.sites.create.p': 'انتقل إلى المواقع ← إنشاء موقع، أدخل اسم المشروع واختر نوعه. يقوم DevNexus بإنشاء المشروع، ويكوّن ملف .env ببيانات قاعدة البيانات و APP_URL، وينشئ مضيف Caddy، ويضيف نطاق .test إلى /etc/hosts، ويولّد شهادة SSL.',
    'docs.sites.create.cli': 'من سطر الأوامر:',
    'docs.sites.link.title': 'ربط المشاريع الموجودة',
    'docs.sites.link.p': 'لربط مشاريع خارج مجلد ~/www، انتقل إلى المواقع ← ربط مشروع، ثم تصفح إلى مجلد المشروع — سيكتشف DevNexus النوع تلقائياً ويكوّنه. يصبح المشروع متاحاً على https://<folder-name>.test.',
    'docs.sites.config.title': 'الإعداد الخاص بكل موقع',
    'docs.sites.config.p': 'يمكن لكل مشروع تضمين ملف .devnexus.json في جذره لتجاوز الإعدادات الافتراضية:',
    'docs.sites.config.col1': 'الحقل',
    'docs.sites.config.col2': 'الوصف',
    'docs.sites.config.type': 'تجاوز نوع المشروع المكتشف تلقائياً',
    'docs.sites.config.domain': 'نطاق .test مخصص (الافتراضي: اسم المجلد)',
    'docs.sites.config.php_version': 'إصدار PHP لهذا الموقع (يتجاوز الإعداد العام)',
    'docs.sites.config.document_root': 'مجلد فرعي لجذر الويب (الافتراضي: جذر المشروع)',
    'docs.sites.config.node_port': 'منفذ خادم التطوير الثابت لمشاريع Node.js',
    'docs.sites.run.title': 'تشغيل Artisan / Composer',
    'docs.sites.run.p': 'نفّذ أوامر Laravel Artisan أو Composer من الواجهة أو MCP — مثل php artisan migrate أو php artisan queue:work أو composer require spatie/laravel-permission.',
    'docs.img.run-artisan': 'تشغيل أوامر artisan / composer',
    'docs.img.create-new-site': 'نموذج إنشاء موقع',
    'docs.img.link-project': 'نافذة ربط مشروع',
    'docs.img.php-versions': 'مدير إصدارات PHP',
    'docs.img.php-extensions': 'إضافات PHP مع مفاتيح التبديل',
    'docs.img.mysql-service': 'تفاصيل خدمة MySQL',
    'docs.postgres.title': 'PostgreSQL',
    'docs.postgres.p1': 'يتوفر PostgreSQL كقاعدة بيانات بديلة اختيارية، تُدار كأداة ثنائية ويمكن تحميلها من صفحة البرامج.',
    'docs.postgres.p2': 'المنفذ الافتراضي: 5432 · ملف الإعداد: dev-stack/config/postgresql.conf',
    'docs.img.postgresql-service': 'تفاصيل خدمة PostgreSQL',
    'docs.img.caddy-service': 'تفاصيل خدمة Caddy',
    'docs.img.redis-service': 'تفاصيل خدمة Redis',
    'docs.img.mailpit-service': 'صندوق بريد Mailpit على localhost:8025',
    'docs.img.nodejs-service': 'حالة خادم تطوير Node.js',
    'docs.config.title': 'ملفات الإعداد',
    'docs.config.p1': 'يستخدم DevNexus مسارات متوافقة مع XDG بحيث تكون جميع الملفات المُدارة في دليل بيانات محدد ويمكن التنبؤ به حسب النظام.',
    'docs.config.datadir.title': 'دليل البيانات',
    'docs.config.datadir.col1': 'المنصة',
    'docs.config.datadir.col2': 'المسار',
    'docs.config.datadir.linux': 'لينكس',
    'docs.config.datadir.macos': 'ماك',
    'docs.config.datadir.windows': 'ويندوز',
    'docs.config.dirs.title': 'هيكل الدليل',
    'docs.config.app.p': 'إعداد التطبيق الرئيسي:',
    'docs.config.mcp.p': 'إعدادات خادم MCP:',
    'docs.cli.title': 'واجهة الأوامر (CLI)',
    'docs.cli.p1': 'يأتي DevNexus مع واجهة سطر أوامر مستقلة (devnexus-cli) لإدارة بيئة التطوير بدون الواجهة الرسومية. وهي تشارك نفس منطق الأعمال الموجود في التطبيق — بدون أي تكرار.',
    'docs.cli.install.p': 'CLI مرفق مع DevNexus: على لينكس/ماك يتوفر على PATH باسم devnexus؛ وعلى ويندوز باسم devnexus.exe في مجلد التثبيت.',
    'docs.img.cli-usage': 'تشغيل devnexus status في الطرفية',
    'docs.cli.commands.title': 'الأوامر الشائعة',
    'docs.cli.commands.col1': 'الأمر',
    'docs.cli.commands.col2': 'الوصف',
    'docs.cli.commands.status': 'عرض حالة جميع الخدمات المُدارة',
    'docs.cli.commands.start': 'تشغيل خدمة في الخلفية (caddy، mysql، postgres، redis، mailpit، phpfpm)',
    'docs.cli.commands.stop': 'إيقاف خدمة قيد التشغيل',
    'docs.cli.commands.restart': 'إيقاف ثم تشغيل خدمة',
    'docs.cli.commands.startall': 'تشغيل جميع الخدمات المُدارة بالتسلسل',
    'docs.cli.commands.stopall': 'إيقاف جميع الخدمات المُدارة',
    'docs.cli.commands.listsites': 'عرض جميع مواقع المشاريع المكتشفة',
    'docs.cli.commands.createsite': 'إنشاء مشروع جديد (--name، --type)',
    'docs.cli.commands.backup': 'إنشاء نسخة احتياطية كاملة أو للمشاريع أو للإعداد فقط؛ وعرض النسخ الاحتياطية',
    'docs.cli.example.title': 'أمثلة',
    'docs.backup.title': 'النسخ الاحتياطي والاستعادة',
    'docs.backup.p1': 'يوفر DevNexus إمكانيات نسخ احتياطي واستعادة مدمجة لبيئة التطوير بالكامل.',
    'docs.img.backup-page': 'صفحة إدارة النسخ الاحتياطي',
    'docs.backup.types.col1': 'نوع النسخة',
    'docs.backup.types.col2': 'المحتوى',
    'docs.backup.types.col3': 'الاستخدام',
    'docs.backup.types.full': 'كاملة',
    'docs.backup.types.full.contents': 'المشاريع + الإعدادات',
    'docs.backup.types.full.use': 'نسخة احتياطية كاملة للبيئة',
    'docs.backup.types.projects': 'المشاريع',
    'docs.backup.types.projects.contents': 'ملفات المشاريع فقط',
    'docs.backup.types.projects.use': 'نسخة احتياطية للكود المصدري',
    'docs.backup.types.config': 'الإعدادات',
    'docs.backup.types.config.contents': 'ملفات الإعداد فقط',
    'docs.backup.types.config.use': 'نسخة احتياطية للإعدادات',
    'docs.backup.create.title': 'إنشاء النسخ الاحتياطية',
    'docs.backup.create.p': 'من الواجهة: افتح صفحة النسخ الاحتياطي، اختر النوع (كاملة، مشاريع، أو إعدادات) واضغط إنشاء نسخة. من سطر الأوامر:',
    'docs.img.create-backup': 'إنشاء نسخة احتياطية جديدة',
    'docs.backup.schedule.title': 'النسخ الاحتياطي المجدول',
    'docs.backup.schedule.p': 'أتمتة النسخ الاحتياطي يومياً أو أسبوعياً أو شهرياً من النسخ الاحتياطي ← الجدولة، أو عبر مدير المهام المدمج.',
    'docs.img.scheduled-backups': 'إعداد جدولة النسخ الاحتياطي',
    'docs.backup.restore.title': 'الاستعادة',
    'docs.backup.restore.p': 'اختر نسخة من القائمة واضغط استعادة. أثناء الاستعادة، يتم نسخ الإعداد الحالي كشبكة أمان، ثم يُستخرج الأرشيف المحدد، وتُعاد تشغيل الخدمات بالإعداد الجديد، ويُعاد مزامنة ملف hosts.',
    'docs.img.restore-backup': 'تأكيد الاستعادة',
    'docs.backup.best.title': 'أفضل الممارسات',
    'docs.backup.best.item1': 'جدولة نسخ احتياطي يومي للمشاريع النشطة',
    'docs.backup.best.item2': 'إنشاء نسخة كاملة قبل ترقية إصدارات PHP أو MySQL',
    'docs.backup.best.item3': 'الاحتفاظ بنسخ مهمة على تخزين خارجي',
    'docs.backup.best.item4': 'التحقق دورياً من إمكانية استعادة النسخ',
    'docs.img.mcp-architecture': 'مساعد الذكاء الاصطناعي ↔ خادم MCP ↔ DevNexus',
    'docs.img.mcp-settings': 'صفحة الإعدادات مع مفتاح MCP',
    'docs.img.ai-client-setup': 'نتائج إعداد عملاء الذكاء الاصطناعي',
    'docs.img.agent-skill': 'تأكيد تثبيت مهارة الوكيل',
  });

  // ─── Smooth Scroll for Anchor Links ─────────────────────
  function setupSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop) || 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  // ─── Scroll to Top Button ───────────────────────────────
  function setupScrollToTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(btn);

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          btn.classList.toggle('visible', window.pageYOffset > 400);
          ticking = false;
        });
        ticking = true;
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Docs Sidebar Active Tracking ───────────────────────
  function setupDocsSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    if (!sidebar) return;

    // Collapsible "On this page" toggle for mobile
    const toggle = sidebar.querySelector('.docs-sidebar-toggle');
    if (toggle) {
      const mq = window.matchMedia('(max-width: 768px)');
      const syncOpenState = () => {
        if (mq.matches) toggle.removeAttribute('open');
        else toggle.setAttribute('open', '');
      };
      syncOpenState();
      mq.addEventListener('change', syncOpenState);

      toggle.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', () => {
          if (window.matchMedia('(max-width: 768px)').matches) {
            toggle.removeAttribute('open');
          }
        });
      });
    }

    const links = sidebar.querySelectorAll('a[href^="#"]');
    const sections = [];
    links.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if (section) sections.push({ el: section, link });
    });

    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      let activeId = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) activeId = entry.target.id;
      });
      if (!activeId) return;
      links.forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.docs-nav a[href="#${activeId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(s => observer.observe(s.el));
  }

  // ─── Platform Detection ─────────────────────────────────
  function detectPlatform() {
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'windows';
    if (ua.includes('Mac')) return 'macos';
    if (ua.includes('Linux')) return 'linux';
    return 'unknown';
  }

  let DL_JSON_DATA = null;
  let DL_JSON_VERSION = null;

  // Latest release metadata (versions, download links, assets) comes
  // straight from the GitHub API - no local latest.json to maintain.
  const DL_API_URL = 'https://api.github.com/repos/DevXNexusPro/DevNexus/releases/latest';

  // Metadata per release asset key
  const DL_META = {
    'linux-x86_64-deb':       { os: 'Linux',   arch: 'amd64',         format: '.deb',      label: 'DEB (amd64)' },
    'linux-x86_64-appimage':  { os: 'Linux',   arch: 'x86_64',        format: '.AppImage', label: 'AppImage (amd64)' },
    'linux-x86_64-rpm':       { os: 'Linux',   arch: 'x86_64',        format: '.rpm',      label: 'RPM (x86_64)' },
    'linux-aarch64-deb':      { os: 'Linux',   arch: 'arm64',         format: '.deb',      label: 'DEB (arm64)' },
    'linux-aarch64-appimage': { os: 'Linux',   arch: 'aarch64',       format: '.AppImage', label: 'AppImage (aarch64)' },
    'darwin-aarch64':         { os: 'macOS',   arch: 'Apple Silicon', format: '.dmg',      label: 'DMG (Apple Silicon)' },
    'darwin-x86_64':          { os: 'macOS',   arch: 'Intel x64',     format: '.dmg',      label: 'DMG (Intel)' },
    'windows-x86_64-msi-en':  { os: 'Windows', arch: 'x64',           format: '.msi',      label: 'MSI Installer (x64) · EN' },
    'windows-x86_64-msi-ar':  { os: 'Windows', arch: 'x64',           format: '.msi',      label: 'MSI Installer (x64) · AR' },
  };

  // JSON key order per OS card
  const DL_OS_KEYS = {
    linux:   ['linux-x86_64-deb', 'linux-x86_64-appimage', 'linux-x86_64-rpm', 'linux-aarch64-deb', 'linux-aarch64-appimage'],
    macos:   ['darwin-aarch64', 'darwin-x86_64'],
    windows: ['windows-x86_64-msi-en', 'windows-x86_64-msi-ar'],
  };

  function getDlBase(version) {
    return 'https://github.com/DevXNexusPro/DevNexus/releases/download/v' + (version || '0.4.1');
  }

  // Does an asset (filename) belong to a DL_META platform key?
  function assetKeyFor(name, key) {
    if (!name) return false;
    const meta = DL_META[key];
    if (!meta) return false;
    const f = meta.format;
    if (!name.endsWith(f)) return false;
    switch (key) {
      case 'darwin-aarch64':
        return /aarch64/.test(name);
      case 'darwin-x86_64':
        return /x64/.test(name) && !/aarch64/.test(name);
      case 'linux-aarch64-deb':
        return /arm64/.test(name);
      case 'linux-aarch64-appimage':
        return /aarch64/.test(name);
      case 'linux-x86_64-deb':
      case 'linux-x86_64-appimage':
        return /amd64/.test(name);
      case 'linux-x86_64-rpm':
        return /x86_64/.test(name) && !/aarch64/.test(name);
      case 'windows-x86_64-msi-en':
        return /en-US/.test(name);
      case 'windows-x86_64-msi-ar':
        return /ar-SA/.test(name);
      default:
        return false;
    }
  }

  function setupPlatformDetection() {
    const platform = detectPlatform();
    const el = document.querySelector('.js-detected-platform');
    const btn = document.querySelector('.js-download-btn');
    const autoIcon = document.querySelector('.js-auto-icon');
    if (!el) return;

    const platformNames = {
      windows: { name: 'Windows', icon: '🪟' },
      macos: { name: 'macOS', icon: '🍎' },
      linux: { name: 'Linux', icon: '🐧' },
    };

    const info = platformNames[platform] || { name: 'GitHub', icon: '⬇' };
    el.innerHTML = `${info.icon} ${info.name}`;
    if (autoIcon) autoIcon.textContent = info.icon;

    if (btn) {
      btn.textContent = '⬇ ' + t('dl.auto.btn') + ' ' + info.name;
      // URLs will be updated after JSON loads; set fallback
      btn.href = '/download/';
    }
  }

  function updateAutoDetectUrl() {
    const platform = detectPlatform();
    const btn = document.querySelector('.js-download-btn');
    if (!btn) return;
    const v = DL_JSON_VERSION || '0.4.1';
    const base = getDlBase(v);

    // Build URLs from JSON data or fallback
    const getUrl = (key) => DL_JSON_DATA?.platforms?.[key]?.url || null;

    const dlUrls = {
      linux:   getUrl('linux-x86_64-deb') || getUrl('linux-x86_64-appimage') || base + '/DevNexus_' + v + '_amd64.deb',
      macos:   getUrl('darwin-aarch64') || getUrl('darwin-x86_64') || base + '/DevNexus_' + v + '_aarch64.dmg',
      windows: getUrl('windows-x86_64-msi-en') || getUrl('windows-x86_64-msi-ar') || base + '/DevNexus_' + v + '_x64_en-US.msi',
    };
    btn.href = dlUrls[platform] || '/download/';
  }

  async function setupDownloadDropdowns() {
    // Fetch the latest GitHub release - downloads and versions come
    // straight from the GitHub API, no local latest.json to maintain.
    try {
      const res = await fetch(DL_API_URL, { headers: { Accept: 'application/vnd.github+json' } });
      if (!res.ok) throw new Error('GitHub API ' + res.status);
      const release = await res.json();
      const ver = String(release.tag_name || '').replace(/^v/, '');
      const assets = Array.isArray(release.assets) ? release.assets : [];

      // Rebuild the same { key: { url, size } } shape previously served by latest.json
      const platforms = {};
      Object.keys(DL_META).forEach(key => {
        const asset = assets.find(a => a && assetKeyFor(a.name, key));
        if (asset) {
          platforms[key] = {
            url: asset.browser_download_url,
            size: asset.size ? (asset.size / 1048576).toFixed(1) + ' MB' : '',
          };
        }
      });

      DL_JSON_DATA = { version: ver, pub_date: release.published_at, platforms };
      DL_JSON_VERSION = ver;

      updateVersionBadge();
      updateHeroVersion();
      updateAutoDetectUrl();
      updateSoftwareSchema(release);
    } catch (e) {
      DL_JSON_VERSION = DL_JSON_VERSION || null;
    }

    // Update pub date
    if (DL_JSON_DATA?.pub_date) {
      const dateEl = document.querySelector('.dl-pub-date');
      if (dateEl) {
        const d = new Date(DL_JSON_DATA.pub_date);
        dateEl.textContent = '· ' + d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      }
    }

    const base = getDlBase(DL_JSON_VERSION || '0.4.1');

    // Populate each card's select
    document.querySelectorAll('.dl-card').forEach(card => {
      const os = card.dataset.os;
      const select = card.querySelector('.js-dl-select');
      const btn = card.querySelector('.js-dl-btn');
      const size = card.querySelector('.js-dl-size');
      const shaBox = card.querySelector('.js-sha-box');
      const shaBtn = card.querySelector('.js-sha-btn');
      if (!select) return;

      select.innerHTML = '';

      // Collect unique entries (deduplicate by URL)
      const seen = new Set();
      const entries = [];

      (DL_OS_KEYS[os] || []).forEach(key => {
        const meta = DL_META[key];
        if (!meta) return;
        const url = DL_JSON_DATA?.platforms?.[key]?.url || '';
        if (!url || seen.has(url)) return;
        seen.add(url);
        entries.push({ url, label: meta.label, size: '-', sha: '' });
      });

      if (entries.length === 0) {
        select.innerHTML = '<option disabled>' + t('dl.none') + '</option>';
        return;
      }

      entries.forEach((e, i) => {
        const opt = document.createElement('option');
        opt.value = e.url;
        opt.textContent = e.label;
        opt.dataset.size = e.size;
        opt.dataset.sha = e.sha;
        if (i === 0) opt.selected = true;
        select.appendChild(opt);
      });

      function update() {
        const opt = select.options[select.selectedIndex];
        if (btn) btn.href = opt.value;
        if (size) size.textContent = opt.dataset.size || '';
        if (shaBox) shaBox.textContent = opt.dataset.sha || '';
      }

      select.addEventListener('change', update);
      update();

      if (shaBtn && shaBox) {
        shaBtn.addEventListener('click', () => {
          const hidden = shaBox.hasAttribute('hidden');
          shaBox.toggleAttribute('hidden');
          shaBtn.classList.toggle('active', !hidden);
        });
      }
    });

    // Build all-downloads table
    buildAllDownloadsTable();
  }

  function buildAllDownloadsTable() {
    const tbody = document.getElementById('dl-all-tbody');
    if (!tbody || !DL_JSON_DATA?.platforms) return;

    tbody.innerHTML = '';
    const seen = new Set();

    Object.entries(DL_JSON_DATA.platforms).forEach(([key, data]) => {
      const meta = DL_META[key];
      if (!meta || meta.skip) return;
      if (seen.has(data.url)) return;
      seen.add(data.url);

      const filename = data.url.split('/').pop();
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="dl-os-badge">${meta.os}</span></td>
        <td>${meta.arch}</td>
        <td><code>${meta.format}</code></td>
        <td class="dl-filename">${filename}</td>
        <td><a href="${data.url}" class="btn btn-primary dl-table-btn">Download</a></td>
      `;
      tbody.appendChild(tr);
    });
  }

  function updateVersionBadge() {
    if (!DL_JSON_VERSION) return;
    document.querySelectorAll('.dl-version-badge').forEach(badge => {
      const prefix = currentLang === 'ar' ? 'الإصدار ' : 'Version ';
      badge.textContent = prefix + 'v' + DL_JSON_VERSION;
    });
  }

  function updateHeroVersion() {
    if (!DL_JSON_VERSION) return;
    // Update hero label
    const heroLabelEn = currentLang === 'ar' ? 'أحدث إصدار v' : 'Latest Release v';
    const heroLabel = document.querySelector('[data-i18n="hero.label"]');
    if (heroLabel) heroLabel.textContent = heroLabelEn + DL_JSON_VERSION;
  }

  // Keep the SoftwareApplication JSON-LD schema version in sync with the
  // current release fetched from the GitHub API (not a hardcoded value).
  function updateSoftwareSchema(release) {
    const script = document.getElementById('ld-software');
    if (!script || !release) return;
    try {
      const data = JSON.parse(script.textContent);
      const ver = String(release.tag_name || '').replace(/^v/, '');
      if (ver) data.softwareVersion = ver;
      if (release.html_url) data.sameAs = release.html_url;
      script.textContent = JSON.stringify(data);
    } catch (e) {
      /* leave schema unchanged on parse error */
    }
  }

  // ─── Copy Code Blocks ─────────────────────────────────
  function setupCopyCode() {
    document.querySelectorAll('.docs-content pre').forEach(pre => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-ghost';
      btn.textContent = 'Copy';
      btn.style.cssText = 'position:absolute;top:0.5rem;right:0.5rem;font-size:0.75rem;padding:0.3rem 0.6rem;';
      pre.style.position = 'relative';
      pre.appendChild(btn);

      btn.addEventListener('click', () => {
        const code = pre.querySelector('code');
        navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
          btn.textContent = 'Copied!';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        }).catch(() => {
          btn.textContent = 'Error';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      });
    });
  }

  // ─── Docs Tables (responsive scroll container) ────────
  function setupDocsTables() {
    document.querySelectorAll('.docs-content table').forEach(table => {
      // Skip tables already wrapped
      if (table.parentElement && table.parentElement.classList.contains('docs-table-wrap')) return;
      const wrap = document.createElement('div');
      wrap.className = 'docs-table-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
  }

  // ─── Mobile Menu: close on link click ──────────────────
  function setupMobileMenuClose() {
    const links = document.querySelector('.navbar-links');
    if (!links) return;
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') links.classList.remove('open');
    });
  }

  // ─── Page title i18n (additional pages) ────────────────
  const originalTranslatePage = translatePage;

  // ─── Init (improved) ──────────────────────────────────
  function init() {
    setTheme(currentTheme);
    setLang(currentLang);
    setupMobileMenu();
    setupMobileMenuClose();
    setupScrollAnimations();
    setupSmoothScroll();
    setupScrollToTop();
    setupDocsSidebar();
    setupPlatformDetection();
    setupCopyCode();
    setupDocsTables();
    setupDownloadDropdowns();
    setActiveNav();

    document.getElementById('langToggle')?.addEventListener('click', toggleLang);
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);

    // Detect language from URL param
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('lang') === 'ar') setLang('ar');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();