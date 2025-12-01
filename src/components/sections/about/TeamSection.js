import DeveloperIcon from '@/components/icons/DeveloperIcon';

export default function TeamSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Equipo de Desarrollo
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Conoce a las personas detrás de este proyecto.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-shadow duration-300">
                        <div className="w-32 h-32 rounded-full bg-blue-50 mx-auto mb-6 flex items-center justify-center relative overflow-hidden">
                            <DeveloperIcon className="w-16 h-16 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">David Sandoval</h3>
                        <p className="text-blue-600 font-medium mb-4">Desarrollador Full Stack</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Responsable del diseño y desarrollo completo del sistema. Especializado
                            en Next.js, React, TailwindCSS y desarrollo de APIs RESTful.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://devsandoval.me"
                                target="_blank"
                                className="px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-black transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                                rel="noopener noreferrer"
                            >
                                Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
