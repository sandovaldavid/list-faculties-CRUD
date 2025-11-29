'use client';
import { useState, useEffect } from 'react';

export default function DisclaimerBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has dismissed the banner
        const isDismissed = localStorage.getItem('disclaimerDismissed');
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem('disclaimerDismissed', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-slide-in">
            <div className="bg-amber-50 border border-amber-200 rounded-lg shadow-lg p-4">
                <div className="flex items-start gap-3">
                    <svg
                        className="w-5 h-5 text-amber-600 shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div className="flex-1">
                        <p className="text-sm text-amber-800">
                            <span className="font-semibold">
                                Proyecto independiente no oficial.
                            </span>{' '}
                            Herramienta creada por estudiantes para estudiantes.
                        </p>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-amber-600 hover:text-amber-800 transition-colors shrink-0"
                        aria-label="Cerrar aviso"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
