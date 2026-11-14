# Security review — 2026-11-14

This is a partial remediation, not a certification that the repository is free of vulnerabilities. Changes remain in a draft pull request pending review.

## .

npm findings before: {"info": 0, "low": 9, "moderate": 113, "high": 64, "critical": 22, "total": 208}. After remediation: {"info": 0, "low": 13, "moderate": 99, "high": 39, "critical": 0, "total": 151}.
Counts refer to dependency findings in this project, including development dependencies. Projects without a committed lockfile were first resolved to create an auditable baseline. Production builds were checked on Node.js 24 with CI=true, npm ci --ignore-scripts --legacy-peer-deps and NODE_OPTIONS=--openssl-legacy-provider for legacy Webpack compatibility; these builds are not browser end-to-end tests.

Production build/test result: `{   "project": "midudev-bootcamp",   "manifest_sha256": "323ec24ad02b07e5816fdcde2545809f6681439ac0d9a775390834973983f9ee",   "lock_sha256": "d22f45a878187f67fb5ffaa4d48da69f5c1bcc889d2e5fa59b822b14618552d1",   "install_exit": 0,   "build_exit": 0 }`.

### Remaining advisories

- `react-scripts`: high; requires dependency migration. 

Do not treat compatible lockfile updates as completion of the framework migrations above.
