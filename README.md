<a id="top"></a>
<div align="center">
  <img src="./public/mango-logo.png" style="height:150px" />
  <h3 align="center">Mango Entertainment</h3>

  <p align="center">
    Bienvenue! 
    <br />
    <a href="https://mango-entertainment.vercel.app/">Checkout Mango Entertainment</a>
    ·
    <a href="https://github.com/Mango-Entertainment/mango-entertainment/issues">Report Bug</a>
  </p>
</div>

## Table of Contents

[About](#about) |
[Screenshots](#screenshots) |
[Built With](#built-with) |
[Local Project Setup](#local-project-setup) |
[Clone the repo](#clone-the-repo) |
[Make a Clerk account](#make-a-clerk-account) |
[Run app in a container](#run-app-in-a-container) |
[Prisma Setup](#prisma-setup) |
[Run the Project](#run-the-project) |
[Entity Relationship Diagram](#entity-relationship-diagram-database-schema) |
[Contact](#contact)

## About

Mango Entertainment allows you to curate the ripest mix of entertainment. TV series, movies, your favorite titles come to fruition! Create an account, checkout the catalogue, and rock on with your 🥭!

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Screenshots

<style>
.grid-container {
  display: grid;
  
  justify-content: space-around;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
  }
}

</style>

<div class="grid-container">
    <img src="./public/main-homepage.png"  />
    <img src="./public/selection-example.png"  />
</div>

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Built With

[![TypeScript]][TypeScript-url] [![Next JS]][Next-js-url] [![Tailwindcss]][Tailwind-url]
[![Postgres]][Postgres-url] [![Prisma]][Prisma-url] [![tRPC]][tRPC-url]
[![Clerk]][Clerk-url] [![Vercel]][Vercel-url] [![Docker]][Docker-url]

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Local Project Setup

<!-- BASIC REQUIREMENTS -->

Git, Node.js, and PNPM are required to run this project locally.
VSCode is required for setting up the dev container.
You'll also have to have an account at Clerk.

### Clone the repo

Copy this and run it in your terminal:

```bash
git clone https://github.com/Mango-Entertainment/mango-entertainment.git
cd mango-entertainment
pnpm install
```

At the root of the project, run this command in the terminal:`touch .env.local .env`.

### Make a [Clerk](https://clerk.com/) account

Once your account is created, click add application from your Clerk dashboard.

Look at the left hand side of your dashboard under developers. There's a button that says API Keys. Copy those keys and paste them in `.env.local`.

Then copy and paste this into `.env.local`:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_KEY>
CLERK_SECRET_KEY=<YOUR_SECRET>
```

Then copy and paste this into `.env`:

```bash
POSTGRES_PRISMA_URL=postgres://postgres:postgres@localhost:5432/postgres
POSTGRES_URL_NON_POOLING=postgres://postgres:postgres@localhost:5432/postgres
```

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Run app in a container

Make sure you have Docker installed, the Docker daemon running, and the [remote containers extension][dev-container-extension-url] for VSCode. If you open this folder in VSCode, it should ask you to open it in a container. Choose reopen in container.

For more info about developing inside a container, [check this out][container-info-url].

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Prisma setup

Run these terminal commands:

```bash
npx prisma migrate dev
npx prisma db seed
```

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Run the project

Now you're ready to run the project! Run `pnpm dev`.

This runs the project on port 3000.

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Entity Relationship Diagram (database schema)

Our database has three tables: users, bookmarks, and user-bookmarks.
  <div align="center">
    <img src="./public/prisma-erd.svg" style="height:350px" />
  </div>

<div style='text-align:right;'>

[Back to Top](#top)

</div>

## Contact

<div align='center'>
Steve Smodish

[![LinkedIn-shield]][steve-linkedin-url][![GitHub-shield]][steve-github-url]

</div>
<div align='center'>
Alex Curtis-Slep

[![LinkedIn-shield]][alex-linkedin-url][![GitHub-shield]][alex-github-url]

</div>

<div style='text-align:right;'>

[Back to Top](#top)

</div>

<!-- personal links -->

<!-- [alex-linkedin-shield]: https://img.shields.io/badge/-Alex's_LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555 -->

[alex-linkedin-url]: https://www.linkedin.com/in/alexcurtisslep/
[alex-github-url]: https://github.com/AlexVCS

<!-- [steve-linkedin-shield]: https://img.shields.io/badge/-Steve's_LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555 -->

[steve-linkedin-url]: https://www.linkedin.com/in/stevesmodish/
[steve-github-url]: https://github.com/ssmodish
[GitHub-shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[LinkedIn-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white

<!-- Technology shields and links -->

[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Next JS]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[Next-js-url]: https://www.nextjs.org
[Tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/
[Prisma]: https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[tRPC]: https://img.shields.io/badge/tRPC-2596BE?logo=trpc&logoColor=fff&style=for-the-badge
[tRPC-url]: https://trpc.io/
[Clerk]: https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white
[Clerk-url]: https://clerk.com/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: vercel.com/
[Docker]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[dev-container-extension-url]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
[container-info-url]: https://code.visualstudio.com/docs/devcontainers/containers
