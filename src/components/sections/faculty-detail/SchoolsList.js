import SchoolCard from '@/components/faculty/SchoolCard';

export default function SchoolsList({ schools }) {
    if (!schools || schools.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Escuelas Profesionales
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {schools.map(school => (
                        <SchoolCard key={school.id} school={school} />
                    ))}
                </div>
            </div>
        </section>
    );
}
