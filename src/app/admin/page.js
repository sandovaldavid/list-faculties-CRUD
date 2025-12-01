import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Admin Login - Facultades UNP',
};

export default function AdminLoginPage() {
    async function login(formData) {
        'use server';

        const password = formData.get('password');
        const correctPassword = process.env.ADMIN_PASSWORD || 'demo123';

        if (password === correctPassword) {
            const cookieStore = await cookies();
            cookieStore.set('admin_access', 'true', {
                path: '/',
                httpOnly: false, // Allow client-side access for UI logic
                maxAge: 60 * 60 * 24, // 1 day
            });
            redirect('/faculties');
        } else {
            // In a real app we'd handle errors better, but for this demo redirecting back is fine
            redirect('/admin?error=true');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Acceso Administrativo
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ingresa la contraseña para gestionar facultades
                    </p>
                </div>
                <form className="mt-8 space-y-6" action={login}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Contraseña"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Ingresar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
