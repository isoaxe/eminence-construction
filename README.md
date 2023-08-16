# Eminence Construction

A website built to showcase the services rendered and projects undertaken by Eminence Construction. Design for [mobile](https://xd.adobe.com/view/60f97ae0-42da-4f3b-9c90-2d285b53e962-35aa/screen/9792aa3b-da1f-48de-a928-45388c40170a) and [desktop](https://xd.adobe.com/view/9e2bf655-5de2-4525-a0e6-37bb21e08916-cb78/screen/b6329ba4-aa4e-4081-af97-728fff74ac62) has been closely followed, with designs for intermediate screen sizes inferred from these.

Built with Next.js and Tailwind. Hosted with Vercel. See the `eminence-cms` sister site for the headless CMS built with Strapi that provides content data to this frontend.

Visit [localhost](http://localhost:3000) after running the `dev` or `start` commands below to view the app in the browser.

## Setup

### `npm install`

Clone or fork the project, then run the command from the project directory.

### `npm run env-var`

Pull the environment variables from Vercel and save locally to `.env.local` with this command. Need to install the Vercel CLI first. Used for working with the contact form and the Strapi CMS.

### `npm run dev`

Start the app locally in development mode.

### `npm run build && npm run start`

Run a fresh build and then start the app in production mode. Useful to do before deploying changes to ensure everything is working as expected.
