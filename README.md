# Mi Proyecto
Prueba Técnica Desarrollador Backend - Thomas Salduende

## Descripción
Este proyecto es una API para gestionar usuarios y el acceso a la aplicación. Use Node Js, como Base de Datos PostgreSQL, como ORM typeorm, Express, TypeScript. Es un CRUD de usuarios, donde use para las validaciones la librería ZOD, para obtener un token de logueo use la libreria JSONWEBTOKEN.

## Instalación
1. Clona el repositorio en tu máquina local ejecutando el siguiente comando en tu bash: git clone 


2. Instala las dependencias:
cd (NOMBRE DE LA CARPETA DONDE CLONO EL REPOSITORIO)
npm install


## Configuración
1. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables de entorno o modifica el archivo que se encuetra en `/src/DB/config.ts` poniendo tus variables de entorno.

## Uso
Para ejecutar el proyecto, puedes usar el siguiente comando: `npm run dev`


## Pruebas
Para ejecutar las pruebas unitarias, puedes usar el siguiente comando: `npm test`. Estuve usando jest para poder correr el test, pero me da error de que no lee la ruta, es decir me devuelve un error 404. Estuve leyendo documentación y demas, pero no pude encontrar la forma de solucionarlo.
De igual forma, probe todo en Postman y funcionaron todas las peticiones.

