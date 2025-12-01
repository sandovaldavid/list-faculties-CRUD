import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { generateBasicMetadata, THEME_COLOR } from '@/libs/seoConfig';
import { Analytics } from '@vercel/analytics/next';

export const metadata = generateBasicMetadata('home');

export default function RootLayout({ children }) {
    return (
        <html lang="es" className="in-polypane">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="color-scheme" content="light only"></meta>
                <meta name="theme-color" content={THEME_COLOR}></meta>
            </head>
            <body className="font-sans">
                <Navbar />
                <main className="w-full">{children}</main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
