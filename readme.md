# Web service central

## Instalación

### NODE JS:

1.-Se instala la paquetería de node, descargada desde la siguiente liga:

https://nodejs.org/es/

2.-Guardar el archivo .msi que te genera

3.-Dar next en la primera pantalla de instalación

4.-Aceptar los terminos y condiciones y dar “next”

5.-Asignar la ubicación del archivo y dar click en “Next”

6.-Custom setup, dejar la instalación predeterminada, y dar click en “next”

7.-Instalar si se requiere los modulos npm, dar click en “next”

8.-Una vez terminada la instalación dar click en “finish”

9.-Presionar cualquier tecla para finalizar la instalación en el sistema

10.-Extraer el archivo .rar/.zip Web_Service en el directorio donde se desea correr el web service

11.-Abrir la carpeta con tu editor de texto, en este caso yo utilizo visual studio code

12.-Asignar las credenciales de acceso requeridas para acceder a la base de datos en el archivo .env

```.env
DB_HOST=localhost
DB_USER=postgres
DB_PASS=12345
DB=Migo_Central
PORT=5432
HTTP_PORT=3000
```

12.-Checar la versión de node, esté instalada y sea la versión mínima estable 10.16.3

```cmd

C:\Users\ADMIN\Desktop\Web_Service>node -v

v10.16.3

```

13.- Después de descargar el proyecto Instalar las dependencias del proyecto con el comando “npm install” o “npm i”,

```cmd

C:\Users\ADMIN\Desktop\Web_Service>npm i

```

####Salida final de la instalación de dependencias

```cmd

C:\Users\ADMIN\Desktop\Web_Service>npm i

added 501 packages from 232 contributors and audited 7070 packages in 16.897s
found 0 vulnerabilities

```

14.-Iniciar el web service con el comando “npm run start”

```cmd

C:\Users\ADMIN\Desktop\Web_Service>npm run start

```

15.-Listo, el web service ya estará a la escucha de nuevas peticiones.

```cmd

C:\Users\ADMIN\Desktop\Web_Service>npm run start

> mfna@1.0.0 start D:\Users\ADMIN\Desktop\Kiotech\Web_Service
> node dist/index.js

Web service escuchando por puerto 3000

```