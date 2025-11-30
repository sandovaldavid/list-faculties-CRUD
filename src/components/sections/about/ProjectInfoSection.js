import TargetIcon from '@/components/icons/TargetIcon';
import GearIcon from '@/components/icons/GearIcon';
import RefreshIcon from '@/components/icons/RefreshIcon';

export default function ProjectInfoSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="grid gap-8">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <TargetIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Ubicación Rápida
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Encuentra fácilmente la ubicación de tu facultad y pabellón
                                        en el campus universitario.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <GearIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Enlaces Oficiales
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Accede directamente a las páginas web oficiales de cada
                                        escuela para trámites y mallas curriculares.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                    <RefreshIcon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Mapa Interactivo
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Próximamente podrás visualizar geoespacialmente cada
                                        pabellón con Mapbox/Leaflet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Directorio y Mapa Universitario
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Esta plataforma nace para resolver el problema de la dispersión de
                            información en el campus. Centralizamos los datos de las 14 facultades
                            para que puedas ubicarte y conectar con tu escuela al instante.
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                ¿Qué puedes hacer aquí?
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-600">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Buscar facultades y escuelas
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Ver fotos de los pabellones
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                    Ir a los sitios web oficiales
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
