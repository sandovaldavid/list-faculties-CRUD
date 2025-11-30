'use client';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { UploadIcon, SaveIcon, ImageIcon, LoadingIcon } from '@/components/icons/AdminIcons';
import { CloseIcon } from '@/components/icons/NavigationIcons';
import { WarningIcon } from '@/components/icons/StatusIcons';

function FacultyForm() {
    const [faculty, setFaculty] = useState({ name: '', description: '', slug: '' });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [focused, setFocused] = useState({
        name: false,
        slug: false,
        description: false,
    });
    const [imagePreviewHover, setImagePreviewHover] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef();
    const fileInputRef = useRef();
    const router = useRouter();
    const params = useParams();

    // Cargar datos de la facultad si estamos en modo edición
    useEffect(() => {
        if (params.idFaculty) {
            setLoading(true);
            axios
                .get(`/api/faculties/${params.idFaculty}`)
                .then(res => {
                    setFaculty({
                        name: res.data.name,
                        slug: res.data.slug,
                        description: res.data.description,
                    });
                    if (res.data.cover_image_url || res.data.path_img) {
                        // Si tiene imagen, establecemos una bandera para mostrarla
                        setExistingImage(res.data.cover_image_url || res.data.path_img);
                    }
                })
                .catch(error => {
                    setError(error.response?.data?.message || 'Error loading faculty');
                })
                .finally(() => setLoading(false));
        }
    }, [params.idFaculty]);

    const [existingImage, setExistingImage] = useState(null);

    const handleFocus = field => {
        setFocused(prev => ({ ...prev, [field]: true }));
    };

    const handleBlur = field => {
        setFocused(prev => ({ ...prev, [field]: false }));
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFaculty(prev => ({
            ...prev,
            [name]: value,
        }));
        setError(null);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSubmitted(true);

        // Animar scroll al inicio del formulario en caso de error
        const scrollToTop = () => {
            window.scrollTo({
                top: formRef.current.offsetTop - 100,
                behavior: 'smooth',
            });
        };

        // Validate required fields
        if (!faculty.name?.trim()) {
            setError('Name is required');
            setLoading(false);
            scrollToTop();
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', faculty.name.trim());
            formData.append('slug', faculty.slug?.trim() || '');
            formData.append('description', faculty.description?.trim() || '');

            if (file) {
                // Validate file type and size
                if (!file.type.startsWith('image/')) {
                    setError('Please upload an image file');
                    setLoading(false);
                    scrollToTop();
                    return;
                }
                if (file.size > 5 * 1024 * 1024) {
                    // 5MB limit
                    setError('Image size should be less than 5MB');
                    setLoading(false);
                    scrollToTop();
                    return;
                }
                formData.append('facultyImage', file);
            }

            let response;
            if (params.idFaculty) {
                response = await axios.put(`/api/faculties/${params.idFaculty}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    validateStatus: function (status) {
                        return status < 500;
                    },
                });
            } else {
                response = await axios.post('/api/faculties', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                    validateStatus: function (status) {
                        return status < 500;
                    },
                });
            }

            if (response.status === 204 || response.status === 200 || response.status === 201) {
                router.push('/faculties');
                router.refresh();
            } else {
                throw new Error(response.data?.message || 'Unexpected response status');
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    err.message ||
                    'Error saving faculty. Please check your input and try again.'
            );
            scrollToTop();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 animate-pulse flex items-center rounded-md">
                    <WarningIcon className="w-5 h-5 mr-2 shrink-0" />
                    <p>{error}</p>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
                {/* Columna Principal: Información Básica */}
                <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm h-fit">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
                        Información General
                    </h2>

                    {/* Nombre de Facultad */}
                    <div className="relative">
                        <label
                            className={`absolute transition-all duration-300 ${
                                focused.name || faculty.name
                                    ? '-top-2.5 left-2 text-xs bg-white px-1 text-blue-600'
                                    : 'top-3 left-4 text-gray-500'
                            }`}
                        >
                            Nombre de la Facultad *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={faculty.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            required
                            className={`w-full px-4 py-3 border ${
                                submitted && !faculty.name
                                    ? 'border-red-500 bg-red-50'
                                    : 'border-gray-300 focus-visible:border-blue-500'
                            } rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-200`}
                        />
                        {submitted && !faculty.name && (
                            <p className="text-red-500 text-xs mt-1">Este campo es obligatorio</p>
                        )}
                    </div>

                    {/* Slug (URL Amigable) */}
                    <div className="relative">
                        <label
                            className={`absolute transition-all duration-300 ${
                                focused.slug || faculty.slug
                                    ? '-top-2.5 left-2 text-xs bg-white px-1 text-blue-600'
                                    : 'top-3 left-4 text-gray-500'
                            }`}
                        >
                            Slug (URL)
                        </label>
                        <input
                            type="text"
                            name="slug"
                            value={faculty.slug}
                            onChange={handleChange}
                            onFocus={() => handleFocus('slug')}
                            onBlur={() => handleBlur('slug')}
                            placeholder={focused.slug ? 'ej: ingenieria-industrial' : ''}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 focus:border-blue-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-200"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                            Identificador único para la URL. Déjalo vacío para generar uno
                            automáticamente.
                        </p>
                    </div>

                    {/* Descripción */}
                    <div className="relative">
                        <label
                            className={`absolute transition-all duration-300 ${
                                focused.description || faculty.description
                                    ? '-top-2.5 left-2 text-xs bg-white px-1 text-blue-600'
                                    : 'top-3 left-4 text-gray-500'
                            }`}
                        >
                            Descripción
                        </label>
                        <textarea
                            name="description"
                            value={faculty.description}
                            onChange={handleChange}
                            onFocus={() => handleFocus('description')}
                            onBlur={() => handleBlur('description')}
                            rows="6"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all duration-300 focus:border-blue-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-200 resize-y"
                        />
                        <div className="text-right text-xs text-gray-400 mt-1">
                            {faculty.description?.length || 0} caracteres
                        </div>
                    </div>
                </div>

                {/* Columna Lateral: Imagen y Acciones */}
                <div className="space-y-6">
                    {/* Panel de Imagen */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
                            Imagen Destacada
                        </h2>

                        <div className="space-y-4">
                            {/* Mostrar imagen existente si estamos en modo edición */}
                            {existingImage && !file && (
                                <div className="relative group">
                                    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200">
                                        <Image
                                            src={existingImage}
                                            alt="Imagen actual"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                type="button"
                                                onClick={() => setExistingImage(null)}
                                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                                            >
                                                <CloseIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2 text-center">
                                        Imagen actual
                                    </p>
                                </div>
                            )}

                            {/* Selector de archivo */}
                            <div
                                onClick={triggerFileInput}
                                className={`flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300 ${
                                    file
                                        ? 'border-blue-300 bg-blue-50'
                                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                                }`}
                            >
                                {file ? (
                                    <div className="text-center">
                                        <ImageIcon className="mx-auto h-12 w-12 text-blue-500 mb-2" />
                                        <p className="text-sm text-blue-600 font-medium truncate max-w-[200px]">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {(file.size / (1024 * 1024)).toFixed(2)} MB
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                                        <p className="text-sm text-gray-600 font-medium">
                                            Subir imagen
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            PNG, JPG hasta 5MB
                                        </p>
                                    </div>
                                )}
                                <input
                                    ref={fileInputRef}
                                    id="file-upload"
                                    name="facultyImage"
                                    type="file"
                                    className="sr-only"
                                    onChange={e => {
                                        if (e.target.files[0]) {
                                            setFile(e.target.files[0]);
                                            setExistingImage(null);
                                        }
                                    }}
                                    accept="image/*"
                                />
                            </div>

                            {/* Vista previa de la imagen seleccionada */}
                            {file && (
                                <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200">
                                    <Image
                                        src={URL.createObjectURL(file)}
                                        alt="Vista previa"
                                        fill
                                        className="object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setFile(null)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <CloseIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Panel de Acciones */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-4 mb-6">
                            Publicación
                        </h2>
                        <div className="flex flex-col gap-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm
                  ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700 hover:shadow'}
                  focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 flex items-center justify-center`}
                            >
                                {loading ? (
                                    <>
                                        <LoadingIcon className="animate-spin h-5 w-5 mr-2" />
                                        Procesando...
                                    </>
                                ) : (
                                    <>
                                        <SaveIcon className="w-4 h-4 mr-2" />
                                        {params.idFaculty
                                            ? 'Actualizar Facultad'
                                            : 'Crear Facultad'}
                                    </>
                                )}
                            </button>
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="w-full px-5 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition duration-300"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FacultyForm;
