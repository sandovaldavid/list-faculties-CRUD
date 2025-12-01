'use client';
import { useState, useEffect } from 'react';
import { WarningIcon } from '@/components/icons/StatusIcons';
import { CloseIcon } from '@/components/icons/NavigationIcons';

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
                    <WarningIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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
                        <CloseIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
