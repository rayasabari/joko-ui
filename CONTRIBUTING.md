# Contributing Guide

Thank you for your interest in contributing 🎉

This project uses **`development` as the contribution target branch**. The `main` branch is **production-only** and protected by automation.

Please follow the guidelines below to keep the review and deployment process safe and smooth.

---

## 📌 Branching Strategy

- `main` → **Production (auto-deployed on Vercel)**
- `development` → **Preview / Staging**

👉 **All Pull Requests MUST target the `development` branch**.

---

## 🧾 Pull Request Template

When opening a Pull Request, GitHub will automatically provide a Pull Request template.

Please make sure:
- All sections in the template are filled out
- The checklist is completed before requesting a review

Pull Requests with incomplete templates may be asked to update before review.

---

## 🚀 How to Contribute

### 1️⃣ Fork the Repository
Click the **Fork** button on GitHub to create a copy of this repository under your account.

---

### 2️⃣ Create a Branch in Your Fork
You may use any branch name, but the following conventions are **recommended**:

```bash
feature/short-description
fix/short-description
docs/short-description
```

Example:
```bash
git checkout -b feature/improve-button-style
```

---

### 3️⃣ Make Your Changes
- Follow the existing code style and conventions
- Run the project locally
- Make sure the build passes without errors

> [!NOTE] 
> If your changes are adding new components, variants, or categories, please read [Adding Components Guide](ADDING_COMPONENTS.md).

---

### 4️⃣ Commit Message Convention (REQUIRED)

This project follows **Conventional Commits** to keep history clean and readable.

**Format:**
```txt
type: short description
```

**Common types:**
- `feat` – new feature
- `fix` – bug fix
- `docs` – documentation only changes
- `style` – formatting, no logic change
- `refactor` – code change that neither fixes a bug nor adds a feature
- `test` – adding or fixing tests
- `chore` – tooling, config, maintenance

**Examples:**
```txt
feat: add new variant for button components
fix: prevent redirect loop
docs: update contributing guide
```

❗ Commits that do not follow this convention may be requested to be fixed before merge.

---

### 5️⃣ Push to Your Fork
```bash
git push origin feature/improve-button-style
```

---

### 6️⃣ Open a Pull Request
When creating a Pull Request:
- **Base branch**: `development`
- **Compare branch**: your fork branch


Pull Requests targeting `main` **will be rejected or asked to retarget**.

---

## 🔍 Review Process

After opening a PR:
- CI checks will run (lint / test / build)
- Maintainers will:
  - Review the code
  - Check the **Vercel Preview Deployment**
  - (Optional) Test the branch locally

If changes are requested, please push updates to the same branch.

---

## 🧪 Vercel Preview Deployment

Each Pull Request will have a **Preview URL** on Vercel.

⚠️ For PRs from forks:
- Preview deployments require **manual authorization by a maintainer** (security reason)
- Once approved, the preview link will appear in the PR

---

## ✅ Before Submitting a PR

Please make sure:
- [ ] Code is tested locally
- [ ] Lint and build pass
- [ ] UI / styles are visually checked
- [ ] Commit messages follow the convention
- [ ] No unrelated changes are included

### Keeping Your Fork Up to Date

If the main repository has new changes or refactors,
please update your fork instead of re-forking.

1. Add upstream remote
```
git remote add upstream https://github.com/rayasabari/joko-ui.git
git fetch upstream
```
2. Rebase your branch onto the latest `development`
```
git checkout development
git pull upstream development
git checkout feature/add-button-variant
git rebase development
```
3. Resolve conflicts if any
4. Push updates to your fork

Re-forking is only recommended as a last resort.

---

## 📦 Merge Flow (Maintainers Only)

```txt
PR → development (preview) → main (production)
```

Contributors **do not need to interact with the `main` branch**.

---

## 💬 Need Help?

If you are unsure or need guidance:
- Open an **Issue**, or
- Ask directly in the Pull Request

We truly appreciate your contribution 🙌

Happy coding! 🚀

