# AGENTS.md — cmux Frontend Development Guide

## Project Overview

This is **Stamping Across Taipei**, a React 19 + Vite 8 frontend project. All development, testing, and prototyping should leverage **cmux** (the Ghostty-based macOS terminal) for an integrated terminal + browser workflow.

---

## cmux Setup

### Opening the project

```bash
cmux /Users/priscilia/Developer/stamping-across-taipei
```

### Verify the CLI is available

```bash
cmux version
```

---

## Dev Server Workflow

### Start the dev server and open a browser preview side-by-side

```bash
# Start Vite dev server in the current pane
npm run dev

# In a script or from another pane, split a browser preview to the right
cmux browser open-split http://localhost:3000
```

Or do it all in one shot from the CLI:

```bash
# Start dev server in a new split, then open a browser alongside it
cmux new-split right
cmux send --surface surface:1 "npm run dev"
cmux new-pane --type browser --direction right --url http://localhost:3000
```

### Reload the browser after changes

```bash
cmux browser reload
```

---

## Visual Testing with the In-App Browser

The cmux in-app browser is scriptable. Use it to visually verify UI changes without leaving the terminal.

> **Important:** Browser commands require `--surface <id>` **before** the subcommand to target a specific browser pane.
> Find surface IDs with `cmux list-panels`. Example: `cmux browser --surface surface:2 screenshot`

### Take a snapshot of the accessibility tree (useful for verifying rendered content)

```bash
cmux browser --surface surface:2 snapshot
cmux browser --surface surface:2 snapshot --interactive    # only interactive elements
cmux browser --surface surface:2 snapshot --selector ".app" # scope to a CSS selector
cmux browser --surface surface:2 snapshot --compact         # compact output
```

### Take a screenshot

```bash
cmux browser --surface surface:2 screenshot          # saves to temp dir, returns file path
cmux browser --surface surface:2 screenshot --json   # base64 output for programmatic use
```

### Check element visibility and state

```bash
cmux browser --surface surface:2 is visible ".header"
cmux browser --surface surface:2 get text ".title"
cmux browser --surface surface:2 get count ".stamp-item"
cmux browser --surface surface:2 get styles ".button" --property background-color
```

### Wait for UI to settle after navigation or data loading

```bash
cmux browser --surface surface:2 wait --selector ".content-loaded"
cmux browser --surface surface:2 wait --text "Welcome"
cmux browser --surface surface:2 wait --load-state interactive
cmux browser --surface surface:2 wait --function "() => document.readyState === 'complete'"
```

---

## Interactive UI Prototyping

Use browser automation commands to interact with the app as a user would:

```bash
# Click elements
cmux browser click "button.start"
cmux browser click ".nav-link"

# Fill form fields
cmux browser type "input[name='search']" "大安森林公園"
cmux browser fill "textarea" "Some description text"

# Press keys
cmux browser press Enter
cmux browser press Escape

# Scroll to elements
cmux browser scroll-into-view ".footer"

# Hover for tooltip/dropdown testing
cmux browser hover ".menu-trigger"
```

### Execute arbitrary JS in the browser context

```bash
cmux browser eval "document.title"
cmux browser eval "document.querySelectorAll('.stamp').length"
cmux browser eval "window.scrollTo(0, document.body.scrollHeight)"
```

---

## Notifications

Use cmux notifications to signal when long-running tasks complete:

```bash
# After a build finishes
npm run build && cmux notify --title "Build Complete" --body "Vite build succeeded"

# Notify on lint errors
npm run lint || cmux notify --title "Lint Failed" --body "Fix lint errors"
```

### Sidebar status indicators

```bash
cmux set-status dev "Running" --icon checkmark --color "#00ff00"
cmux set-status build "Building..." --icon warning --color "#ffaa00"
cmux clear-status dev
```

### Progress indicators

```bash
cmux set-progress 0.5 --label "Building..."
cmux set-progress 1.0 --label "Done"
cmux clear-progress
```

---

## Recommended cmux.json

Place this `cmux.json` in the project root to register workspace commands in the cmux command palette:

