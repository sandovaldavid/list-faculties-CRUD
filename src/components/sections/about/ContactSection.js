export default function ContactSection() {
    return (
        <section className="py-20 bg-blue-900 text-white">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para colaborar?</h2>
                <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Si tienes preguntas sobre este proyecto o estás interesado en trabajar conmigo,
                    no dudes en contactarme.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:contact@devsandoval.me"
                        className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Enviar Mensaje
                    </a>
                    <a
                        href="https://devsandoval.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        Ver Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
}
