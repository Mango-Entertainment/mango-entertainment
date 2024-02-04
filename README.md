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

[![Next JS]][Next-js-url]
[![Tailwindcss]][Tailwind-url]
[![TypeScript]][TypeScript-url]

[![Supabase]][Supabase-url]
[![Postgres]][Postgres-url]

[![Clerk]][Clerk-url]

[![Vercel]][Vercel-url]


## Local Project Setup

<!-- BASIC REQUIREMENTS -->

Git, Node.js, and NPM are required to run this project locally.
You'll also have to have accounts at Vercel, Supabase, and Clerk.

### Clone the repo to your machine:

Copy this and run it in your terminal:

```bash
git clone https://github.com/Mango-Entertainment/mango-entertainment.git
cd mango-entertainment
npm install
```

At the root of the project, run this command in the terminal:`touch .env.local`.

In the .env you'll need these variables and the value will be specific to your Clerk account:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
NEXT_PUBLIC_CLERK_SIGN_UP_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL
```

#### Make an account on clerk.com
Once your account is created, click add application from your Clerk dashboard.

Look at the left hand side of your dashboard under developers. There's a button that says API Keys.

Copy your `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`.

In your .env.local, add the values for these variables:

1. `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` you copied

2. `NEXT_PUBLIC_CLERK_SIGN_IN_URL` equal to `sign-in`

3. `NEXT_PUBLIC_CLERK_SIGN_UP_URL` equal to `sign-up`

4. `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` equal to `/`

5. `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` equal to `/`

## Prisma setup

`npm install prisma --save-dev`

run this in your terminal

`npx prisma init`

Open the Docker app (install it if you don't have it).

Run this command `touch .env`

Add this to the `.env`

`DATABASE_URL="postgresql://postgres:password@localhost:5432/mango-entertainment"`

In the terminal run `./start-database.sh`

If you have trouble running this, it is likely due to permissions issues.

Try running this in your terminal `chmod 755 start-database.sh`

It should ask if you want to generate a new password, say yes.

As long as no other postgres db is running, the command from line 95 should start the container.

Run this command

```bash
mkdir -p prisma/migrations/0_init

npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

npx prisma migrate resolve --applied 0_init

npx prisma db push
```

The `npx prisma db push` should push your schema to PostgreSQL.

Now run

```bash
npm install @prisma/client

npx prisma generate

npx prisma db seed
```

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
[Next JS]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[Next-js-url]: https://www.nextjs.org

[Tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/

[TypeScript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/

[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/

[Postgres]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[Postgres-url]: https://www.postgresql.org/

[Clerk]: https://img.shields.io/badge/Clerk-6C47FF.svg?style=for-the-badge&logo=Clerk&logoColor=white
[Clerk-url]: https://clerk.com/

[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: vercel.com/
