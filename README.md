# Jeffrey Pearce - Professional Portfolio

This is the source code for Jeffrey Pearce's professional portfolio website. It's built with Next.js, React, and Shadcn UI, and is hosted on Vercel.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Deployment

This project is set up for automatic deployment to Vercel when changes are pushed to the main branch.

### Setting up Vercel Deployment

1. Sign up for a Vercel account if you haven't already.
2. Install the Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory and follow the prompts to link your project.
4. Set up environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_EMAIL`
   - `NEXT_PUBLIC_PHONE`

### GitHub Actions

UPDATE: you no longer need to set up GitHub Actions. You can simply connect your GitHub repository to Vercel and it will handle the deployment.

This project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/deploy.yml`.

To set up:

1. Go to your GitHub repository settings.
2. Navigate to "Secrets and variables" > "Actions".
3. Add the following secrets:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [v0.dev](https://v0.dev/)

## Environment Variables

Copy `.env.example` to `.env.local` and update the values.

## Author

Jeffrey Pearce

Last Updated: 23 April 2025
