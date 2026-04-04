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
cmux browser open-split http://localhost:5173
```

Or do it all in one shot from the CLI:

```bash
# Start dev server in a new split, then open a browser alongside it
cmux new-split right
cmux send --surface surface:1 "npm run dev"
cmux new-pane --type browser --direction right --url http://localhost:5173
```

### Reload the browser after changes

```bash
cmux browser reload
```

---

## Visual Testing with the In-App Browser

The cmux in-app browser is scriptable. Use it to visually verify UI changes without leaving the terminal.

### Take a snapshot of the accessibility tree (useful for verifying rendered content)

```bash
cmux browser snapshot
cmux browser snapshot --interactive          # only interactive elements
cmux browser snapshot --selector ".app"      # scope to a CSS selector
cmux browser snapshot --compact              # compact output
```

### Take a screenshot

```bash
cmux browser screenshot --out screenshot.png
cmux browser screenshot --json               # base64 output for programmatic use
```

### Check element visibility and state

```bash
cmux browser is visible ".header"
cmux browser is visible ".stamp-card"
cmux browser get text ".title"
cmux browser get count ".stamp-item"
cmux browser get styles ".button" --property background-color
```

### Wait for UI to settle after navigation or data loading

```bash
cmux browser wait --selector ".content-loaded"
cmux browser wait --text "Welcome"
cmux browser wait --load-state interactive
cmux browser wait --function "() => document.readyState === 'complete'"
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
                        "url": "http://localhost:5173"
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

1. **Always start the dev server** before making UI changes so you can verify visually.
2. **Use `cmux browser snapshot`** after changes to verify rendered output in the accessibility tree.
3. **Use `cmux browser screenshot`** to capture visual state when debugging layout or styling issues.
4. **Use `cmux browser eval`** to inspect runtime state (e.g., React component output, DOM element counts).
5. **Use `cmux browser wait`** before assertions — don't assume the page has rendered yet.
6. **Use `cmux notify`** to alert the user when builds, tests, or long tasks complete.
7. **Use `cmux read-screen`** to read terminal output from other panes (e.g., check Vite dev server for errors).
8. **Use `cmux send`** to run commands in other panes without switching focus.
9. **Prefer the cmux.json workspace commands** to set up reproducible dev environments.

---

## Known Bugs

<!-- Document any bugs discovered during development that could not be fixed immediately. -->
<!-- Format: ### [component/area] Brief description -->
<!-- Include: steps to reproduce, expected vs actual behavior, and why it was deferred. -->

_No known bugs at this time._
