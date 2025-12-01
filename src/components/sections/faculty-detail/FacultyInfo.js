import Buttons from '@/components/ui/buttons';
import { Info, User, MapPin } from 'lucide-react';

export default function FacultyInfo({ faculty }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Columna Principal: Descripción */}
                    <div className="lg:w-2/3 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <span className="bg-blue-100 p-2 rounded-lg mr-3">
                                    <Info className="w-6 h-6 text-blue-600" />
                                </span>
                                Sobre la Facultad
                            </h2>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p className="leading-relaxed">
                                    {faculty.description ||
                                        'No hay descripción disponible para esta facultad. La descripción incluiría información sobre programas académicos, misión educativa, visión e historia.'}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Buttons facultyId={faculty.id} />
                        </div>
                    </div>

                    {/* Columna Lateral: Info Adicional */}
                    <div className="lg:w-1/3">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">
                                Información Rápida
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-blue-600">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-medium text-gray-500 mb-1">
                                            Decano/a
                                        </span>
                                        <p className="font-semibold text-gray-900">
                                            {faculty.dean_name || 'Información no disponible'}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-lg shadow-sm mr-4 text-blue-600">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-medium text-gray-500 mb-1">
                                            Ubicación
                                        </span>
                                        <p className="font-semibold text-gray-900">
                                            Campus Universitario
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
