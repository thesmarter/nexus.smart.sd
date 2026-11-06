# Architecture

This document describes the internal architecture of DevNexus — the tech stack, directory structure, and design patterns used throughout the codebase.

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Backend** | Rust (Tauri v2) | Edition 2021 |
| **Frontend** | React + TypeScript + Vite | React 19, Vite 7 |
| **Styling** | Tailwind CSS | v4 |
| **Testing** | Vitest + Testing Library (FE), `cargo test` (BE) | — |
| **CI/CD** | GitHub Actions | — |

### Rust Crates

| Crate | Purpose |
|-------|---------|
| `tauri` | Desktop app framework |
| `axum` | HTTP server (MCP endpoint) |
| `rmcp` | MCP protocol implementation |
| `clap` | CLI argument parsing |
| `tokio` | Async runtime |
| `serde` / `serde_json` | Serialization |
| `thiserror` | Error types |
| `tracing` | Structured logging |

### Frontend Packages

| Package | Purpose |
|---------|---------|
| `@tauri-apps/api` | Tauri IPC bridge |
| `@tanstack/react-query` | Server state management |
| `react-router-dom` | Client-side routing |
| `tailwindcss` | Utility-first CSS |
| `i18next` | Internationalization |

---

## Directory Structure

```
nexus/
├── src/                              # React/TypeScript Frontend
│   ├── pages/                        # Route-level pages
│   │   ├── Dashboard.tsx             # System overview
│   │   ├── Sites.tsx                 # Project management
│   │   ├── Services.tsx              # Service control
│   │   ├── Binaries.tsx              # Download manager
│   │   ├── Database.tsx              # Database tools
│   │   ├── Logs.tsx                  # Log viewer
│   │   ├── Configuration.tsx         # Settings & PHP extensions
│   │   ├── Backup.tsx                # Backup management
│   │   ├── About.tsx                 # App info & updates
│   │   └── Settings.tsx              # App settings & AI setup
│   ├── components/                   # Shared UI components
│   │   ├── ui/                       # Generic UI primitives
│   │   ├── atoms/                    # Smallest composable pieces
│   │   ├── molecules/                # Composed atoms
│   │   ├── modules/                  # Page-level composed components
│   │   └── layout/                   # AppShell, Sidebar, Header
│   ├── hooks/                        # React hooks (Tauri IPC)
│   ├── lib/                          # API layer + utilities
│   ├── themes/                       # Theme definitions
│   ├── locales/                      # i18n translations (en.json, ar.json)
│   ├── types/                        # TypeScript type modules
│   └── styles.css                    # Global styles + Tailwind
│
├── src-tauri/                        # Rust Backend
│   ├── src/
│   │   ├── lib.rs                    # Tauri builder + invoke_handler registration
│   │   ├── main.rs                   # Entry point
│   │   ├── tray.rs                   # System tray
│   │   ├── bin/                      # Standalone binaries
│   │   │   ├── devnexus_cli.rs       # CLI (clap)
│   │   │   └── repair_hosts.rs       # Hosts file repair utility
│   │   ├── commands/                 # Thin Tauri IPC command wrappers
│   │   │   ├── about.rs
│   │   │   ├── analytics.rs
│   │   │   ├── backup.rs
│   │   │   ├── binary_manager.rs
│   │   │   ├── config_dashboard.rs
│   │   │   ├── database.rs
│   │   │   ├── health.rs
│   │   │   ├── jobs.rs
│   │   │   ├── mcp.rs
│   │   │   ├── node_project.rs
│   │   │   ├── queue_workers.rs
│   │   │   ├── service_manager.rs
│   │   │   ├── site_manager.rs
│   │   │   ├── system.rs
│   │   │   └── theme_manager.rs
│   │   ├── services/                 # Business logic (stateless functions)
│   │   │   ├── ai_clients.rs
│   │   │   ├── backup.rs
│   │   │   ├── binary.rs
│   │   │   ├── caddy.rs
│   │   │   ├── config_discovery.rs
│   │   │   ├── db_tools.rs
│   │   │   ├── health.rs
│   │   │   ├── hosts.rs
│   │   │   ├── jobs.rs
│   │   │   ├── mcp.rs
│   │   │   ├── mcp_server.rs
│   │   │   ├── node_project.rs
│   │   │   ├── nvm.rs
│   │   │   ├── path_manager.rs
│   │   │   ├── php.rs
│   │   │   ├── php_builtin_server.rs
│   │   │   ├── php_config.rs
│   │   │   ├── php_fpm.rs
│   │   │   ├── process_manager.rs
│   │   │   ├── process.rs
│   │   │   ├── queue_workers.rs
│   │   │   ├── service_manager.rs
│   │   │   ├── site_manager.rs
│   │   │   ├── ssl_trust.rs
│   │   │   ├── theme_manager.rs
│   │   │   ├── updater.rs
│   │   │   └── watcher.rs
│   │   ├── models/                   # Data structures
│   │   │   ├── binary.rs
│   │   │   ├── health.rs
│   │   │   ├── job.rs
│   │   │   ├── queue.rs
│   │   │   ├── service.rs
│   │   │   ├── site.rs
│   │   │   └── system.rs
│   │   └── utils/                    # Paths, errors, system utilities
│   │       ├── archive.rs
│   │       ├── error.rs
│   │       ├── paths.rs
│   │       └── system.rs
│   └── Cargo.toml
│
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
└── tailwind.config.js
```

