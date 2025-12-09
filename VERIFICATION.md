# MahaFresh Application Verification Guide

This guide outlines the steps to verify the functionality, security, and performance of the MahaFresh application.

## 1. Setup & Installation
Ensure all dependencies are installed and the development server is running.

```bash
yarn install
yarn run dev
```

## 2. Functional Verification

### A. Core Features
- [ ] **Hero Section**: Verify the page loads with the "Fresh from Maharashtra's Farms" banner and animations play smoothly.
- [ ] **Product Listing**: Scroll to the "Fresh Harvest" section.
    - [ ] **BirthPlace Check**: Confirm that each product card displays the **"BirthPlace: [Location]"** badge (e.g., "BirthPlace: Nashik") with a map pin icon.
    - [ ] **Pricing**: Ensure prices are displayed in INR (₹).
- [ ] **Cart Functionality**:
    - [ ] Click "Add to Cart" on a product.
    - [ ] Verify the cart sidebar opens automatically.
    - [ ] Increase and decrease quantity using the `+` and `-` buttons.
    - [ ] Verify the subtotal updates correctly.
    - [ ] Remove an item and ensure the cart updates.
- [ ] **Farmer Section**: Verify the "Are you a Farmer?" section exists at the bottom.

### B. Responsive Design
- [ ] **Mobile View**: Resize your browser window to mobile width (approx 375px).
    - [ ] Check that the navigation menu collapses into a "Hamburger" icon.
    - [ ] Click the hamburger icon to ensure the mobile menu expands.
    - [ ] Verify product grid adjusts to a single column.

## 3. Security Verification

### A. Content Security Policy (CSP)
- [ ] Open Browser Developer Tools (F12) -> **Elements** tab.
- [ ] Look inside the `<head>` tag.
- [ ] Verify the presence of the `<meta http-equiv="Content-Security-Policy" ...>` tag.
- [ ] **Test**: Try injecting a script in the console (e.g., `document.body.innerHTML = '<img src="http://malicious-site.com/image.jpg">'`). The browser console should log a CSP violation warning if it violates the policy.

### B. Reverse Tabnabbing Protection
- [ ] Scroll to the **Footer**.
- [ ] Inspect the social media links (Instagram/Facebook).
- [ ] Verify the `<a>` tags contain `rel="noopener noreferrer"`.
- [ ] This ensures the new tab cannot manipulate the original page.

### C. Clickjacking Protection
- [ ] Verify the existence of `netlify.toml` in the root directory.
- [ ] This file instructs the hosting provider (Netlify) to set `X-Frame-Options: DENY`.

## 4. Code Quality & Build Verification

### A. Linting
Run the following command to check for code style and potential errors:
```bash
yarn lint
```

### B. Production Build
Verify that the app builds successfully for production:
```bash
yarn build
```
If successful, you can preview the production build locally:
```bash
yarn preview
```
