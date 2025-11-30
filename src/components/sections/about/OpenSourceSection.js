import LightbulbIcon from '@/components/icons/LightbulbIcon';
import { GitHubIcon } from '@/components/icons/SocialIcons';
import { DocumentTextIcon } from '@/components/icons/StatusIcons';

export default function OpenSourceSection() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-sm mb-8">
                    <LightbulbIcon className="w-10 h-10 text-yellow-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    Filosofía Open Source
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Este es un proyecto comunitario. Si tienes fotos actualizadas de los pabellones
                    o coordenadas GPS precisas, ¡tu contribución es bienvenida! Todo el código está
                    disponible bajo <strong>MIT License</strong>.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="https://github.com/dev-sandoval/faculties-web"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-black transition-all duration-300 ease-in-out rounded-full text-white font-medium hover:shadow-lg transform hover:-translate-y-1"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="w-5 h-5" />
                        <span>Ver Código Fuente</span>
                    </a>
                    <a
                        href="https://github.com/dev-sandoval/faculties-web/blob/main/LICENSE"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 transition-all duration-300 ease-in-out rounded-full font-medium hover:shadow-md transform hover:-translate-y-1"
                        rel="noopener noreferrer"
                    >
                        <DocumentTextIcon className="w-5 h-5 text-gray-500" />
                        <span>Licencia MIT</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
