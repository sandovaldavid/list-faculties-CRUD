import Link from 'next/link';
import { Home, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center animate-fade-in">
            <div className="bg-grid-pattern absolute inset-0 -z-10 opacity-50" />

            <div className="space-y-6 max-w-md mx-auto">
                <div className="relative inline-block animate-scale-in">
                    <h1 className="text-9xl font-black text-gray-200 select-none">404</h1>
                </div>

                <div className="space-y-2 animate-fade-in-up">
                    <h2 className="text-3xl font-bold text-gray-900">Página no encontrada</h2>
                    <p className="text-gray-600 text-lg">
                        Lo sentimos, la página que estás buscando no existe o ha sido movida.
                    </p>
                </div>

                <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 gap-2"
                    >
                        <Home className="w-5 h-5" />
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
