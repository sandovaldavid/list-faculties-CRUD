'use client';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useAdmin() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const adminCookie = Cookies.get('admin_access');
        setIsAdmin(!!adminCookie);
    }, []);

    return isAdmin;
}