```json
{
  "commands": [
    {
      "name": "Dev Environment",
      "description": "Start Vite dev server with browser preview",
      "keywords": ["dev", "start", "vite", "frontend"],
      "restart": "confirm",
      "workspace": {
        "name": "Stamping Across Taipei — Dev",
        "cwd": ".",
        "layout": {
          "direction": "horizontal",
          "split": 0.5,
          "children": [
            {
              "pane": {
                "surfaces": [
                  {
                    "type": "terminal",
                    "name": "Vite Dev",
                    "command": "npm run dev",
                    "focus": true
                  }
                ]
              }
            },
            {
              "direction": "vertical",
              "split": 0.7,
              "children": [
                {
                  "pane": {
                    "surfaces": [
                      {
                        "type": "browser",
                        "name": "Preview",
                        "url": "http://localhost:3000"
                      }
                    ]
                  }
                },
                {
                  "pane": {
                    "surfaces": [
                      {
                        "type": "terminal",
                        "name": "Shell"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "name": "Run Lint",
      "keywords": ["lint", "eslint", "check"],
      "command": "npm run lint"
    },
    {
      "name": "Production Build",
      "keywords": ["build", "production", "deploy"],
      "command": "npm run build && cmux notify --title 'Build Complete' --body 'Production build finished'",
      "confirm": true
    },
    {
      "name": "Preview Build",
      "keywords": ["preview", "serve"],
      "restart": "confirm",
      "workspace": {
        "name": "Preview",
        "cwd": ".",
        "layout": {
          "direction": "horizontal",
          "split": 0.5,
          "children": [
            {
              "pane": {
                "surfaces": [
                  {
                    "type": "terminal",
                    "name": "Preview Server",
                    "command": "npm run build && npm run preview",
                    "focus": true
                  }
                ]
              }
            },
            {
              "pane": {
                "surfaces": [
                  {
                    "type": "browser",
                    "name": "Preview",
                    "url": "http://localhost:4173"
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ]
}
```

---

## Useful Keyboard Shortcuts

| Shortcut   | Action                     |
| ---------- | -------------------------- |
| ⌘ D        | Split pane right           |
| ⌘ ⇧ D      | Split pane down            |
| ⌥ ⌘ ←→↑↓   | Focus pane directionally   |
| ⌘ ⇧ L      | Open browser in split      |
| ⌘ L        | Focus browser address bar  |
| ⌘ R        | Reload browser page        |
| ⌘ ⇧ U      | Jump to latest notification|
| ⌘ I        | Show notifications panel   |
| ⌘ B        | Toggle sidebar             |

---

## Mandatory Workflow (ALWAYS follow these steps)

Every change — no matter how small — MUST go through all five steps below, in order. Do not skip any step.

### 1. Write tests to cover changes

- Every code change MUST have accompanying tests before it is considered complete.
- Write unit tests for new or modified components, hooks, and utility functions.
- Write integration tests when changes affect how components interact.
- Place test files next to the source file they test, using the naming convention `<filename>.test.jsx` or `<filename>.test.js`.
- Run tests with:

```bash
npm test
```

### 2. Ensure all tests pass

- Run the full test suite after writing tests. **All tests must pass** before proceeding.
- If any test fails, fix the code or the test until the suite is green.

```bash
npm test
```

- If using cmux, notify on completion:

```bash
npm test && cmux notify --title "Tests Passed ✅" --body "All tests green" || cmux notify --title "Tests Failed ❌" --body "Fix failing tests"
```

### 3. Fix any bugs discovered

