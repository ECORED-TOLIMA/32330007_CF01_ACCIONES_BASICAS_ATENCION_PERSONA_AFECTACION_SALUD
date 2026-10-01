<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  </template>
<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de los contenidos del componente formativo sobre la normatividad del primer respondiente, el reconocimiento de la escena, los riesgos y las medidas de seguridad y bioseguridad, mediante el análisis de situaciones simuladas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza a la responsabilidad civil del primer respondiente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obliga a reparar el daño causado a otra persona por una acción o una omisión con culpa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sanciona con cárcel las conductas tipificadas como delito.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplica únicamente al personal de salud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se limita al cumplimiento de las normas de tránsito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La responsabilidad civil no sanciona con cárcel, sino con la reparación del perjuicio, y por eso se distingue de la responsabilidad penal.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿En qué norma está tipificada la omisión de socorro en Colombia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Código Nacional de Tránsito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ley 1523 de 2012.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Artículo 131 del Código Penal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Decreto 1072 de 2015.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El artículo 131 del Código Penal sanciona a quien no presta auxilio a una persona en grave peligro cuando puede hacerlo sin riesgo propio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cómo se aplica el consentimiento informado cuando la persona afectada está inconsciente o en riesgo vital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No se interviene hasta que la persona recupere la conciencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se presume el consentimiento implícito y se interviene de inmediato.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se exige la firma de un formulario antes de actuar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo el personal médico puede intervenir.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Se presume que la persona aceptaría la atención necesaria para preservar su vida, porque la vida prima sobre la formalidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe hacer el primer respondiente con los objetos que pueden servir como prueba en la escena?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recogerlos y guardarlos para entregarlos después.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evitar alterarlos y restringir el acceso de personas ajenas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limpiarlos para evitar la contaminación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entregarlos a los familiares de la persona afectada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Aunque el respondiente no investiga, conservar la escena y no tocar los elementos protege la cadena de custodia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Cuál es la actuación recomendada ante una escena insegura?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ingresar rápido para retirar a la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No intervenir directamente, activar el sistema de emergencias y esperar el control del riesgo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Esperar a que un familiar autorice el ingreso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Atender solo si la persona está consciente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una escena insegura no deja de ser peligrosa porque haya alguien herido; entrar sin control del riesgo suma una víctima más.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué es el incidente en una situación de emergencia?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El evento que da origen a la situación de emergencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La lesión que presenta la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La probabilidad de que ocurra un daño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La medida de control que se aplica en el lugar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Identificar el incidente responde a qué ocurrió, cómo ocurrió y dónde ocurrió, y anticipa las posibles consecuencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cómo se define un riesgo en la escena?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La lesión que ya se produjo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La probabilidad de que un peligro existente cause daño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El evento que origina la emergencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El elemento de protección que se utiliza.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Reconocer a tiempo esa probabilidad de daño hace posible establecer medidas de prevención, control y mitigación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es el orden de preferencia para reducir el riesgo en la escena?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Protegerse, pedir ayuda, señalizar y luego controlar la fuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar o controlar la fuente, delimitar y señalizar, protegerse y activar el sistema de emergencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Activar el sistema de emergencias y esperar en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar guantes antes de cualquier otra medida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esa jerarquía evita que el uso de guantes sustituya, por ejemplo, la decisión de no entrar a un lugar con gas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué relación tienen los estilos de vida saludables con las emergencias?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ninguna, son un asunto privado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Condicionan la probabilidad de que ocurran, su gravedad y la velocidad de recuperación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminan por completo los riesgos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen la atención médica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Por eso los estilos de vida hacen parte de la gestión del riesgo y de la preparación ante emergencias.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿En cuál entorno la prevención de lesiones depende por completo de la organización de la familia, porque no existe una norma que la obligue?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El ámbito laboral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La vía pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El hogar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los establecimientos de salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En el trabajo rige el Decreto 1072 de 2015 y en la vía el Código Nacional de Tránsito, pero en el hogar la prevención depende de la familia.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Un brigadista recibe el aviso de una persona desmayada en el parqueadero de un centro comercial. ¿Cuál es la conducta correcta según las normas de seguridad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Correr hacia la persona y atenderla de inmediato.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el tránsito, pedir que detengan los vehículos, colocarse los guantes y luego acercarse.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Llamar a la familia antes de actuar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar a que la persona despierte por sí misma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las normas de seguridad exigen una actuación estructurada, que anticipa los riesgos antes de acercarse al lesionado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Cuáles son los tres factores básicos para asegurar la escena?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguridad, escena y situación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Riesgo, incidente y daño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guantes, gafas y chaleco.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Policía, ambulancia y bomberos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Esos factores responden si el lugar es seguro, qué revela el lugar sobre lo ocurrido y cuál es la situación que se enfrenta.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál es la función de la señalización en la escena?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Curar las lesiones de la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Advertir, informar y orientar sobre la presencia de riesgos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la llamada al sistema de emergencias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar los signos vitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La señalización alerta a terceros, delimita la zona de riesgo y mantiene el orden en el entorno.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué distingue al balizaje de la señalización general?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo se utiliza dentro de edificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establece una barrera perceptible que delimita a distancia la zona de riesgo y regula el flujo de personas y vehículos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reemplaza los elementos de protección personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Lo realiza únicamente la policía de tránsito.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El balizaje tiene un carácter operativo, porque advierte a quienes todavía están lejos y reduce los incidentes secundarios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué establece el principio de universalidad en bioseguridad?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Toda persona se considera potencialmente portadora de agentes infecciosos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Solo las personas con diagnóstico conocido representan riesgo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las medidas aplican únicamente en hospitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El riesgo depende de la apariencia de la persona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Este principio mantiene una conducta preventiva constante, sin importar la apariencia o el diagnóstico de la persona.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Por qué importa el orden de colocación y retiro de los elementos de protección personal?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque la mayoría de las exposiciones ocurren al retirar los guantes contaminados sin cuidado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque así se ahorran elementos de protección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque lo exige el Código Nacional de Tránsito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque mejora la visibilidad en la escena.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los elementos protegen solo si se colocan, se usan y se retiran de forma segura, y luego se disponen correctamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la técnica de bioseguridad más eficaz contra la transmisión de infecciones?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La higiene de manos antes y después de la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El uso de mascarilla en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La limpieza de la escena con agua.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso de medicamentos del botiquín.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La higiene de manos abre y cierra el proceso de atención, cuesta menos que cualquier equipo y falla solo cuando se omite.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Cuándo ocurre el contacto indirecto con un agente biológico?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando hay contacto visual con la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuando se toca una superficie o un material contaminado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cuando se conversa con la persona afectada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando se activa el sistema de emergencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Muchas infecciones se transmiten por objetos y superficies contaminadas, por eso es clave el manejo seguro de materiales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el número único de emergencias que integra a la policía, las ambulancias y los bomberos en la mayoría de las ciudades del país?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '119',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '125',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '123',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '911',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La línea 123 activa a varios actores a la vez; el 125 y el 119 son líneas específicas que existen en algunas regiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué condiciones debe cumplir un botiquín para ser un recurso efectivo en la atención inicial?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estar cerrado con llave en una oficina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estar accesible, organizado, conservado y completo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contener medicamentos para cualquier situación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Guardarse únicamente en el hogar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Se ha superado el 70 % de la actividad. Este resultado evidencia una adecuada comprensión de los fundamentos de la atención inicial y el control de riesgos. Se recomienda continuar fortaleciendo los conocimientos para alcanzar un desempeño aún más sólido.',
          mensaje_incorrecto:
            'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion:
        '<b> Objetivo:</b> identificar conceptos clave relacionados con el presupuesto personal, la cultura del ahorro y la planificación financiera.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
