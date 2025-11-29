import TargetIcon from '@/components/icons/TargetIcon';
import GearIcon from '@/components/icons/GearIcon';
import RefreshIcon from '@/components/icons/RefreshIcon';

export default function ProjectInfoSection() {
    return (
        <section className="mb-16 bg-gray-50 p-8 rounded-lg animate-fade-in border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Sistema de Gestión de Facultades
            </h2>
            <p className="text-gray-700 mb-6">
                Una solución web moderna que demuestra la aplicación de arquitecturas escalables y
                buenas prácticas de desarrollo. El sistema proporciona una forma eficiente de
                gestionar la información de las facultades de la Universidad Nacional de Piura,
                priorizando la experiencia del usuario y el rendimiento.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">Arquitectura Técnica</h3>
            <p className="text-gray-700 mb-6">
                Construido sobre una arquitectura <strong>Serverless</strong> para garantizar
                escalabilidad automática y costos optimizados. Utilizamos{' '}
                <strong>Next.js App Router</strong> para aprovechar Server Components, optimizar el
                SEO mediante renderizado del lado del servidor, y mejorar la carga inicial de la
                aplicación. La base de datos relacional está <strong>normalizada</strong> para
                manejar eficientemente la jerarquía compleja entre Facultades, Escuelas
                Profesionales y sus relaciones.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-lift">
                    <TargetIcon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Objetivo</h3>
                    <p className="text-gray-700">
                        Facilitar la administración de las facultades universitarias mediante un
                        sistema CRUD intuitivo y eficiente, demostrando buenas prácticas de
                        desarrollo.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-lift">
                    <GearIcon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Stack Tecnológico</h3>
                    <p className="text-gray-700">
                        Next.js 14 con App Router, TailwindCSS para diseño responsive, MySQL para
                        persistencia de datos, y Vercel para deployment continuo.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover-lift">
                    <RefreshIcon className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Funcionalidades</h3>
                    <p className="text-gray-700">
                        Creación, visualización, actualización y eliminación de facultades, con
                        gestión de imágenes optimizadas y validación de datos en tiempo real.
                    </p>
                </div>
            </div>
        </section>
    );
}
