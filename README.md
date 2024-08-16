# Proyecto de API con Node.js y MySQL

Este proyecto es una API básica creada con Node.js y Express que interactúa con una base de datos MySQL. Utiliza `mysql2/promise` para manejar la conexión a la base de datos y `express` para gestionar las rutas de la API.

## Estructura del Proyecto

- **`src/`**: Contiene el código fuente del proyecto.
  - **`database/`**:
    - **`connection/`**: Contiene la configuración de la base de datos y la conexión.
      - `db.js`: Configuración de la conexión a la base de datos.
    - **`querys/`**: Contiene las consultas a la base de datos.
      - `queryAsync.js`: Repositorio de consultas asíncronas.
  - **`routes/`**: Contiene las rutas de la API.
    - `apiRoutes.js`: Definiciones de rutas y controladores.
  - **`index.js`**: Punto de entrada de la aplicación.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del repositorio:

```bash
npm install


Configuración
Antes de ejecutar la aplicación, asegúrate de tener configurada tu base de datos MySQL y actualiza el archivo src/database/connection/db.js con los detalles de tu conexión.

Ejemplo de configuración en db.js:

```bash
const config = {
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
};

export default config;


Para iniciar la aplicación, ejecuta el siguiente comando:
```npm start
La aplicación estará disponible en http://localhost:3000.

Rutas de la API
GET /users
Obtiene todos los usuarios de la base de datos.

Respuesta:

200 OK: Lista de usuarios.
GET /users/:id
Obtiene un usuario por ID.

Parámetros:

id (en la URL): ID del usuario.
Respuesta:

200 OK: Información del usuario.
404 Not Found: Si el usuario no existe.
GET /create/:nombres/:apellidos/:edad
Crea un nuevo usuario.

Parámetros:

nombres (en la URL): Nombres del usuario.
apellidos (en la URL): Apellidos del usuario.
edad (en la URL): Edad del usuario.
Respuesta:

200 OK: Información del nuevo usuario.
GET /update/:id/:edad
Actualiza la edad de un usuario existente.

Parámetros:

id (en la URL): ID del usuario.
edad (en la URL): Nueva edad del usuario.
Respuesta:

200 OK: Información del usuario actualizado.
GET /delete/:id
Elimina un usuario por ID.

Parámetros:

id (en la URL): ID del usuario.
Respuesta:

200 OK: Información del usuario eliminado.
Estructura de Clases
Database
Métodos:
getConnection(): Obtiene una conexión a la base de datos.
query(sql, params): Ejecuta una consulta SQL con parámetros.
close(): Cierra la conexión a la base de datos.
ItemRepository
Métodos:
getAllUsers(): Obtiene todos los usuarios.
getUserById(id): Obtiene un usuario por ID.
create(nombres, apellidos, edad): Crea un nuevo usuario.
update(id, edad): Actualiza la edad de un usuario.
delete(id): Elimina un usuario por ID.
Contribuciones
Si deseas contribuir al proyecto, por favor sigue estos pasos:

Realiza un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
Empuja los cambios (git push origin feature/nueva-funcionalidad).
Abre una solicitud de extracción (pull request).
