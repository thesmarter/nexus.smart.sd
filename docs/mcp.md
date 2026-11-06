# MCP Server & AI Integration

DevNexus includes an embedded MCP (Model Context Protocol) server that exposes the entire dev environment to AI assistants like Claude Code, Cursor, Windsurf, VS Code, and more.

---

## Overview

The MCP server runs as an HTTP endpoint inside DevNexus, allowing AI assistants to discover and control your local development environment through a standardized protocol.

![MCP Architecture](./images/mcp-architecture.png)

| Property | Value |
|----------|-------|
| **Transport** | Streamable HTTP (not stdio) |
| **Endpoint** | `http://127.0.0.1:8938/mcp` |
| **Auth** | Bearer token (auto-generated) |
| **Default State** | Disabled (enable from Settings) |
| **Security** | Localhost-only, DNS rebinding protection |

---

## Enabling the MCP Server

### From the GUI

1. Open **Settings** → **AI / MCP**
2. Toggle **Enable MCP Server** to ON
3. The server starts immediately on port 8938

![MCP Settings](./images/mcp-settings.png)

### Auto-start

When enabled, the MCP server starts automatically with DevNexus and stops when the app closes.

---

## Security

### Bearer Token Authentication

Every request to the MCP endpoint must include a valid Bearer token:

```
Authorization: Bearer devnexus-xxxxxxxxxxxx
```

The token is:
- Auto-generated on first use (UUID v4 format)
- Stored in `mcp_config.json` with restricted file permissions (`0600` on Unix)
- Rotatable from the Settings page

### DNS Rebinding Protection

The server rejects requests with `Origin` headers that don't match `localhost` or `127.0.0.1`. CLI tools and `curl` that omit the Origin header are allowed.

### Localhost Binding

The server **only** binds to `127.0.0.1` — it is never accessible from the network.

---

## Connecting AI Clients

### One-Click Setup

DevNexus can automatically configure detected AI assistants:

1. Open **Settings** → **AI / MCP**
2. Click **Setup AI Clients**
3. DevNexus writes the MCP configuration to each detected client's config file

![AI Client Setup](./images/ai-client-setup.png)

### Supported Clients

| Client | Config File | Detection Method |
|--------|------------|-----------------|
| **Claude Code** | `~/.claude.json` | `claude` on PATH |
| **Claude Desktop** | `~/.config/claude/claude_desktop_config.json` | Config file exists |
| **Cursor** | `~/.cursor/mcp.json` | `cursor` on PATH |
| **Windsurf** | `~/.codeium/windsurf/mcp_config.json` | `windsurf` on PATH |
| **Zed** | `~/.config/zed/settings.json` | `zed` on PATH |
| **OpenCode** | `~/.config/opencode/opencode.json` | `opencode` on PATH |
| **VS Code** | `~/.vscode/mcp.json` | `code` on PATH |
| **JetBrains (Junie)** | `~/.config/JetBrains/junie/mcp.json` | IDE detected on PATH |

### Manual Configuration

If you prefer to configure a client manually, add this to its MCP config:

```json
{
  "mcpServers": {
    "devnexus": {
      "url": "http://127.0.0.1:8938/mcp",
      "type": "http",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

> **Note:** Some clients (Zed, OpenCode) use `"mcp"` as the root key instead of `"mcpServers"`. JetBrains uses `"servers"`.

---

## DevNexus Agent Skill

DevNexus can install a `SKILL.md` file into `~/.claude/skills/devnexus/` that teaches Claude Code (and compatible assistants) how to use the MCP tools effectively.

![Agent Skill](./images/agent-skill.png)

**Install from Settings → AI / MCP → Install Agent Skill**

The skill provides:
- When to use DevNexus MCP tools
- Example workflows (status checks, debugging, project creation)
- Best practices (always read `list_sites` first, never hardcode paths)

---

## MCP Tools (17)

### Service Management

| Tool | Description | Parameters |
|------|-------------|------------|
| `list_services` | List all managed services with status | — |
| `get_service_status` | Get status of one service | `service`: caddy, mysql, postgres, redis, mailpit, phpfpm, node |
| `start_service` | Start a background service | `service`: service name |
| `stop_service` | Stop a running service | `service`: service name |
| `restart_service` | Restart a service | `service`: service name |
| `service_logs` | Read last N lines of a service log | `service`: name, `lines`: optional (default 200) |

### Site & Project Management

| Tool | Description | Parameters |
|------|-------------|------------|
| `list_sites` | List all discovered and linked sites | — |
| `open_project_folder` | Open project in system file manager | `path`: absolute path |
| `open_in_browser` | Open URL in default browser | `url`: full URL |
| `run_artisan` | Run Laravel Artisan command | `project_path`, `command` |
| `run_composer` | Run Composer command | `project_path`, `command` |
| `git_status` | Get git status for a project | `path`: project root |
| `get_site_config` | Get `.devnexus.json` for a site | `path`: project root |

### Database Operations

| Tool | Description | Parameters |
|------|-------------|------------|
| `list_databases` | List all MySQL databases | — |
| `create_database` | Create a new MySQL database | `db_name` |
| `export_database` | Export database to SQL dump | `db_name`, `output_path` |
| `backup_database` | Create backup dump of a database | `db_name` |

### Backup Management

| Tool | Description | Parameters |
|------|-------------|------------|
| `create_full_backup` | Create full environment backup | — |
| `create_projects_backup` | Backup projects only | — |
| `list_backups` | List all available backups | — |

### System Information

| Tool | Description | Parameters |
|------|-------------|------------|
| `get_dashboard_stats` | Dashboard summary (sites, services, versions) | — |
| `get_php_version` | Get active PHP version string | — |
| `list_php_extensions` | List all PHP extensions with state | — |

---

## MCP Prompts (3)

Prompts provide structured workflows that guide AI assistants through complex tasks.

| Prompt | Description | Parameters |
|--------|-------------|------------|
| `diagnose_service` | Step-by-step service diagnosis workflow | `service`: service name |
| `query` | General-purpose environment query | `question`: natural language |
| `create_site` | Guided project creation workflow | `name`, `site_type` |

### Example: `diagnose_service`

When you call this prompt with `service: "mysql"`, the AI assistant will:

1. Call `get_service_status` to check if MySQL is running and installed
2. If not running or showing errors, call `service_logs` for MySQL (last 100 lines)
3. Analyze the logs and suggest concrete fix steps
4. If a restart might help, suggest calling `restart_service`

---

## MCP Resources (2)

Resources provide read-only data that AI assistants can access directly.

| Resource URI | Description |
|-------------|-------------|
| `devnexus://status` | All managed services with running state and port (JSON) |
| `devnexus://php-version` | Currently active PHP version string |

