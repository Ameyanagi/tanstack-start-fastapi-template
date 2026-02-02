# tanstack-start-fastapi-template

Project template for a production-ready full-stack monorepo with a [TanStack Start](https://tanstack.com/start) + [shadcn/ui](https://ui.shadcn.com/) frontend and a [FastAPI](https://fastapi.tiangolo.com/) backend.

## What You Get

```
your-project/
├── frontend/          # TanStack Start + React + shadcn/ui (Mira)
├── backend/           # FastAPI + Python 3.13 + Pydantic
├── justfile           # Task runner (just dev, just check, just test, ...)
├── docker-compose.yml # Production deployment
├── lefthook.yml       # Parallel pre-commit hooks
└── .github/workflows/ # CI pipeline
```

| Layer    | Technology                                         |
| -------- | -------------------------------------------------- |
| Frontend | TanStack Start, React, shadcn/ui (Mira), Tailwind |
| Backend  | FastAPI, Python 3.13, Pydantic                     |
| API      | hey-api + TanStack Query + Zod (auto-generated)    |
| Lint     | Biome (frontend), Ruff (backend)                   |
| Types    | tsc (frontend), ty (backend)                       |
| Package  | Bun (frontend), uv (backend)                       |
| Tasks    | just                                               |
| VCS      | jj (colocated with git)                            |
| Hooks    | Lefthook (parallel pre-commit)                     |
| Docs     | MkDocs Material (backend API)                      |
| CI       | GitHub Actions                                     |
| Deploy   | Docker + docker compose                            |

## Prerequisites

- [Bun](https://bun.sh) >= 1.2
- [uv](https://docs.astral.sh/uv/) >= 0.6
- [just](https://github.com/casey/just) >= 1.0
- [jj](https://jj-vcs.github.io/jj/) >= 0.25
- [Lefthook](https://github.com/evilmartians/lefthook) >= 1.0
- [Docker](https://www.docker.com/) >= 24.0 (optional)

## Usage

### Option 1: Copier (recommended)

Install [Copier](https://copier.readthedocs.io/) and generate a new project:

```bash
# Install copier
uv tool install copier

# Generate a new project
copier copy --trust gh:Ameyanagi/tanstack-start-fastapi-template my-project
```

You will be prompted for:

| Variable       | Description                      | Example          |
| -------------- | -------------------------------- | ---------------- |
| `project_name` | Project name in kebab-case       | `my-cool-app`    |
| `description`  | Short project description        | `My full-stack app` |

The setup script runs automatically after generation — it scaffolds the frontend via shadcn, installs all dependencies, generates the API client, initializes jj/git, and installs pre-commit hooks.

### Option 2: AI agent skill

If you use [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [OpenCode](https://opencode.ai/), or another agent that supports skills, you can use the bundled `init-tanstack-fastapi` skill to scaffold the project interactively.

## After Generation

```bash
cd my-project
just dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Common Commands

```bash
just dev              # Run frontend + backend
just check            # Lint + format + typecheck + OpenAPI validation
just test             # Run all tests
just fix              # Auto-fix lint and format issues
just gen-api          # Regenerate API client from schema
just docker-build     # Build Docker images
just docker-up        # Start production stack
```

Run `just` with no arguments to see all available commands.
