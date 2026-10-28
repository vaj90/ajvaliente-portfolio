# AJ Valiente — Developer Portfolio

A Next.js portfolio showcasing selected projects, professional experience, and technical skills.

## Requirements

- Node.js 22 (Node.js 20.9+ is required by current Next.js releases; Node 22 is used in CI)
- npm
- A GitHub repository
- A Vercel project connected to this repository for production deployment

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

Run the same checks locally before pushing:

```bash
npm run lint
npm run build
```

## GitHub Actions CI/CD

The workflow lives at `.github/workflows/ci-cd.yml`.

- **Pull requests to `main` or `master`:** installs dependencies, runs ESLint, and builds the Next.js app.
- **Pushes to `main` or `master`:** runs the same checks, then deploys to Vercel production if the checks pass.
- **Manual run:** available from the repository's **Actions** tab via **Portfolio CI/CD → Run workflow**. The production deployment job still only runs for a push to `main` or `master`.

The workflow uses read-only repository permissions and does not deploy from pull requests. This avoids exposing deployment secrets to pull-request code. GitHub Actions secrets are never committed to the repository.

### Configure Vercel

1. Import this GitHub repository into [Vercel](https://vercel.com/new), or open the existing portfolio project in Vercel.
2. In the Vercel project settings, confirm the correct Git repository and production branch (`main` or `master`).
3. In Vercel, obtain the following values:
   - `VERCEL_TOKEN`: create a token in your Vercel account settings.
   - `VERCEL_ORG_ID`: the team/account ID shown in the project's `.vercel/project.json` after linking the project locally, or in the Vercel project settings.
   - `VERCEL_PROJECT_ID`: the project ID shown in `.vercel/project.json` after linking the project locally, or in the Vercel project settings.
4. If needed, retrieve the IDs locally from the project directory:

   ```bash
   npx vercel login
   npx vercel link
   # Select the correct Vercel account and portfolio project.
   # Then inspect .vercel/project.json for orgId and projectId.
   ```

5. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**. Add these three secrets exactly:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

   Paste the actual values into GitHub's secret fields. Do not put tokens or IDs directly into the YAML file, README, or source code.

6. Push the workflow to the repository's production branch. Open **Actions** in GitHub and review the run. A successful production job will deploy the site to Vercel.

### Push the workflow

If the project is already connected to the correct GitHub repository:

```bash
git status
git add .github/workflows/ci-cd.yml README.md
git commit -m "Add GitHub Actions CI/CD for Vercel"
git push origin HEAD
```

If your branch is `master`, the workflow supports it. It also supports `main`. The production deployment runs only when a commit is pushed directly to either branch after CI passes.

## Security notes

- Never commit `.env` files, Vercel tokens, or other secrets.
- Keep GitHub Actions permissions minimal; this workflow only grants `contents: read`.
- Pull requests run quality checks only. Production deployment secrets are used only by the protected push-triggered deployment job.
- Consider requiring pull-request review and successful Actions checks in GitHub branch protection settings.
- Review dependency and GitHub Action updates periodically.

## Project scripts

- `npm run dev` — local development server
- `npm run lint` — ESLint
- `npm run build` — production build
- `npm run start` — run the production build locally
