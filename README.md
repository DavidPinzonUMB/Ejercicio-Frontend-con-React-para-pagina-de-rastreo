# Ejercicio-Frontend-con-React-para-pagina-de-rastreo
Ejercicio frontend con librerias react, vite y diseños internos para una web de rastreo de paquetes

Objetivo: Construir las interfaces de usuario interactivas y responsivas para el panel de administración y la página de rastreo, utilizando React. En esta fase, nos enfocaremos en la estructura y el diseño, utilizando datos de prueba (mock data) antes de la integración.

Tecnologías:

Librería: React

Gestor de Estado (opcional): React Context o Zustand para un manejo simple.

Estilos: Tailwind CSS, Material-UI o CSS modules.

Mapas: Leaflet o Mapbox.

Paso 1: Configuración del Proyecto React 
Inicializar la Aplicación:

Usa Vite (recomendado por su velocidad) o Create React App.

npm create vite@latest frontend -- --template react
Instalar Dependencias:

# Para peticiones a la API
npm install axios 
# Para mapas (ejemplo con Leaflet)
npm install leaflet react-leaflet
# Para routing (si se decide separar en más páginas)
npm install react-router-dom
Estructura de Carpetas:

/frontend
|-- /src
    |-- /components   // Componentes reutilizables (Button, Input, Card, Map)
    |-- /pages        // Vistas principales (AdminDashboard, PaginaRastreo)
    |-- /services     // Lógica para comunicarse con la API
    |-- /hooks        // Custom hooks (ej. usePackages)
    |-- /assets       // Imágenes, SVGs
    |-- App.jsx
    |-- main.jsx
Paso 2: Creación de Componentes del Panel de Administración
PaqueteForm.jsx:

Crea un formulario con todos los campos necesarios para registrar un paquete (remitente, destinatario, dimensiones).

Maneja el estado del formulario usando useState.

Implementa validaciones básicas (campos no vacíos).

PaquetesTable.jsx:

Crea una tabla que muestre la lista de paquetes.

Las columnas deben ser: N° Guía, Remitente, Destinatario, Estado, Acciones.

El botón de "Acciones" debe permitir cambiar el estado del paquete (por ahora, solo simulará el cambio en el estado local).

MapaRepartidores.jsx:

Integra react-leaflet para mostrar un mapa.

Crea un array de datos de prueba (mockRepartidores) con coordenadas.

Renderiza un marcador (<Marker>) por cada repartidor en el mapa.

Ensamblar en AdminDashboard.jsx:

Junta los componentes anteriores en una sola página para formar el panel de control.

Paso 3: Creación de la Página Pública de Rastreo
FormularioRastreo.jsx:

Un único campo de texto para que el cliente ingrese el número de guía.

Un botón de "Buscar".

EstadoPaquete.jsx:

Un componente que muestra la información del paquete encontrado.

Debe mostrar el estado actual (En ruta, Entregado, etc.) de forma clara, quizás con un indicador visual (línea de tiempo o íconos).

MapaRastreo.jsx:

Un mapa simple que muestre un único marcador con la última ubicación reportada del paquete.

Ensamblar en PaginaRastreo.jsx:

Inicialmente, muestra solo el FormularioRastreo.

Después de una búsqueda "exitosa" (usando datos de prueba), muestra EstadoPaquete y MapaRastreo.
