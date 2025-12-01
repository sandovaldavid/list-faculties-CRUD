import Link from 'next/link';
import SearchBar from '@/components/faculty/SearchBar';
import { Building2, Plus } from 'lucide-react';

export default function FacultiesToolbar({ initialQuery, facultiesCount, isAdmin }) {
    return (
        <div className="container mx-auto px-4 py-8 bg-white shadow-sm rounded-lg mt-2 mb-8 relative z-10 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                {/* Search Bar */}
                <SearchBar initialQuery={initialQuery} />

                {/* Stats and Actions */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <div className="flex items-center">
                        <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <span className="text-gray-700 font-medium">
                            {facultiesCount === 0
                                ? 'No hay facultades'
                                : `${facultiesCount} Facultade${facultiesCount !== 1 ? 's' : ''}`}
                        </span>
                    </div>

                    {isAdmin && (
                        <Link
                            href="/new"
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                            <Plus className="w-5 h-5 mr-2" />
                            <span className="hidden sm:inline">Nueva Facultad</span>
                            <span className="sm:hidden">Nueva</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