---

## Development MCP (rust-analyzer)

In addition to the embedded MCP server, the DevNexus project uses a **development MCP server** for AI-assisted coding:

### Configuration

Located in `opencode.json` at the project root:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "instructions": ["AGENTS.md"],
  "mcp": {
    "rust-analyzer": {
      "type": "local",
      "command": ["rust-analyzer-mcp", "src-tauri"],
      "enabled": true
    }
  }
}
```

### What it provides

The `rust-analyzer-mcp` server gives AI coding assistants full Rust code intelligence:

| Tool | Description |
|------|-------------|
| `rust_analyzer_diagnostics` | Compiler errors, warnings, hints |
| `rust_analyzer_workspace_diagnostics` | Diagnostics across the entire workspace |
| `rust_analyzer_symbols` | Document symbols (functions, structs, etc.) |
| `rust_analyzer_definition` | Go to definition |
| `rust_analyzer_references` | Find all references |
| `rust_analyzer_hover` | Hover information for symbols |
| `rust_analyzer_completion` | Code completion suggestions |
| `rust_analyzer_code_actions` | Available refactorings |
| `rust_analyzer_rename` | Rename symbols across the workspace |
| `rust_analyzer_format` | Format Rust files |

### Setup

```bash
# Install rust-analyzer component
rustup component add rust-analyzer

# The MCP server is auto-configured via opencode.json
# Just open the project in an AI assistant that supports MCP
```

### AGENTS.md

The `instructions` field loads `AGENTS.md` as the agent's instruction set, enforcing:
- Quality gates (fmt, clippy, tests)
- Coding conventions
- Commit conventions
- Release procedures

---

## Architecture

```
┌─────────────────────────────────────────────┐
│              AI Assistant                    │
│  (Claude Code / Cursor / VS Code / ...)     │
└──────────────────┬──────────────────────────┘
                   │ MCP (Streamable HTTP)
                   │ http://127.0.0.1:8938/mcp
                   │ Authorization: Bearer <token>
┌──────────────────▼──────────────────────────┐
│           DevNexus MCP Server               │
│           (mcp_server.rs)                   │
│  ┌─────────────────────────────────────┐    │
│  │  Tools (17)  │ Prompts (3) │ Res (2)│    │
│  └──────┬──────┘─────┬───────┘────┬────┘    │
└─────────┼────────────┼────────────┼─────────┘
          │            │            │
┌─────────▼────────────▼────────────▼─────────┐
│              Commands Layer                  │
│  (service_manager, site_manager, database,  │
│   backup, system)                           │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│              Services Layer                  │
│  (business logic, process management,       │
│   binary management, host sync, ...)        │
└─────────────────────────────────────────────┘
```

---

## Troubleshooting

### MCP server won't start

1. Check if port 8938 is in use: `lsof -i :8938` (Linux/macOS) or `netstat -ano | findstr 8938` (Windows)
2. Verify `mcp_config.json` exists and is valid JSON
3. Check DevNexus logs for errors

### AI assistant can't connect

1. Verify the MCP server is running (Settings → AI / MCP shows "Running")
2. Confirm the Bearer token matches what's configured in the AI client
3. Ensure the AI client's config file was written correctly

### Token rotation

If you suspect the token was compromised:

1. Go to **Settings → AI / MCP**
2. Click **Rotate Token**
3. Re-run **Setup AI Clients** to update all clients with the new token

---

## Related

- [Services](./services.md) — What each service does
- [Configuration](./configuration.md) — `mcp_config.json` details
- [CLI Reference](./cli.md) — Command-line alternative to MCP
