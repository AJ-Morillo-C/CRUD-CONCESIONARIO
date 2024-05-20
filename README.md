# CRUD-CONCESIONARIO => Using Node.js with MySQL | XAMPP / PhpMyAdmin
Este proyecto es una idea de aplicación para concesionario que utiliza Node.js, Express y MySQL para proporcionar servicios de gestión de datos.

## Requisitos previos
- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/). - RECOMENDADO -
- MySQL Server instalado y configurado localmente. Puedes descargarlo [aquí](https://www.mysql.com/).
- XAMPP instalado en tu sistema. Puedes descargarlo [aquí](https://www.apachefriends.org/index.html). - RECOMENDADO -
- POSTMA instalado en tu sistema. Puedes descargarlo [aquí](https://www.postman.com/downloads/).
  
## Instalación
1. Clona este repositorio en tu máquina local utilizando el siguiente comando:
    bash
    git clone <URL_DEL_REPOSITORIO>
    
2. Ve al directorio del proyecto:
    bash
    cd crud-concesionario
    
3. Instala las dependencias utilizando npm:
    bash
    npm install

## Configuración de la base de datos
- Abre XAMPP y asegúrate de que el servidor MySQL y el Apache estén activo.
- Importar base de datos en el phpMyAdmin (Descargar desde el repositorio "concesionario.sql"). Tener en cuenta de que al importar primero se creará la base de datos, pero sin las tablas, luego seleccione la tabla y vuelva a importar la misma base de datos.
- Modifica los detalles de conexión a la base de datos en el archivo app.js según sea necesario.

## Uso
- Ejecuta la aplicación utilizando el siguiente comando:
    npm start
    
  Esto iniciará el servidor en el puerto especificado (por defecto en el puerto 5000).
- Accede a la aplicación a través de tu navegador web visitando [http://localhost:5000](http://localhost:5000).
- Se puede verificar el funcionamiento de la API desde POSTMAN.

## NOTA
El despligue no lo logre hacer debido a que no pude elaborar una interfaz de usuario.
