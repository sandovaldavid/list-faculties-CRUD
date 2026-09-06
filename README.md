# 🗺️ UNP Campus Map & Directory

[![Next.js](https://img.shields.io/badge/Next.js-16.0.10-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](./LICENSE)

> 🚀 **Misión:** Ayudar a los estudiantes de la Universidad Nacional de Piura a encontrar sus facultades, escuelas profesionales, pabellones y recursos académicos rápidamente.

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

**El Problema:** El campus universitario de la UNP es extenso y complejo. Los nuevos estudiantes y visitantes a menudo tienen dificultades para ubicar físicamente sus escuelas y pabellones o para acceder a los enlaces institucionales pertinentes entre tanta información dispersa.

**La Solución:** Una plataforma centralizada y orientada a la ubicación (_Location-First_) que permite:

1. **Buscar y consultar** información actualizada de las 14 facultades y sus escuelas profesionales.
2. **Ubicar** físicamente cada pabellón mediante coordenadas geográficas enlazadas con Google Maps (con mapa interactivo integrado en roadmap).
3. **Conectar** de inmediato con los canales institucionales oficiales de la universidad (`unp.edu.pe`).

---

## ✨ Estado de Funcionalidades

### ✅ Funcionalidades Implementadas

- **Directorio de Facultades:** Catálogo estructurado de las 14 facultades con fotos de fachadas, información institucional, autoridades y enlaces oficiales.
- **Detalle de Escuelas Profesionales:** Relación de escuelas por facultad con referencia de pabellón y piso.
- **Georreferenciación Asistida:** Coordenadas de latitud/longitud precisas almacenadas por escuela con acceso directo ("Ver Ubicación") a Google Maps.
- **Búsqueda Rápida:** Buscador con autocompletado en la cabecera principal y filtrado reactivo en el directorio de facultades.
- **Panel Administrativo Protegido:** Flujo de autenticación administrativa vía cookie de sesión (`admin_access`) y contraseña (`ADMIN_PASSWORD`), permitiendo creación (`/new`) y edición (`/faculties/edit/[id]`) de facultades.
- **Gestión de Medios:** Integración con Cloudinary para subida y optimización de imágenes de fachadas.
- **API RESTful:** Endpoints modulares implementados en Next.js App Router (`/api/faculties`, `/api/schools`).
- **Diseño Responsivo:** Interfaz adaptativa optimizada para dispositivos móviles con Tailwind CSS v4.

### ⏳ Funcionalidades Planificadas / En Desarrollo (Roadmap)

- [ ] **Fase 2 — Mapa Interactivo In-App:** Visualizador geoespacial interactivo embebido en el campus (Mapbox GL JS / Leaflet con OpenStreetMap).
- [ ] **Fase 3 — Búsqueda Avanzada de Escuelas:** Búsqueda difusa global (_fuzzy search_) que filtre directamente por escuela, especialidad y pabellón.
- [ ] **Fase 4 — Geolocalización en Tiempo Real:** Guía peatonal "Cómo llegar" con cálculo de rutas internas dentro del campus.

---

## 🛠️ Ingeniería y Arquitectura

| Área                   | Tecnología / Patrón         | Descripción                                                                                                 |
| :--------------------- | :-------------------------- | :---------------------------------------------------------------------------------------------------------- |
| **Frontend Framework** | **Next.js 16.0.10**         | App Router, Server Components y renderizado optimizado para SEO con Webpack.                                |
| **Biblioteca UI**      | **React 19.2.3**            | Componentes declarativos y modernos hooks de estado.                                                        |
| **Estilos**            | **Tailwind CSS 4.1**        | Estilos utilitarios de alto rendimiento y diseño _mobile-first_.                                            |
| **Gestor de Paquetes** | **pnpm 10.25.0**            | Gestión determinista de dependencias (compatible también con bun y npm).                                    |
| **Backend**            | **Next.js Route Handlers**  | APIs RESTful estructuradas por recursos (`/api/faculties`, `/api/schools`).                                 |
| **Capa de Datos**      | **Knex.js 3.1 & MySQL 8.0** | Consultas SQL relacionales normalizadas (Facultades 1:N Escuelas), con soporte alternativo PostgreSQL.      |
| **Gestión de Medios**  | **Cloudinary SDK**          | Subida y transformación de fotos de portadas.                                                               |
| **Infraestructura**    | **Docker & Docker Compose** | Entornos reproducibles para desarrollo (`docker-compose.dev.yml`) y producción (`docker-compose.prod.yml`). |
| **Seguridad Admin**    | **Cookie-Based Access**     | Protección de rutas administrativas mediante verificación de credencial de entorno.                         |

---

## 🚀 Instalación y Despliegue Local

### Requisitos Previos

- **Node.js** `>= 20.x`
- **pnpm** `>= 9.x` (o npm / bun)
- **Docker** y **Docker Compose**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/sandovaldavid/unp-campus-map.git
cd unp-campus-map

# 2. Instalar dependencias
pnpm install
# o con npm: npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de base de datos y Cloudinary

# 4. Levantar la base de datos con Docker
docker compose -f docker-compose.dev.yml up -d db

# 5. Inicializar el esquema de datos en el contenedor MySQL
docker exec -i faculties_db_dev mysql -u user_facultades -ppassword db_facultades < database/db-mysql.sql

# 6. Iniciar el servidor de desarrollo
pnpm dev
# o con npm: npm run dev
```

La aplicación estará accesible en [http://localhost:3000](http://localhost:3000).

### Despliegue Completo con Docker

Si prefieres ejecutar tanto la aplicación Next.js como la base de datos dentro de contenedores:

```bash
# Modo Desarrollo (con recarga en vivo)
docker compose -f docker-compose.dev.yml up -d

# Modo Producción
docker compose -f docker-compose.prod.yml up -d --build
```

---

## 📜 Scripts del Proyecto

| Comando             | Descripción                                                    |
| :------------------ | :------------------------------------------------------------- |
| `pnpm dev`          | Inicia el servidor de desarrollo (`next dev --webpack`)        |
| `pnpm build`        | Compila la aplicación para producción (`next build --webpack`) |
| `pnpm start`        | Inicia el servidor compilado de producción                     |
| `pnpm lint`         | Ejecuta el linter con Next.js ESLint                           |
| `pnpm format`       | Aplica formato al código con Prettier                          |
| `pnpm format:check` | Verifica el formateo del código con Prettier                   |
| `pnpm check`        | Ejecuta validación canónica (`format:check` + ESLint)          |

---

## 🗺️ Roadmap del Proyecto

- [x] **Fase 1:** Arquitectura base, directorio de 14 facultades y escuelas, enlaces oficiales, georreferenciación asistida y backoffice CRUD protegido.
- [ ] **Fase 2 (Planificada):** Integración de visor de mapa interactivo embebido (Mapbox GL JS / Leaflet).
- [ ] **Fase 3 (Planificada):** Búsqueda difusa global (_fuzzy search_) de escuelas y pabellones.
- [ ] **Fase 4 (Planificada):** Geolocalización del usuario y trazado de rutas internas dentro del campus universitario.

---

## 🤝 Contribuciones

¡Las contribuciones y sugerencias son bienvenidas! Este es un proyecto Open Source creado para beneficiar a la comunidad universitaria.

Si cuentas con fotos actualizadas de pabellones, coordenadas GPS verificadas o correcciones de datos institucionales, por favor abre un [Issue](https://github.com/sandovaldavid/unp-campus-map/issues) o envía una Pull Request.

---

## 📄 Licencia

Distribuido bajo la Licencia **MIT**. Consulta el archivo [`LICENSE`](./LICENSE) para más detalles.

---

## 👨‍💻 Autor y Contacto

**Juan David Sandoval**  
Ingeniero Informático | Data Science & Full Stack Web Development

- **Sitio Web:** [sandovaldavid.com](https://sandovaldavid.com)
- **GitHub:** [@sandovaldavid](https://github.com/sandovaldavid)
- **LinkedIn:** [jdsandovals](https://linkedin.com/in/jdsandovals)
- **X (Twitter):** [@jdsandovals](https://x.com/jdsandovals)
- **Contacto:** [hello@sandovaldavid.com](mailto:hello@sandovaldavid.com)

---

<div align="center">

### 🌟 Si este proyecto te resulta útil, ¡apóyalo con una estrella en GitHub! ⭐

**Hecho con dedicación para la comunidad estudiantil de la Universidad Nacional de Piura**

</div>
