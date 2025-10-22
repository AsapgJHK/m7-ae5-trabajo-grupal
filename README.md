# 🚀 Proyecto de Gestión de Inventario: Clases JS y CRUD con Sequelize (PostgreSQL)

Este proyecto grupal tiene como objetivo consolidar la comprensión de la **Programación Orientada a Objetos (POO) en JavaScript** mediante la creación de una clase `Producto`, y la implementación de operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) utilizando el ORM **Sequelize** con **PostgreSQL**.

## 1\. Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
inventario-proyecto/
├── .env                  # Variables de entorno (¡Contiene credenciales sensibles!)
├── .gitignore            # Ignora carpetas como node_modules y el archivo .env
├── package.json          # Metadatos y dependencias del proyecto
├── Producto.js           # Parte 1: Definición de la clase Producto (JS POO)
├── db.js                 # Parte 2: Conexión a PostgreSQL y definición del Modelo Sequelize
└── app.js                # Parte 2: Script principal que ejecuta todas las operaciones CRUD
```

-----

## 2\. Requisitos y Configuración Inicial

Para ejecutar este proyecto, necesitas lo siguiente:

### A. Requisitos de Software

1.  **Node.js y npm** (instalados).
2.  **Servidor PostgreSQL** (instalado y corriendo).
3.  Una base de datos creada en el servidor llamada **`inventario`**.

### B. Instalación de Dependencias

Ejecuta el siguiente comando en la terminal de la carpeta raíz del proyecto:

```bash
npm install sequelize pg dotenv
```

### C. Configuración de Variables de Entorno

**Crea un archivo llamado `.env`** en la raíz del proyecto. Este archivo contendrá las credenciales necesarias para que Sequelize se conecte a PostgreSQL.

**`.env`**

```env
# Configuración de PostgreSQL para el trabajo
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=inventario
PG_USER=TU_USUARIO_POSTGRES
PG_PASSWORD=TU_CONTRASEÑA_POSTGRES
```

> **⚠️ ¡IMPORTANTE\!** Reemplaza `TU_USUARIO_POSTGRES` y `TU_CONTRASEÑA_POSTGRES` con tus credenciales reales. El archivo `.gitignore` está configurado para evitar subir este archivo al repositorio.

-----

## 3\. Funcionalidad Implementada

### Parte 1: Lógica de la Clase `Producto` (Archivo: `Producto.js`)

  * **Definición:** Clase `Producto` con constructor para `nombre`, `descripcion`, `precio` y `cantidad`.
  * **Encapsulamiento:** Implementación de **Accesadores (`getters`) y Mutadores (`setters`)** para cada atributo, incluyendo validación básica (ej., precio no negativo).
  * **Método Personalizado:** `mostrarInfo()` para imprimir los detalles de una instancia.
  * **Prueba:** Contiene la instanciación de 3 productos de prueba.

### Parte 2: Operaciones CRUD con Sequelize (Archivos: `db.js` y `app.js`)

El archivo `db.js` configura Sequelize y define el **Modelo `Producto`** (la representación de la tabla en JavaScript). El archivo `app.js` ejecuta la siguiente secuencia:

| Operación | Descripción | Método Sequelize |
| :--- | :--- | :--- |
| **Conexión y Sincronización** | Establece conexión con PostgreSQL y crea la tabla `Productos` (si no existe). | `sequelize.authenticate()`, `ProductoModel.sync()` |
| **Crear (C)** | Agrega nuevos registros de productos a la base de datos. | `ProductoModel.create()` |
| **Leer (R)** | Obtiene todos los productos y un producto específico por su ID. | `ProductoModel.findAll()`, `ProductoModel.findByPk()` |
| **Actualizar (U)** | Modifica los campos (`precio`, `cantidad`) de un producto específico. | `ProductoModel.update()` |
| **Eliminar (D)** | Borra un producto de la base de datos por su ID. | `ProductoModel.destroy()` |
| **Manejo de Errores** | Incluido en `app.js` para capturar fallos de conexión o en operaciones CRUD. | `try...catch` |

-----

## 4\. Ejecución del Trabajo

Para ejecutar el *script* completo y probar la conexión y las operaciones CRUD:

```bash
# Ejecutar la lógica de conexión y CRUD
node app.js
```

El resultado mostrará el *output* de las operaciones en orden, permitiendo verificar la correcta ejecución de cada paso.

### Verificación

Después de ejecutar, puedes verificar los cambios en el servidor PostgreSQL (en la base de datos `inventario`, tabla `Productos`) utilizando herramientas como `psql` o pgAdmin.
