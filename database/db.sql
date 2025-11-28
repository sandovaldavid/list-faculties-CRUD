USE unp_faculties;

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
    slug VARCHAR(160) NOT NULL UNIQUE,
    description TEXT,
    
    -- Datos Geoespaciales
    latitude DECIMAL(10, 8) NOT NULL COMMENT 'Precisión suficiente para ubicación exacta',
    longitude DECIMAL(11, 8) NOT NULL,
    pavilion VARCHAR(50) COMMENT 'Ej: Pabellón B',
    floor_number INT DEFAULT 1 COMMENT 'Piso donde se encuentra la dirección',
    
    -- Recursos
    image_url VARCHAR(255),
    
    -- Auditoría
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Integridad Referencial
    CONSTRAINT fk_school_faculty 
        FOREIGN KEY (faculty_id) REFERENCES faculties(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Índices para optimizar la búsqueda
CREATE INDEX idx_schools_faculty ON schools(faculty_id);
CREATE INDEX idx_schools_slug ON schools(slug);