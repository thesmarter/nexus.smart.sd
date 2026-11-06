# Development Guide

This guide covers building DevNexus from source, the development workflow, quality gates, and coding conventions.

---

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| **Rust** | Latest stable | Backend compilation |
| **Node.js** | v18+ | Frontend build |
| **Tauri CLI** | v2 | App packaging |

### System Dependencies

| Platform | Requirements |
|----------|-------------|
| **Linux** | glibc 2.28+, GTK 3, WebKit2GTK 4.1, `pkexec` |
| **macOS** | Xcode CLI tools |
| **Windows** | WebView2, Visual Studio Build Tools |

See [Tauri v2 Prerequisites](https://v2.tauri.app/start/prerequisites/) for detailed setup instructions.

---

## Quick Start

```bash
# Clone the source repository
git clone https://github.com/DevXNexusPro/Nexus-src.git
cd Nexus-src

# Install frontend dependencies
npm install

# Run in development mode
npm run tauri dev
```

![Dev Mode](./images/dev-mode.png)

---

## Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (frontend only) |
| `npm run tauri dev` | Run full Tauri app in development mode |
| `npm run tauri build` | Build production binaries |
| `npm run build` | Build frontend only |
| `npm run test` | Run frontend unit tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | TypeScript type checking (`tsc --noEmit`) |
| `npm run format` | Format frontend code (Prettier) |

### Rust Commands (in `src-tauri/`)

| Command | Description |
|---------|-------------|
| `cargo check` | Compile check without producing binary |
| `cargo build` | Build the backend |
| `cargo test` | Run all Rust tests |
| `cargo fmt` | Format Rust code |
| `cargo fmt --check` | Check formatting (CI gate) |
| `cargo clippy -- -D warnings` | Lint with zero warnings (CI gate) |

---

## Quality Gates

These checks **must pass** before any commit or release. CI enforces them on push to `main`/`master`/`develop`.

### 1. Formatting

```bash
# From src-tauri/
cargo fmt --check
```

Must print **nothing** and exit 0. If it fails:

```bash
cargo fmt
cargo fmt --check  # verify clean
```

### 2. Clippy

```bash
# From src-tauri/
cargo clippy -- -D warnings
```

Must finish with **zero diagnostics**. Fix any reported issues and re-run.

### 3. Tests

```bash
cargo test           # Backend
npm test             # Frontend (Vitest)
```

### 4. Type Check

```bash
npm run lint         # tsc --noEmit
cargo check          # Rust compilation
```

### Running All Gates Locally

Use the provided scripts from the repo root:

```bash
# Windows
check.bat

# Linux/macOS
./check.sh
```

![Quality Gates](./images/quality-gates.png)

---

## Project Structure

### Backend (`src-tauri/`)

The Rust backend follows a **three-layer architecture**:

```
Commands (IPC) → Services (Business Logic) → Models (Data)
```

| Directory | Responsibility |
|-----------|---------------|
| `src/commands/` | Thin `#[tauri::command]` handlers |
| `src/services/` | Stateless business logic functions |
| `src/models/` | Data structures with Serialize/Deserialize |
| `src/utils/` | Error types, paths, system helpers |
| `src/bin/` | Standalone binaries (CLI, repair_hosts) |

### Frontend (`src/`)

React component hierarchy:

```
Layout (AppShell, Sidebar, Header)
  └── Pages (Dashboard, Sites, Services, ...)
        └── Modules (page-level components)
              └── Molecules (composed atoms)
                    └── Atoms (smallest pieces)
                          └── UI (generic primitives)
```

---

## Coding Conventions

### Rust

- **Idiomatic Rust**, edition 2021
- **Errors:** Use `DevStackError` (thiserror) — return `Result` + `?`
- **No panics:** No `unwrap()`/`expect()`/`panic!()` in production code
- **Logging:** Use `tracing` — no `println!()`/`dbg!()`
- **Async:** Tokio for async, Tauri managed state for shared state
- **Paths:** Always resolve through `utils/paths.rs` / `services/path_manager.rs`

### TypeScript

- **Strict mode** enabled
- **Avoid `any`** without justification
- **Styling:** Tailwind CSS utility classes
- **State:** React Query for server state, React state for UI state

### Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use Case |
|--------|---------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation |
| `test:` | Adding/updating tests |
| `ci:` | CI/CD changes |
| `refactor:` | Code refactoring |
| `chore:` | Maintenance tasks |
| `release:` | Version bumps |

---

## Release Process

### One-Command Release (Recommended)

```bash
# Windows
release.bat

# Linux/macOS
./release.sh
```

**Dry-run first:**

```bash
release.bat check      # Windows
./release.sh check     # Linux/macOS
```

The release script:

1. Bumps the version in `package.json`, `tauri.conf.json`, and `Cargo.toml`
2. Updates `CHANGELOG.md`
3. Commits `release: vX.Y.Z`
4. Creates and pushes tag `vX.Y.Z`
5. Waits for GitHub Actions to build and publish
6. Updates the website repo (`nexus.smart.sd`)

### Version Files

Three files must stay in sync:

| File | Field |
|------|-------|
| `package.json` | `"version"` |
| `src-tauri/tauri.conf.json` | `"version"` |
| `src-tauri/Cargo.toml` | `version` |

---

## CI/CD

### `ci.yml`

Runs on push to `main`/`master`/`develop` and PRs:

- TypeScript type checking
- Frontend build
- Rust `check` / `fmt` / `clippy` / `test`

### `build.yml`

Builds and publishes release binaries:

| Platform | Architecture | Output |
|----------|-------------|--------|
| Linux | x86_64 | `.deb`, `.rpm`, `.AppImage` |
| Linux | aarch64 | `.deb`, `.AppImage` |
| macOS | Intel | `.dmg` |
| macOS | Apple Silicon | `.dmg` |
| Windows | x86_64 | `.msi`, `.exe` |
| Linux | x86_64 (tag) | `.pkg.tar.zst` (Arch) |

---

## Testing

### Frontend

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
```

Tests use Vitest + Testing Library.

### Backend

```bash
cargo test            # Run all Rust tests
```

### Integration

The MCP server can be tested manually:

```bash
# Start DevNexus with MCP enabled
# Then test the endpoint:
curl -H "Authorization: Bearer <token>" http://127.0.0.1:8938/health
```

---

## Related

- [Contributing](./contributing.md) — How to contribute
- [Architecture](./architecture.md) — Detailed architecture
- [Configuration](./configuration.md) — Config file details
