## Commit Message Guidelines

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/) specification. All commit messages **must** follow this format:

`<type>(<optional scope>): <description>`

`<optional body>`

`<optional footer>`

Valid Commit Examples
- feat: add user authentication
- fix: resolve issue with login timeout
- docs: update API documentation
- chore(deps): update dependencies
- feat(api): send an email to the customer when a product is shipped

Commit Types
- feat → A new feature
- fix → A bug fix
- docs → Documentation updates
- chore → Maintenance tasks (e.g., dependency updates)
- refactor → Code changes that don’t fix bugs or add features
- test → Adding or modifying tests
- style → Formatting changes (whitespace, linting, etc.)

Pull requests with commits that do not follow this format will be rejected by automated checks.

Pull requests must:
- Have a title
- Have a description (at least 10 characters)

Commits must:
- Follow conventional commit format
- Have at most 50 characters in the title
- Have a line separating title and description (description is optional )
- Description must be at least 5 characters long
- Each line of description doesn't execeeds 72 characters