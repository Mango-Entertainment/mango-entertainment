<!-- [![alex-linkedin-shield]][alex-linkedin-url]
[![steve-linkedin-shield]][steve-linkedin-url] -->

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

[![Postgres]][Postgres-url][![Prisma]][Prisma-url]

[![Clerk]][Clerk-url][![Vercel]][Vercel-url][![Docker]][Docker-url]

## Local Project Setup

<!-- BASIC REQUIREMENTS -->

Git, Node.js, and PNPM are required to run this project locally.
You'll also have to have an account at Clerk.

### Clone the repo to your machine:

Copy this and run it in your terminal:

```bash
git clone https://github.com/Mango-Entertainment/mango-entertainment.git
cd mango-entertainment
npm install
```

At the root of the project, run this command in the terminal:`touch .env.local`.

#### Make an account on [clerk.com](https://clerk.com/)
Once your account is created, click add application from your Clerk dashboard.

Look at the left hand side of your dashboard under developers. There's a button that says API Keys. Copy those keys and paste them in `.env.local`.

Then copy and paste this into `.env.local`:

```bash
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

## Docker setup

Open the Docker app ([install it](https://www.docker.com/products/docker-desktop/) if you don't have it).

Create a file at the root of the project by running `touch .env`.

Add this to `.env`:
```bash
POSTGRES_HOST=127.0.0.1
POSTGRES_PORT=6500
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password123
POSTGRES_DB=trpc_prisma

POSTGRES_PRISMA_URL=postgresql://postgres:password123@localhost:6500/trpc_prisma
POSTGRES_URL_NON_POOLING=postgresql://postgres:password123@localhost:6500/trpc_prisma

PGADMIN_DEFAULT_EMAIL=admin@admin.com
PGADMIN_DEFAULT_PASSWORD=password123

PORT=3000
```

In the terminal run `docker-compose up -d`

## Prisma setup

Run this terminal command:

`npx prisma migrate dev`

## Run the project

Now you're ready to run the project! Run `npm run dev`.

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

[Clerk]: https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white
[Clerk-url]: https://clerk.com/

[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: vercel.com/

[Docker]: https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/