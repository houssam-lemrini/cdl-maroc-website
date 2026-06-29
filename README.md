# CDL-Maroc Website

Premium static vitrine website for CDL-Maroc Paie, a Windows desktop payroll management app for Moroccan companies.

## Local Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Production Build

```powershell
npm run build
```

The production files are generated in `dist`.

## Configure Download URL

Edit `src/config.ts`:

```ts
export const release = {
  version: "v4.0.0",
  downloadUrl:
    "https://github.com/houssam-lemrini/cdl-maroc-website/releases/download/v4.0.0/CDL-Maroc.Paie.Setup.1.0.0.exe",
};
```

When a new GitHub Release is ready, update the version, file size, release date, download URL, and release notes URL in `src/config.ts`.

## Cloudflare Pages

Use these settings:

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
```

Recommended hosting setup:

- Cloudflare Pages for the website
- GitHub Releases for `CDL-Maroc-Paie-Setup.exe`

Do not commit the `.exe` installer to this repository. GitHub blocks normal repository files above 100 MiB, and the installer belongs in Releases.
