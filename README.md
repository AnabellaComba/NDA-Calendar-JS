# DESCRIPCION

Este es el punto 2 del ejercicio del calendario. Esta vez teniendo la interfaz correctamente generada vamos a aplicar un poco de lo aprendido en los anteriores ejercicios.

### Situacion de ROL
Terminaste correctamente la tarea anterior, el jefe te felicita y automáticamente te encarga que la continúes vos.
Lo que quiere ahora es que cuando hagas click en uno de los dias salga un modal como este ![Modal](Resultado.png) y que se pueda cerrar desde el botón.
Te dió muy pocas indicaciones pero dice que revisará el codigo una vez termines y no antes. 

Trabajar sin mucha información no es lo mejor del mundo pero en el mundo laboral actual es lo más común, hacer preguntas suele ser una gran alternativa
pero parece ser que en este caso de tu jefe no obtendras respuestas, hay que valerse por uno mismo

# TEST TEORIA

1. ¿Se puede añadir un evento a otro evento?
2. ¿Cuál es la sintaxis de la creación de un evento?
3. ¿Aparte del 'click' qué otros disparadores existentes consideras utiles para el futuro recordar?
4. ¿Una página puede ser 100% dinámica?
5. Explica las modificaciones que hiciste con tus palabras linea por linea

1.Sí, podés encadenar eventos o ejecutar un evento dentro de otro en JavaScript, pero depende de lo que se desee realizar:
Ejecutar un evento dentro del manejador de otro
Podés llamar a otra función (que también se usa como evento) dentro del primer evento
Disparar otro evento manualmente (dispatchEvent)
Podés disparar un evento de otro elemento cuando se ejecute el primero
Escuchar múltiples eventos en la misma función
Podés añadir varios eventos al mismo elemento que llamen a una misma función
Si lo que querés es que un evento ocurra después de otro de forma automática, dispatchEvent es la forma más controlada.

2.
En JavaScript, crear (o más bien asignar) un evento a un elemento tiene varias sintaxis
 -Usando addEventListener (la forma más recomendada)
 Se usaría: elemento.addEventListener(tipoEvento, funcionCallback, useCapture);
 tipoEvento → nombre del evento sin el prefijo on (ej: 'click', 'mouseover').
funcionCallback → la función que se ejecuta cuando ocurre el evento.
useCapture → (opcional, false por defecto) indica si se usa la fase de captura.
EJ const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {console.log('Botón clickeado');});

 -Usando una función anónima con addEventListener
document.querySelector('#miBoton').addEventListener('click', () => {
  console.log('Click con arrow function');});

-Asignando directamente a la propiedad del evento (onEvento)
Esta es la forma antigua, menos flexible porque solo permite un manejador por tipo de evento:
const boton = document.getElementById('miBoton');
boton.onclick = function() {console.log('Click usando onClick');};

-Creando un evento personalizado con new Event()
const miEvento = new Event('nombreEvento');
elemento.dispatchEvent(miEvento);

EJ
const boton = document.getElementById('miBoton');
// Crear evento
const eventoPersonalizado = new Event('saludo');
// Escuchar evento
boton.addEventListener('saludo', () => {
  console.log('¡Hola! Este es un evento personalizado');});
// Disparar evento
boton.dispatchEvent(eventoPersonalizado);

3.
Eventos de Mouse
wheel → para la rueda del mouse.
Eventos de Teclado
Eventos de Formulario
Eventos de Carga y Ventana
Eventos de Drag & Drop
Eventos de Touch (en móviles)
transitionend → cuando termina una animación CSS.
animationend → cuando termina una animación CSS.
copy, paste, cut → para manejar portapapeles.

4.
Sí, una página puede ser 100% dinámica, y es común en SPAs(Aplicaciones de una sola página ). Sin embargo, muchas veces se mezcla contenido estático + dinámico por motivos de rendimiento y SEO.

Ventajas

Experiencia más rápida (menos recargas).
Interactividad avanzada.
Ideal para apps complejas.

Desventajas

SEO complicado (Google puede indexar, pero cuesta).
Dependencia total de JS (si falla, la página queda vacía).
Carga inicial más lenta (todo se arma después).

5.
Agregué dos cosas principales:
1- Dentro del bucle for que genera los días del mes → añadí un addEventListener a cada día.
2- Fuera de renderCalendar() → agregué el evento para cerrar el modal.
Al hacer click escucha la selección del día.
Obtiene el modal (#modal) y el texto dentro del modal (#modal-text) que se encuentran en el HTML.
Genera el texto dinámico con la fecha seleccionada:"Seleccionaste: 15 de Agosto de 2025" .
Muestra el modal cambiando su estilo a display: flex.
Para poder cerrar el modal agregué dos formas, una cierra al hacer click al botón cerrar y la otra cuando haces click por fuera del cartel.
Esto se hace verificando que el clic fue en el div principal (id="modal") y no en el contenido interno.





