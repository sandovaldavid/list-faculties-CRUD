import { FacultiesIcon } from '@/components/icons/NavigationIcons';
import WaveDecoration from '@/components/icons/WaveDecoration';

export default function FacultiesHero() {
    return (
        <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 py-20 md:py-28 text-white overflow-hidden h-screen">
            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-fade-in-up">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                            <FacultiesIcon className="w-12 h-12 text-white" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase">
                            Facultades
                        </h1>
                        <div className="w-24 h-1.5 bg-white/80 mx-auto rounded-full mb-6"></div>
                        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explora las diferentes facultades de la Universidad Nacional de Piura
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <WaveDecoration className="w-full h-24 md:h-36 text-gray-50" />
            </div>
        </div>
    );
}
