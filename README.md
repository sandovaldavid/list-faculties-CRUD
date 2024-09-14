This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# Archivo .env. agregar las siguientes lineas:
## Modificas las variables de entorno con tus credenciales de Cloudinary y de tu base de datos
```
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DATABASE=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dfs757coe
CLOUDINARY_CLOUD_NAME=dfs757coe
CLOUDINARY_API_KEY=859499136241997
CLOUDINARY_API_SECRET=OWw94SlzUVUWhClrcJlowdg9Vc4
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
## Create Docker Container
```bash
docker run --name list_Facultades -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=facultades -e MYSQL_USER=adm -e MYSQL_PASSWORD=adm -p 3306:3306 -d mysql:8.0 --default-authentication-plugin=mysql_native_password
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
