'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAdmin } from '@/hooks/useAdmin';
import { Trash2, Edit, Loader2 } from 'lucide-react';

function Buttons({ facultyId }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const isAdmin = useAdmin();

    if (!isAdmin) return null;

    async function DeleteFaculty() {
        try {
            setIsDeleting(true);
            if (confirm('¿Estás seguro de eliminar esta facultad?')) {
                const res = await axios.delete(`/api/faculties/${facultyId}`);
                if (res.status === 204) {
                    await router.push('/faculties');
                    router.refresh();
                }
            }
        } catch (error) {
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
            <button
                className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white 
          bg-red-500 rounded-md shadow-sm transition duration-150 ease-in-out
          ${isDeleting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'}
        `}
                onClick={DeleteFaculty}
                disabled={isDeleting}
            >
                {isDeleting ? (
                    <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                        Eliminando...
                    </>
                ) : (
                    <>
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                    </>
                )}
            </button>

            <button
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white 
          bg-blue-500 rounded-md shadow-sm transition duration-150 ease-in-out
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => {
                    router.push(`/faculties/edit/${facultyId}`);
                    router.refresh();
                }}
            >
                <Edit className="w-4 h-4 mr-2" />
                Editar
            </button>
        </div>
    );
}

export default Buttons;
