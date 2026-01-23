# Portfolio (Monorepo)

This repository contains a React frontend (`frontend/`) and an Express backend (`backend/`). It is prepared for deployment to Vercel as a monorepo: the frontend is served as static files and backend routes are converted to serverless functions under `api/`.

Quick local development
- Start both frontend and backend (development):

```bash
npm run dev
```

This runs the Vite dev server for the frontend and the backend server locally.

Production / Vercel (recommended)
1. Build and test locally:

```bash
npm run build
npm start
```

2. Deploy to Vercel (monorepo):
   - Push your repo to GitHub (or other git provider).
   - In Vercel, import the repo and select the root of the project.
   - Add the following Environment Variable in Vercel dashboard (Project Settings -> Environment Variables):
     - `DATABASE_URL` = your database connection string (do NOT commit this to the repo).
   - Deploy. Vercel will:
     - Build `frontend` using `frontend/package.json` and output to `dist`.
     - Deploy `api/*.js` as serverless functions available at `/api/*`.

Files added for Vercel
- `api/` — serverless handlers for `projects` and `skills` and `db` connector.
- `vercel.json` — build and route configuration for the monorepo.

Notes and warnings
- Keep `.env` out of source control. Use `.env.example` as a template.
- `DATABASE_URL` must be set in Vercel for serverless functions to connect to your DB.
- If you prefer to host the Express server elsewhere (Render, Railway, Fly), you can deploy frontend to Vercel and point `frontend/src/api.js` to the backend URL.

If you want, I can also:
- Add automated migration scripts (run-once) for DB initialization.
- Convert additional backend endpoints or any POST/PUT handlers into serverless functions.

Database initialization (serverless)

To initialize the database tables the repository includes a protected serverless endpoint: `POST /api/init-db`.

- Set `INIT_SECRET` in Vercel (and locally in `.env`) to a random secret value.
- Call the endpoint once after deployment:

```bash
curl -X POST "https://<your-deployment>.vercel.app/api/init-db" -H "x-init-secret: $INIT_SECRET"
```

The endpoint runs the CREATE TABLE IF NOT EXISTS statements for `projects` and `skills`. Keep `INIT_SECRET` private and remove or rotate it after use if desired.
