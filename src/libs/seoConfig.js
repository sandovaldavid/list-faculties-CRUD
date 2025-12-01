// Configuración SEO centralizada
const SITE_URL = 'https://mapa-unp.devsandoval.me';
const SITE_NAME = 'UNP Campus Map | Directorio Universitario';
const DEFAULT_DESCRIPTION =
    'Herramienta de navegación y mapa interactivo para ubicar facultades, escuelas y pabellones en el campus de la Universidad Nacional de Piura.';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/og-faculties-unp.png`;
const AUTHOR = 'David Sandoval';
const TWITTER_HANDLE = '@dev_sandoval';
const LOCALE = 'es_PE';
const THEME_COLOR = '#1e3a8a';

// Configuración para páginas específicas
const PAGE_METADATA = {
    home: {
        title: 'Inicio | UNP Campus Map',
        description:
            'Encuentra rápidamente la ubicación de tu facultad o escuela en la Universidad Nacional de Piura. Mapa interactivo y directorio oficial.',
        path: '/',
    },
    faculties: {
        title: 'Directorio de Facultades | UNP Campus Map',
        description:
            'Lista completa de las 14 facultades y escuelas profesionales. Encuentra su ubicación en el campus y enlaces institucionales.',
        path: '/faculties',
    },
    facultyDetail: {
        title: 'Ubicación de Facultad | UNP Campus Map',
        description:
            'Detalles de ubicación, pabellones y escuelas profesionales de esta facultad. Incluye mapa y accesos directos.',
        path: '/faculties/:id',
    },
    newFaculty: {
        title: 'Administración | UNP Campus Map',
        description: 'Panel de administración para actualizar el directorio de facultades.',
        path: '/new',
    },
    editFaculty: {
        title: 'Editar Facultad | UNP Campus Map',
        description: 'Actualizar información y coordenadas de facultades.',
        path: '/faculties/edit/:id',
    },
    about: {
        title: 'Acerca del Proyecto | UNP Campus Map',
        description:
            'Conoce la iniciativa Open Source creada por devsandoval para mejorar la navegación estudiantil en la UNP.',
        path: '/about',
    },
};

// Función para generar URL canónicas
const getCanonicalUrl = path => {
    // Asegura que la URL no tenga barras dobles
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${SITE_URL}${cleanPath}`;
};

// Función para generar metadatos básicos
const generateBasicMetadata = (pageKey, params = {}) => {
    const page = PAGE_METADATA[pageKey];
    if (!page) return {};

    // Procesa paths que contienen parámetros
    let path = page.path;
    if (params) {
        Object.keys(params).forEach(key => {
            path = path.replace(`:${key}`, params[key]);
        });
    }

    const canonicalUrl = getCanonicalUrl(path);

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: LOCALE,
            type: 'website',
            images: [
                {
                    url: DEFAULT_OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: `${page.title} - Universidad Nacional de Piura`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.title,
            description: page.description,
            site: TWITTER_HANDLE,
            creator: TWITTER_HANDLE,
            images: [DEFAULT_OG_IMAGE],
        },
    };
};

export {
    SITE_URL,
    SITE_NAME,
    DEFAULT_DESCRIPTION,
    DEFAULT_OG_IMAGE,
    AUTHOR,
    TWITTER_HANDLE,
    LOCALE,
    THEME_COLOR,
    generateBasicMetadata,
    getCanonicalUrl,
};
