import DeveloperIcon from '@/components/icons/DeveloperIcon';

export default function TeamSection() {
    return (
        <section className="mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-white text-center">Equipo de Desarrollo</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
                <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center hover-lift">
                    <div className="w-24 h-24 rounded-full bg-zinc-700 mx-auto mb-4 flex items-center justify-center">
                        <DeveloperIcon className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white">David Sandoval</h3>
                    <p className="text-blue-600 mb-2">Desarrollador Full Stack</p>
                    <p className="text-gray-100 text-sm">
                        Responsable del diseño y desarrollo completo del sistema. Especializado en
                        Next.js, React, TailwindCSS y desarrollo de APIs RESTful.
                    </p>
                    <div className="mt-4">
                        <a
                            href="https://devsandoval.me"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-500 transition-colors"
                            rel="noopener noreferrer"
                        >
                            devsandoval.me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
