# 🗺️ UNP Campus Map & Directory

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-9.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)

> 🚀 **Misión:** Ayudar a los estudiantes de la Universidad Nacional de Piura a encontrar sus escuelas, pabellones y recursos académicos rápidamente.

---

### ⚠️ Aviso Importante

**Este es un proyecto independiente Open Source.** Desarrollado por estudiantes para estudiantes. No tiene afiliación oficial con la Universidad Nacional de Piura.

---

## 📱 Vistazo Rápido

<div align="center">
  <img src="./public/images/mockups/desktop.png" alt="Vista Desktop" width="800"/>
  <br/><br/>
  <div style="display: flex; justify-content: center; gap: 20px;">
    <img src="./public/images/mockups/mobile-2.png" alt="Vista Mobile" width="250"/>
    <img src="./public/images/mockups/mobile.png" alt="Card Detail" width="250"/>
  </div>
</div>

## 🎯 El Problema y La Solución

**El Problema:** El campus universitario es extenso y complejo. Los nuevos estudiantes (y visitantes) a menudo tienen dificultades para ubicar físicamente sus escuelas, pabellones o encontrar los enlaces oficiales correctos entre tanta información dispersa.

**La Solución:** Una plataforma centralizada y _Location-First_ (prioridad en ubicación) que permite:

1.  **Buscar** facultades y escuelas al instante.
2.  **Ubicar** geográficamente cada pabellón en un mapa interactivo.
3.  **Conectar** con los recursos oficiales de la universidad.

## ✨ Funcionalidades Principales

### 🎓 Para Estudiantes (Frontend Público)

- **Directorio Inteligente:** Búsqueda rápida de las 14 facultades y sus respectivas escuelas profesionales.
- **Mapa Interactivo:** Visualización geoespacial de los pabellones (Próximamente con Mapbox/Leaflet).
- **Enlaces Oficiales:** Acceso directo a las webs institucionales de cada escuela para trámites y mallas curriculares.
- **Diseño Responsivo:** Optimizado para funcionar perfecto en el celular mientras caminas por el campus.

### 🛡️ Para Administradores (Backoffice)

- **Gestión de Contenido:** Sistema CRUD protegido para actualizar información de facultades y escuelas.
- **Seguridad sin Fricción:** Implementación de _Admin Secret Cookie Middleware_ para gestión segura sin necesidad de un sistema de usuarios complejo.
- **Gestión de Medios:** Integración con Cloudinary para optimización de imágenes de fachadas.

## 🛠️ Ingeniería y Arquitectura

Este proyecto demuestra patrones de desarrollo modernos y escalables:

| Área                | Tecnología / Patrón         | Descripción                                                                   |
| :------------------ | :-------------------------- | :---------------------------------------------------------------------------- |
| **Frontend**        | **Next.js 14 (App Router)** | Renderizado híbrido (SSR/CSR) para máximo SEO y velocidad.                    |
| **Estilos**         | **Tailwind CSS**            | Diseño de interfaz moderno, accesible y _mobile-first_.                       |
| **Backend**         | **API Routes**              | Endpoints RESTful estructurados por recursos.                                 |
| **Datos**           | **MySQL 8.0**               | Base de datos relacional normalizada (Facultades 1:N Escuelas).               |
| **Infraestructura** | **Docker**                  | Contenerización completa para entornos de desarrollo y producción.            |
| **Seguridad**       | **Middleware**              | Protección de rutas administrativas mediante validación de tokens en cookies. |

## 🚀 Instalación y Despliegue Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/dev-sandoval/unp-campus-map.git
cd unp-campus-map

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crea un archivo .env basado en .env.example
cp .env.example .env

# 4. Levantar entorno con Docker (Base de datos)
docker-compose up -d

# 5. Inicializar esquema de datos (incluyendo tabla de escuelas)
docker exec -i db_facultades mysql -u user_facultades -ppassword < database/db.sql

# 6. Iniciar servidor de desarrollo
npm run dev
```

## 🗺️ Roadmap del Proyecto

- [x] Arquitectura base y Directorio de Facultades.
- [x] Sistema de administración (CRUD) seguro.
- [ ] **Fase 2:** Implementación de Mapa Interactivo (Mapbox/Leaflet).
- [ ] **Fase 3:** Búsqueda por "Escuela" (Fuzzy Search).
- [ ] **Fase 4:** Geolocalización del usuario ("Cómo llegar").

## 🤝 Contribuciones

¡Las Pull Requests son bienvenidas\! Este es un proyecto Open Source pensado para la comunidad.
Si tienes fotos actualizadas de los pabellones o coordenadas GPS precisas, por favor abre un Issue.

## 📄 Licencia

Distribuido bajo la licencia **MIT**. Ver `LICENSE` para más información.

---

## 👨‍💻 Contacto

Soy **Juan David Sandoval**, Ingeniero Informático con especialización en Data Science y
Desarrollador Web. Me enfoco en construir aplicaciones **que combinen la ciencia de datos,
inteligencia artificial y el desarrollo web moderno**.

Si estás buscando talento que combine el dominio técnico de backend, frontend y bases de datos:

- **Perfil Profesional:** [LinkedIn - Juan David Sandoval](https://linkedin.com/in/devsandoval)
- **Código:** [GitHub - sandovaldavid](https://github.com/sandovaldavid)
- **Portafolio:** [DevSandoval](https://devsandoval.me)

---

<div align="center">

### 🌟 ¿Te resultó útil? ¡Dale una estrella! ⭐

---

**Hecho para los estudiantes de la Universidad Nacional de Piura**

</div>
