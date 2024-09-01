# 🚀 Pokémon Battle App

Esta es una aplicación web que permite a los usuarios realizar batallas entre Pokémon. El proyecto está dividido en dos partes principales: un backend desarrollado con NestJS que maneja la lógica de la batalla y la persistencia de datos, y un frontend construido con React que proporciona la interfaz de usuario.

## 🗂 Estructura del Proyecto

- **`backend/`**: Contiene el código del servidor, construido con NestJS.
- **`frontend/`**: Contiene el código del cliente, construido con React.

## 🛠 Instalación

### Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### 1. Clonar el Repositorio


git clone https://github.com/tu-usuario/pokemon-battle-app.git

- **cd pokemon-battle-app**


### 2.  Configurar el Backend

Navega al directorio del backend:

  - **cd ./backend**
Instala las dependencias:

- **npm install**:

### npm run start:dev
El servidor debería estar corriendo en http://localhost:4000.

### 3.  Configurar el Frontend

Navega al directorio del frontend:

  - **cd ./frontend**
Instala las dependencias:

- **npm install**:

### npm run start : Inicia la aplicación de React:

La aplicación debería abrirse automáticamente en tu navegador en http://localhost:3000.


## 🔥 Usar la Aplicación
### 📋 Probar el Backend con Postman
Para probar las rutas del backend, puedes usar Postman:

- **Listar todos los pokemones**:

Método: GET
URL: http://localhost:4000/pokemon

- **Obtener un pokemon por id**:

Método: GET
URL: http://localhost:4000/pokemon/:id

- **Iniciar una batalla**:

Método: POST
URL: http://localhost:4000/battle
Body (JSON):
json

{
  "pokemon1Id": "pokemon-1",
  "pokemon2Id": "pokemon-3"
}

## 🎮 Usar el Frontend
Una vez que el frontend esté corriendo, puedes seleccionar un Pokémon de la lista y hacer clic en el botón "Battle" para iniciar una batalla contra un oponente aleatorio. El resultado de la batalla se mostrará debajo de las cartas de Pokémon seleccionadas.

## 🤝 Contribuir
¡Las contribuciones son bienvenidas! Si tienes alguna idea o mejora, no dudes en abrir un issue o enviar un pull request.

## 📄 Licencia
Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo LICENSE.

¡Gracias por usar Pokémon Battle App! 🎉🐱‍👤
