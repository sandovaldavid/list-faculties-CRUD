export default function robots() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mapa-unp.sandovaldavid.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/_vercel/', '/*.json$'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
