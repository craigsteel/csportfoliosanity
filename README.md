# [Craig Parfitt - Portfolio Headless CMS](https://www.craigparfitt.com/).
<https://www.craigparfitt.com>

## This is the backend.
Built With [SanityStudio](https://www.sanity.io/).
A content management system.

The front end is located at [GitHub](https://github.com/craigsteel/csportfolio.git)
and is built using [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The front and backend are both deployed and hosted with [vercel.com](https://vercel.com/).
## Getting Started.

Create `.env.development` file in root folder with values of:

```javascript
SANITY_STUDIO_PROJECT_URL=YOUR_URL // e.g. http://localhost:3000
SANITY_STUDIO_PREVIEW_SECRET=YOUR_SECRET// unique string
```

Run the development server:

```bash
npm run start
# or
yarn start
```

For Mor Information:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
