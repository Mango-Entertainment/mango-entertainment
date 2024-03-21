<div align="center">
  <a href="https://github.com/grammerjam/tm-main/tree/main/project3C">
    <img src="./public/mango-entertainment.png" style="height:350px" />
  </a>

  <h3 align="center">Mango Entertainment</h3>

  <p align="center">
    Bienvenue! 
    <br />
    <a href="https://mango-entertainment.vercel.app/">Checkout Mango Entertainment</a>
    ·
    <a href="https://github.com/Mango-Entertainment/mango-entertainment/issues">Report Bug</a>
  </p>
</div>

## About Mango Entertainment

Mango Entertainment allows you to curate the ripest mix of entertainment. TV series, movies, your favorite titles come to fruition! Create an account, checkout the catalogue, and rock on with your 🥭!

### Built With

[![TypeScript]][TypeScript-url][![Next JS]][Next-js-url][![Tailwindcss]][Tailwind-url]

[![Postgres]][Postgres-url][![Prisma]][Prisma-url][![tRPC]][tRPC-url]

[![Clerk]][Clerk-url][![Vercel]][Vercel-url][![Docker]][Docker-url]

## Local Project Setup

<!-- BASIC REQUIREMENTS -->

Git, Node.js, and PNPM are required to run this project locally.
VSCode is required for setting up the dev container.
You'll also have to have an account at Clerk.

### Clone the repo to your machine:

Copy this and run it in your terminal:

```bash
git clone https://github.com/Mango-Entertainment/mango-entertainment.git
cd mango-entertainment
pnpm install
```

At the root of the project, run this command in the terminal:`touch .env.local .env`.

#### Make an account on [clerk.com](https://clerk.com/)
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

## Run app in a container

Make sure you have Docker installed, the Docker daemon running, and the [remote containers extension][dev-container-extension-url] for VSCode. If you open this folder in VSCode, it should ask you to open it in a container. Choose reopen in container.

For more info about developing inside a container, [check this out][container-info-url].

## Prisma setup

Run these terminal commands:

```bash
npx prisma migrate dev
npx prisma db seed
```

## Run the project

Now you're ready to run the project! Run `pnpm dev`.

This runs the project on port 3000.

## Contact

<div align='center'>
Steve Smodish

[![LinkedIn-shield]][steve-linkedin-url][![GitHub-shield]][steve-github-url]

</div>
<div align='center'>
Alex Curtis-Slep

[![LinkedIn-shield]][alex-linkedin-url][![GitHub-shield]][alex-github-url]

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