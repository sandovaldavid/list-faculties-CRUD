'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchIcon from '@/components/icons/SearchIcon';
import { CloseIcon } from '@/components/icons/NavigationIcons';

export default function SearchBar({ initialQuery = '' }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchValue, setSearchValue] = useState(initialQuery);

    // Sync with URL changes
    useEffect(() => {
        const query = searchParams.get('q') || '';
        setSearchValue(query);
    }, [searchParams]);

    const handleSearch = value => {
        setSearchValue(value);

        // Update URL with search query
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('q', value);
        } else {
            params.delete('q');
        }

        router.push(`/faculties?${params.toString()}`, { scroll: false });
    };

    const handleClear = () => {
        setSearchValue('');
        router.push('/faculties', { scroll: false });
    };

    return (
        <div className="relative flex-1 max-w-2xl">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder="Buscar facultades o escuelas..."
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus-visible::ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors duration-200"
                />
                {searchValue && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Limpiar búsqueda"
                    >
                        <CloseIcon className="h-5 w-5" />
                    </button>
                )}
            </div>
            {searchValue && (
                <p className="mt-2 text-sm text-gray-500">
                    Buscando: <span className="font-medium text-gray-700">{searchValue}</span>
                </p>
            )}
        </div>
    );
}
