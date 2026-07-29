# Quartz Group

A React + TypeScript + Vite marketing site for Quartz Group — an Epicor + RFID consultancy. Features a landing page, contact form with HubSpot integration, and a blog powered by Sanity.io.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Routing:** React Router
- **CMS:** Sanity.io
- **Forms:** HubSpot Forms API
- **Build Tool:** Vite

---

## Getting Started (Local Development)

### 1. Clone & Install

```bash
git clone <repo-url>
cd app
npm install
```

### 2. Start the Vite Dev Server

```bash
npm run dev
```

The site will be available at **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
```

Output goes to the `dist/` directory.

---

## Sanity Studio

The blog content is managed through Sanity Studio, which runs as a separate app in the `studio/` directory.

### 1. Install Studio Dependencies

```bash
cd studio
npm install
```

### 2. Configure Your Project ID

Make sure `studio/sanity.config.ts` and `studio/sanity.cli.ts` contain your actual Sanity project ID:

```ts
projectId: 'your-project-id',
dataset: 'production',
```

If you haven't created a Sanity project yet, run the interactive init:

```bash
cd studio
npx sanity@latest init
```

### 3. Start Sanity Studio

```bash
cd studio
npm run dev
```

Studio will be available at **http://localhost:3333**

### 4. Sanity Schemas

The studio includes two document types:

- **Post** — Blog posts with title, slug, author, main image, categories, excerpt, and rich text body
- **Author** — Authors with name, slug, image, and bio

### 5. Deploy Sanity Studio

```bash
cd studio
npm run deploy
```

This deploys the Studio to `https://quartztrack.sanity.studio` (configured via `studioHost` in `sanity.cli.ts`).

### 6. Add CORS Origin

For the frontend to fetch data from Sanity, add your dev server as an allowed origin:

**Via CLI:**
```bash
cd studio
npx sanity login
npx sanity cors add http://localhost:5173 --credentials
```

**Via Web UI:**
1. Go to [https://sanity.io/manage](https://sanity.io/manage)
2. Select your project → **API → CORS origins**
3. Add `http://localhost:5173` with **Allow credentials** checked

---

## Environment Notes

- The Sanity project ID is hardcoded in `src/lib/sanity.ts` and `studio/sanity.config.ts`. The project ID is public and safe to commit.
- The HubSpot portal ID and form GUID are hardcoded in `src/pages/Contact.tsx`.
- No environment variables are required for basic operation.

---

## Project Structure

```
├── src/
│   ├── components/       # shadcn/ui components + shared layout
│   ├── pages/            # Route pages (Home, Contact, Blog, BlogPost, Author)
│   ├── lib/              # Utils + Sanity client
│   ├── App.tsx           # Router setup
│   └── main.tsx          # Entry point
├── studio/               # Sanity Studio
│   ├── schemas/          # Post & Author schemas
│   ├── sanity.config.ts  # Studio config
│   └── sanity.cli.ts     # CLI config
├── public/               # Static assets
└── dist/                 # Build output
```
