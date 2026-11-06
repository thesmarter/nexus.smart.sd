# DevNexus Documentation — Image Placeholders

This directory hosts all screenshots used across the DevNexus documentation.

**Recommended resolution:** 1920×1020 (matches the DevNexus app content area)
**Format:** PNG
**Naming:** `kebab-case` matching the references below.

Most recent screenshots are 1920×1020 captures from the DevNexus dev server with seeded fixture data — they show the app content only, with no OS title bar. A few older screenshots were captured as full application windows and include the OS title bar at their native size.

---

## Required Images

### Dashboard

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `dashboard-overview.png` | `docs/README.md` | Main app Dashboard with services status, active sites, and PHP info |
| `dashboard-verified.png` | `docs/getting-started.md` | Dashboard with everything running |
| `first-launch.png` | `docs/getting-started.md` | DevNexus window on first launch |

### Sites

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `sites-overview.png` | `docs/sites.md` | Sites page with project list |
| `project-detection.png` | `docs/sites.md` | Project type detection in action |
| `create-site.png` | `docs/getting-started.md` | "Create Site" modal |
| `create-new-site.png` | `docs/sites.md` | Create site form |
| `create-site-full-screen.png` | `docs/sites.md` | Full-screen Create Site workflow |
| `link-project.png` | `docs/sites.md` | Link project dialog |
| `run-artisan.png` | `docs/sites.md` | Artisan/Composer command runner |

### Services

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `services-page.png` | `docs/getting-started.md` | Services page with running services |
| `services-overview.png` | `docs/services.md` | Services page with all services listed |
| `caddy-service.png` | `docs/services.md` | Caddy service detail |
| `nodejs-service.png` | `docs/services.md` | Node.js dev server status |

### PHP

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `php-versions.png` | `docs/services.md` | PHP version manager list |
| `php-extensions.png` | `docs/services.md` | PHP extensions UI with toggles |

### Databases & Cache

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `mysql-service.png` | `docs/services.md` | MySQL service detail |
| `postgresql-service.png` | `docs/services.md` | PostgreSQL service detail |
| `redis-service.png` | `docs/services.md` | Redis service detail |

### Mail

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `mailpit-service.png` | `docs/services.md` | Services page with the Mailpit email testing service |

### Backups

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `backup-page.png` | `docs/backup.md` | Backup management page |
| `create-backup.png` | `docs/backup.md` | Creating a new backup |
| `scheduled-backups.png` | `docs/backup.md` | Backup scheduling configuration |
| `restore-backup.png` | `docs/backup.md` | Restore confirmation |

### AI / MCP

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `mcp-settings.png` | `docs/mcp.md` | Settings page MCP toggle + token display |
| `ai-client-setup.png` | `docs/mcp.md` | AI client setup results list |
| `agent-skill.png` | `docs/mcp.md` | Skill installation confirmation |

### Architecture Diagrams

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `mcp-architecture.png` | `docs/mcp.md` | Diagram of AI assistant ↔ MCP server ↔ DevNexus |
| `architecture-layers.png` | `docs/architecture.md` | Diagram of Commands → Services → Models layers |

### Getting Started

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `download-page.png` | `docs/getting-started.md` | GitHub Releases page with download assets |
| `binaries-page.png` | `docs/getting-started.md` | Binaries page with downloadable tools |

### CLI

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `cli-usage.png` | `docs/cli.md` | Terminal running `devnexus status` and output |

### Themes

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `themes-page.png` | `docs/index.html` | Themes page with the five built-in themes, text size slider and import actions |
| `theme-builder.png` | `docs/index.html` | Theme Builder website with presets, editing form and live preview |
| `theme-macos.png` | `docs/index.html` | Themes page rendered with the macOS theme |
| `theme-windows.png` | `docs/index.html` | Themes page rendered with the Windows theme |

### Development

| File | Used In | Suggested Content |
|------|---------|-------------------|
| `dev-mode.png` | `docs/development.md` | Vite dev server + Tauri running |
| `quality-gates.png` | `docs/development.md` | Terminal showing fmt/clippy/test passing |

---

**Total: 38 images**

> If both `services-overview.png` (Services) and `services-page.png` (Getting Started) show the same page, you can copy one to the other.
