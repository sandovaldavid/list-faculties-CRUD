CREATE TABLE faculties (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(160) NOT NULL UNIQUE COMMENT 'URL amigable para SEO: ingenieria-industrial',
    description TEXT,
    cover_image_url VARCHAR(255) COMMENT 'Renombrado de path_img a un estándar más claro',
    
    -- Metadatos Institucionales
    dean_name VARCHAR(150) COMMENT 'Nombre del Decano/a',
    contact_email VARCHAR(150),
    website_url VARCHAR(255),
    
    -- Auditoría
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE schools (
    id INT PRIMARY KEY AUTO_INCREMENT,
    faculty_id INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    
    -- El Nuevo Enfoque: Enlace Oficial
    official_website_url VARCHAR(255) COMMENT 'Enlace directo a la web de la escuela en unp.edu.pe',
    
    -- El Core de tu Valor: Ubicación Precisa
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    pavilion VARCHAR(50) COMMENT 'Ej: Pabellón de Informática - 2do Piso',
    
    -- Auditoría básica
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_school_faculty 
        FOREIGN KEY (faculty_id) REFERENCES faculties(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Índices para optimizar la búsqueda
CREATE INDEX idx_schools_faculty ON schools(faculty_id);