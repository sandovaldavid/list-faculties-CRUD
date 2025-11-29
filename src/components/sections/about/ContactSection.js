export default function ContactSection() {
    return (
        <section className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-white">Contacto</h2>
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                Si tienes preguntas sobre este proyecto o estás interesado en trabajar conmigo, no
                dudes en contactarme a través de mis redes sociales o directamente por correo.
            </p>
            <div className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-8 py-3 rounded-md text-white font-medium hover-lift">
                <a href="mailto:contact@devsandoval.me">Enviar mensaje</a>
            </div>
        </section>
    );
}
