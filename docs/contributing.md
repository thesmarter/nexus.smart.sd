# Contributing

Thank you for your interest in contributing to DevNexus! This guide covers the workflow, conventions, and quality gates for contributions.

---

## Getting Started

1. **Fork** the repository ([Nexus-src](https://github.com/DevXNexusPro/Nexus-src))
2. **Clone** your fork locally
3. **Install** dependencies: `npm install`
4. **Create a branch** for your change: `git checkout -b feat/my-feature`
5. **Make your changes** following the conventions below
6. **Run quality gates** (see below)
7. **Commit** with a conventional commit message
8. **Push** and open a Pull Request

---

## Quality Gates

Every contribution **must** pass all quality gates before merging. CI enforces these on push.

### Pre-Commit Hook

Enable the pre-commit hook once:

```bash
git config core.hooksPath .githooks
```

This automatically checks:
- `cargo fmt --check` — Rust formatting
- `cargo clippy -- -D warnings` — Rust linting

### Manual Checks

Run from the repo root:

```bash
# Windows
check.bat

# Linux/macOS
./check.sh
```

Or individually:

```bash
# Frontend
npm run lint           # TypeScript type check
npm test               # Vitest tests
npm run build          # Frontend build

# Backend (from src-tauri/)
cargo fmt --check      # Must be clean
cargo clippy -- -D warnings  # Zero warnings
cargo test             # All tests pass
cargo check            # Compiles without errors
```

---

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

| Type | Description | Example |
|------|-------------|---------|
| `feat:` | New feature | `feat: add PostgreSQL service support` |
| `fix:` | Bug fix | `fix: resolve Caddy reload on config change` |
| `docs:` | Documentation | `docs: update MCP server guide` |
| `test:` | Tests | `test: add service manager unit tests` |
| `ci:` | CI/CD | `ci: add ARM Linux build target` |
| `refactor:` | Code refactoring | `refactor: extract PHP config generation` |
| `chore:` | Maintenance | `chore: update dependencies` |
| `release:` | Version bump | `release: v0.5.0` |

### Rules

- Keep commits **focused** — one logical change per commit
- Match the **existing repo style**
- A commit touching `src-tauri/` must satisfy Rust quality gates
- Never commit secrets, tokens, or credentials

---

## Pull Request Workflow

### Before Opening a PR

1. Ensure all quality gates pass locally
2. Rebase on the latest `main` branch
3. Review your own diff — remove debug code, TODOs, and unrelated changes

### PR Description

Include:
- **What** changed and **why**
- **How** to test the change
- Screenshots/recordings for UI changes
- Related issues (if any)

### Review Process

1. CI runs all quality gates automatically
2. A maintainer reviews the code
3. Address review feedback
4. Once approved, the PR is merged

---

## Code Style

### Rust

- Follow `rustfmt` output (it is the source of truth)
- Use `DevStackError` for error handling — no `unwrap()`/`expect()` in production
- Use `tracing` for logging — no `println!()`/`dbg!()`
- Async with Tokio, shared state via Tauri managed state
- Resolve paths through `utils/paths.rs` — never hardcode

### TypeScript

- Strict TypeScript — avoid `any`
- Tailwind CSS for styling
- React Query for server state
- Follow existing component patterns (atoms → molecules → modules)

### General

- Keep changes minimal and focused
- Don't add features not requested
- Don't refactor unrelated code
- Match the existing style of the file you're editing

---

## Testing

### Frontend

```bash
npm test              # Run all Vitest tests
npm run test:watch    # Watch mode
```

Tests use Vitest + Testing Library. Add tests for:
- New components
- New hooks
- Business logic changes

### Backend

```bash
cargo test            # Run all Rust tests
```

Add tests for:
- New service functions
- New command handlers
- Edge cases and error paths

---

## Development Tips

### Running in Dev Mode

```bash
npm run tauri dev
```

This starts both the Vite dev server and the Tauri backend with hot-reload.

### Rust Analyzer

The project includes a `rust-analyzer-mcp` server configured in `opencode.json`. If your editor supports MCP, you get full Rust code intelligence.

### Logs

Backend logs are written to:
- `dev-stack/logs/` — service logs
- Console output in dev mode (controlled by `RUST_LOG`)

Set `RUST_LOG=debug` for verbose output:

```bash
RUST_LOG=debug npm run tauri dev
```

---

## Issue Reporting

When reporting bugs:

1. **Steps to reproduce** the issue
2. **Expected behavior** vs **actual behavior**
3. **Environment:** OS, DevNexus version, PHP version
4. **Logs:** Relevant error output

---

## Feature Requests

Feature requests are welcome! Check the existing [tasks.md](../tasks.md) for the roadmap and existing proposals.

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

> **Smart Team** — [www.smart.sd](https://www.smart.sd)