---

## Design Patterns

### Backend: Three-Layer Architecture

The Rust backend follows a strict three-layer pattern:

```
Commands (IPC) → Services (Business Logic) → Models (Data)
```

![Three-Layer Architecture](./images/architecture-layers.png)

| Layer | Directory | Responsibility |
|-------|-----------|---------------|
| **Commands** | `src/commands/` | Thin `#[tauri::command]` handlers. Parse inputs, call services, return results. No business logic. |
| **Services** | `src/services/` | Stateless functions implementing all business logic. No Tauri dependencies. |
| **Models** | `src/models/` | Data structures (Site, Service, Binary, etc.) with Serialize/Deserialize. |

**Why this separation:**
- Services can be reused by the CLI and MCP server without going through Tauri IPC
- Commands stay thin and easy to test
- Models are shared across all layers

### Frontend: Component Hierarchy

```
Layout (AppShell, Sidebar, Header)
  └── Pages (Dashboard, Sites, Services, ...)
        └── Modules (page-level composed components)
              └── Molecules (composed atoms)
                    └── Atoms (smallest pieces)
                          └── UI (generic primitives)
```

### IPC Pattern (Frontend → Backend)

```typescript
// hooks/useServices.ts
import { invoke } from '@tauri-apps/api/core';

export function useServiceStatus() {
  return useQuery({
    queryKey: ['services'],
    queryFn: () => invoke('get_all_service_statuses'),
  });
}
```

```rust
// commands/service_manager.rs
#[tauri::command]
pub async fn get_all_service_statuses() -> Result<Vec<ServiceStatus>, DevStackError> {
    service_manager::get_all_statuses().await
}
```

---

## Error Handling

All backend errors use `DevStackError` (via `thiserror`):

```rust
#[derive(Debug, thiserror::Error)]
pub enum DevStackError {
    #[error("IO error: {0}")]
    Io(#[from] std::io::Error),

    #[error("Config error: {0}")]
    Config(String),

    #[error("Service error: {0}")]
    Service(String),

    // ... more variants
}
```

Commands return `Result<T, DevStackError>` and the `?` operator propagates errors automatically.

---

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Per-site PHP-FPM pools** | Isolates PHP versions — different sites can run different PHP versions simultaneously |
| **Xdebug on-demand** | Activates only via cookie/header (port 9003), zero overhead in normal mode |
| **Caddy auto-config** | Generates Caddyfile from site metadata — users never edit it manually |
| **MCP over HTTP** | Streamable HTTP transport (not stdio) — supports multiple clients, works over network |
| **Bearer token auth** | Simple, stateless auth for the MCP endpoint — generated once, stored in config |
| **DNS rebinding guard** | MCP server rejects requests with non-localhost Origin headers |
| **XDG-compliant paths** | All data lives in platform-standard locations — no hardcoded paths |
