export default function FacultiesHero() {
    return (
        <div className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 py-20 md:py-28 text-white overflow-hidden h-screen">
            {/* Content */}
            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="animate-fade-in-up">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                            <svg
                                className="w-12 h-12 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 uppercase">
                            Facultades
                        </h1>
                        <div className="w-24 h-1.5 bg-white/80 mx-auto rounded-full mb-6"></div>
                        <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Explora las diferentes facultades de la Universidad Nacional de Piura y
                            conoce su información académica.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg
                    className="w-full h-24 md:h-36 text-gray-50"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5,73.84,4.36,147.54-16.88,218.2-35.26,69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34,92.64,30.79,216.15,70.08,303,3.32V120Z"
                    ></path>
                </svg>
            </div>
        </div>
    );
}
