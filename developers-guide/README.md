# Developers Guide

This section is meant for documenting the project for developers working on the project.

## Sections

This guide contains 2 major sections:

- [Codebase](code-base) Meant for documenting everything related to the code and the project's logic.
- [Dev Rules](dev-rules) Meant for documenting the development rules and conventions for storefront team in the company.

Linting and PropTypes to the project, so make sure your PRs follow the following instructions:

2. Always make sure the affected files contain the right `PropTypes`

Along with the clean code and the DRY approach, there are extra steps every reviewer should be aware of on reviewing

## PR structure

- PR's title should be: `[feature or bugfix or hotfix]/description`
- Ex for PR's : `feature/implement-layout`
- PR should be assigned to the engineer who worked on it.
- PR cannot exceed more than one day in the review column.
- If the PR exceeded the proposed days of the review.
- At least 1 reviewer for a single PR.
- PR should not exceed 250 changes, if that's the case please break the PR into multiple small ones and merge them to a feature branch.
- PR should have a description for that's added.

## Choosing Package Criteria

### Fit:

- Current need and future needs.
- Team experience with the packages.

### Maintainability:

- Community support.
- Number of opened issues/number of closed issues.
- Last Commit.

### Complexity:

- Complexity of implementing the current and future needs.
- Complexity of changing the package in the future.
- Package dependencies.
- Package Size.

### Popularity:

- Github Stars.
- Number of Commits.
- NPM Weekly Downloads.
- NPM trends.

# Guides to be Added

## Codebase

- [ ] Pages
- [ ] Components
- [ ] Scripts
- [ ] Folder structure
- [ ] Dependencies
- [ ] Debuging
- [ ] Tests

## Dev Rules

- [ ] Versioning
- [ ] Workflow
- [ ] Commits
- [ ] Vscode extensions
- [ ] Code styles
- [ ] Deployments