- If you discover a bug during development or testing — **even if it is unrelated to your current task** — fix it.
- If the bug **cannot be fixed** immediately (e.g., it requires a larger refactor or external dependency change), document it in the [Known Bugs](#known-bugs) section at the bottom of this file.

### 4. Commit with conventional commits

- Only commit after steps 1–3 are complete and all tests pass.
- **Always use [Conventional Commits](https://www.conventionalcommits.org/)** format:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`.
- Examples:

```bash
git commit -m "feat(stamp-card): add stamp collection progress bar"
git commit -m "fix(map): correct marker position on mobile viewports"
git commit -m "test(header): add unit tests for navigation links"
git commit -m "docs(readme): update setup instructions"
```

- Only stage files directly related to the current task. **Never use `git add -A` or `git add .`**.

### 5. Update README.md

- After every change, update `README.md` to reflect the current state of the project for human readers.
- Keep the README accurate regarding: features, setup instructions, available scripts, project structure, and any new dependencies.

---

## Agent Guidelines (cmux)

When an AI coding agent is working in this project inside cmux:

0. **Always open a cmux browser side-pane at the start of every prompt.** Before doing any work, run:
   ```bash
   cmux browser open-split http://localhost:3000
   ```
   This ensures you always have a live preview available for visual verification. If the dev server is not running, start it first in a split pane.

1. **Always start the dev server** before making UI changes so you can verify visually.
2. **Use `cmux browser --surface surface:2 snapshot`** after changes to verify rendered output in the accessibility tree.
3. **Use `cmux browser --surface surface:2 screenshot`** to capture visual state when debugging layout or styling issues.
4. **Use `cmux browser --surface surface:2 eval`** to inspect runtime state (e.g., React component output, DOM element counts).
5. **Use `cmux browser --surface surface:2 wait`** before assertions — don't assume the page has rendered yet.
6. **Use `cmux notify`** to alert the user when builds, tests, or long tasks complete.
7. **Use `cmux read-screen`** to read terminal output from other panes (e.g., check Vite dev server for errors).
8. **Use `cmux send`** to run commands in other panes without switching focus.
9. **Prefer the cmux.json workspace commands** to set up reproducible dev environments.

### Verified cmux CLI Findings

The following quirks were discovered during development and differ from the official docs:

- **`--surface` must come before the subcommand** for all `cmux browser` commands. `cmux browser screenshot --surface surface:2` does NOT work; use `cmux browser --surface surface:2 screenshot`.
- **`cmux browser` without `--surface` fails** with `"browser requires a subcommand"`. Always specify the surface ID. Find it via `cmux list-panels`.
- **`cmux browser --surface surface:2 screenshot`** saves to a temp directory and returns the file path (e.g., `OK file:///var/folders/.../surface-xxx.png`). There is no `--out` flag; pipe or copy the output path.
- **`cmux send` appends a newline by default.** No need to add `\n` unless sending multiple lines.
- **`cmux send-key` only works on terminal surfaces.** Sending `ctrl+c` to a browser surface returns `"Surface is not a terminal"`.
- **`cmux new-split` returns a surface ID** (e.g., `surface:4`) — save this to target the new pane later.
- **Port conflicts:** If the dev server port is in use, Vite will auto-increment. Kill the old process first with `lsof -ti:3000 | xargs kill -9` before restarting.
- **Scrolling the browser:** Use `cmux browser --surface surface:2 eval "window.scrollTo({ top: 500, behavior: 'instant' })"` — the `scroll` subcommand is for element-level scrolling, not page scrolling.

---

## Development Progress

### Completed

- **Title section with 7 flying stickers**: Stamps (06, 19, 17, 46, 73, 78, 51) arranged around the title "stamping across taipei in 5 days". Each sticker flies to its nearest edge (top/left/right, never bottom) on scroll, maintaining its original rotation. Responsive sizing: 100px mobile → 140/160px tablet → 180/220px laptop.
- **Aeroplane animation**: A ✈ icon starts below "skip to stamp catalogue" text and flies along a quadratic bezier curve toward the bottom-right edge as the user scrolls to the Intro section. Leaves a dotted trail behind it. Trail path avoids all centered text.
- **Intro section**: Stamp collecting narrative with styled text and date range.
- **Dev server port**: Vite configured to always use `localhost:3000`.

### In Progress

- Stat1 section (placeholder content)
- Stamp catalogue section (referenced in "skip to stamp catalogue" link)

---

## Known Bugs

<!-- Document any bugs discovered during development that could not be fixed immediately. -->
<!-- Format: ### [component/area] Brief description -->
<!-- Include: steps to reproduce, expected vs actual behavior, and why it was deferred. -->

_No known bugs at this time._
