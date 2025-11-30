import WaveDecoration from '@/components/icons/WaveDecoration';

export default function AboutHero() {
    return (
        <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 py-20 md:py-28 text-white overflow-hidden h-screen">
            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24 z-10 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-blue-800/50 rounded-full mb-6 backdrop-blur-sm border border-blue-400/30 animate-fade-in-up">
                    <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase">
                        Proyecto Open Source
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in-up animation-delay-100">
                    Tu Guía en el <span className="text-blue-300">Campus UNP</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up animation-delay-200">
                    La herramienta definitiva para ubicar tu escuela, encontrar tu pabellón y
                    acceder a recursos académicos en la Universidad Nacional de Piura.
                </p>
                <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scale-x animation-delay-300"></div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <WaveDecoration className="w-full h-24 md:h-36 text-white" />
            </div>
        </div>
    );
}
