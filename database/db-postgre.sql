CREATE TABLE faculties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(160) NOT NULL UNIQUE,
    description TEXT,
    cover_image_url VARCHAR(255),
    
    -- Metadatos Institucionales
    dean_name VARCHAR(150),
    contact_email VARCHAR(150),
    website_url VARCHAR(255),
    
    -- Auditoría
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    faculty_id INT NOT NULL,
    name VARCHAR(150) NOT NULL,
    
    -- El Nuevo Enfoque: Enlace Oficial
    official_website_url VARCHAR(255),
    
    -- El Core de tu Valor: Ubicación Precisa
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL,
    pavilion VARCHAR(50),
    
    -- Auditoría básica
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_school_faculty 
        FOREIGN KEY (faculty_id) REFERENCES faculties(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Índices para optimizar la búsqueda
CREATE INDEX idx_schools_faculty ON schools(faculty_id);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para actualizar updated_at
CREATE TRIGGER update_faculties_updated_at
    BEFORE UPDATE ON faculties
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schools_updated_at
    BEFORE UPDATE ON schools
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();