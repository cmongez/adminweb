Proyecto final Bootcamp Desarrollador de Aplicaciones Front End
Single-Page Application (SPA) hecha en Vue que simula una web de cursos, contiene una vista de administrador CRUD.
Se construyo utilizando HTML, CSS, Bootstrap, Sass, Git, GitHub, JavaScript, Vue, Vue Router y Vuex. 


- Crear una Single-Page Application (SPA) utilizando el framework Vue para gestionar los cursos
de la empresa.
- Crear una interfaz de acceso a usuarios mediante una vista de login. (validarlo contra un json.)
- Al validarse correctamente las credenciales de usuario en la interfaz de acceso “Login” se debe desplegar 
una interfaz principal “Home” donde se muestran las categorias de los cursos que se encuentren en la base de datos mediante tarjetas o cards.
- Igualmente, debe existir un menú de navegación o “NavBar” que contenga el correo
electrónico del usuario en la parte superior derecha en conjunto con un botón, icono o
enlace, que al hacer clic cierre la sesión de usuario activa en ese momento, sin importar la
vista que se encuentre activa. Al cerrar la sesión, el usuario será redirigido inmediatamente a
la vista de acceso o “Login”.
- Crear una interfaz que permita administrar los cursos. Esta interfaz sólo debe activarse si el
usuario se encuentra correctamente autentificado. Para acceder a ella se debe hacer mediante el menú de navegación “NavBar” o menú lateral con los nombres de las rutas
disponibles.
- Asimismo, la interfaz de administración debe desplegar una tabla con el listado de cursos
disponibles en la base de datos. Además debe tener botones o enlaces que permitan agregar,
eliminar y/o editar cursos. (crear un json con el listado de cursos)
- El botón o enlace para agregar un nuevo curso ubicado en la interfaz de administración debe
ejecutar una ventana emergente o modal al hacerle un clic. Esta ventana emergente o modal
debe contener un formulario que permite agregar todos los datos (nombre, url de la imagen
del curso, cupos, inscritos, duración, costo, código y descripción)
- Al agregar un curso se debe desplegar un modal, popup o
alert que nos pregunte si deseamos agregar dicho curso, el cual tendrá dos (02) botones que
serán “Cancelar” y “Agregar Curso”. Si el usuario presiona “Cancelar”, el modal deberá
desaparecer. En cambio si el usuario presiona “Agregar Curso”, el sistema deberá agregar el
registro y se deben
actualizar todas las interfaces que muestran los cursos e informar que el curso fue agregado.
- Para eliminar cursos se debe desplegar una ventana emergente, modal, popup o alert que
nos pregunte si realmente se desea eliminar el curso seleccionado, que tendrá dos (2)
botones que serán “Cancelar” y “Sí, borrar”. Si el usuario hace un clic sobre “Cancelar”, el
modal deberá desaparecer. En cambio si el usuario presiona “Sí, borrar”, el sistema deberá
eliminar el curso e indicar que el curso fue eliminado
correctamente. Actualizando al instante todas las vistas que muestran información sobre los
cursos.
- Para editar cursos, el usuario debe hacer un clic sobre el botón, enlace o icono relacionado al
curso que desea editar mostrado en la interfaz de administración, para así redirigir al usuario
a la interfaz de edición, se debe desplegar un formulario con la información precargada del
curso que se desea editar, dando la oportunidad al usuario de editar el curso seleccionado.
- Al actualizar el curso se debe desplegar un modal, popup o alert indicando que la
actualización fue realizada, por lo tanto, el sistema deberá actualizar el curso
correspondiente modificando todas las vistas que muestran
los cursos instantanemante

Crear el proyecto mediante el entorno de desarrollo de Vue-CLI, el cual debe contener:
- Por lo menos dos (02) dependencias externas instaladas y configuradas en el archivo main.js.
- Vuex, Vue Router.
Utilizar Vue Router para controlar y proteger las rutas, así como crear los redireccionamientos
necesarios.

Desarrollar el sitio web utilizando Vuex para almacenar y modificar los estados.
- Utilizar getters para dejar la información disponible a cualquiera de los componentes o vistas.
- Implementar mutations para modificar los estados de la aplicación.
- Emplear action para ejecutar las mutations en Vuex, traer la información del json, así como para actualizar, agregar y eliminar cursos.
- Utilizar los estados de Vuex para almacenar la información del usuario que inicie o se registre
en la aplicación.

