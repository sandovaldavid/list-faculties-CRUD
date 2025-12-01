import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PageHeader({ title, description, backUrl }) {
    return (
        <div className="mb-8">
            {backUrl && (
                <Link
                    href={backUrl}
                    className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Volver
                </Link>
            )}
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
    );
}
