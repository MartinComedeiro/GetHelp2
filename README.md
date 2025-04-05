# GetHelp2 - Sistema de Gestión de Peticiones

## Descripción
Esta aplicación permite crear y gestionar peticiones de ayuda mediante una interfaz web.

## Requisitos Previos
- Docker y Docker Compose
- Node.js 18.x (para desarrollo local)

## Estructura de Datos
### Campos Obligatorios para Peticiones
- `title`: Título de la petición (string)
- `description`: Descripción detallada (string)
- `imageUrl`: URL de la imagen asociada (string)
- `location`: Ubicación de la petición (string)

## Endpoints API
### GET /api/petitions
- Lista todas las peticiones existentes
- Respuesta: Array de objetos de petición

### POST /api/petitions
- Crea una nueva petición
- Cuerpo de la solicitud (JSON):
```json
{
  "title": "Título de la petición",
  "description": "Descripción detallada",
  "imageUrl": "[https://ejemplo.com/imagen.jpg"],(https://ejemplo.com/imagen.jpg",)
  "location": "Ubicación de la petición"
}
