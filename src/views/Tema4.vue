<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y aseguramiento de la escena
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La seguridad en la escena es el principio que establece las condiciones necesarias para una intervención eficaz y libre de riesgos adicionales. Su objetivo es proteger la integridad del respondiente, de la persona afectada y de quienes se encuentran en el entorno, evitando que la atención genere nuevos incidentes. Es la traducción práctica de todo lo analizado sobre escena, incidente y riesgos.
    .row.justify-content-center.mb-4
      .cajon.cajon.c01.color-secundario.p-4.mb-0
        p.mb-0 Antes de cualquier acción, la valoración del entorno determina si la escena es segura para intervenir. Si no lo es, el respondiente se abstiene de actuar directamente y activa el sistema de emergencias, priorizando su propia protección. Ese principio de autoprotección no es egoísmo, porque una persona lesionada al intentar ayudar resta los recursos a la atención en lugar de sumarlos.
    p.mb-4 Cuando la escena admite la intervención, asegurarla implica pasar de la identificación del riesgo a la acción sobre él. Ese paso no exige equipos especializados, sino unas decisiones que se toman en el orden correcto y antes de acercarse a la persona afectada. Un accidente en una vía nacional permite reconocerlas con claridad, porque allí el peligro para quien ayuda es el mismo tránsito que produjo el incidente. Las acciones que ese caso exige son las siguientes:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img02.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Detener el vehículo en un sitio seguro
            p.mb-0 Fuera de la calzada y a una distancia que no obstruya el paso de las ambulancias ni exponga a sus ocupantes. 
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img03.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Encender las luces de emergencia
            p.mb-0 Para que los demás conductores adviertan desde lejos que algo ocurre y reduzcan la velocidad. 
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img04.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Ubicar señales en la vía
            p.mb-0 Con la anticipación que exigen la velocidad y la visibilidad del tramo, de modo que el tránsito se desvíe antes de llegar al lugar. 
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t4/img05.png', alt='')
          .bg-c1.flex-grow-1.d-flex.flex-column.align-items-start
            h4 Ponerse un chaleco antes de acercarse
            p.mb-0 Para que quien interviene sea perceptible para los conductores, de día y sobre todo de noche o con lluvia.
    p Las cuatro acciones toman menos de dos minutos y ninguna requiere formación en salud. Sin embargo, omitirlas convierte a quien ayuda en una segunda víctima, y por eso se cumplen siempre antes de la primera valoración de la persona afectada. Lo que cambia de una escena a otra no es esa lógica, sino los medios con que se aplica.
    p.mb-4 Ese conjunto de gestos parece intuitivo, pero responde a un orden que conviene hacer explícito, porque en la urgencia se omiten justamente los pasos que no se han estudiado. Asegurar la escena combina reglas de conducta, preguntas que se responden antes de acercarse, barreras que protegen y marcas que advierten a los demás. Cada uno de esos componentes se desarrolla en un apartado propio, en el siguiente orden:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img06.svg', alt='')(style="width: 85%")
            h4.text-center Normas de seguridad
            br
            p.mb-4(data-aos="fade-down") Los lineamientos técnicos, operativos y comportamentales que orientan la conducta del respondiente durante toda la intervención, desde la llegada hasta la entrega a los organismos de emergencia.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img07.svg', alt='')(style="width: 85%")
            h4.text-center Factores básicos para asegurar la escena
            p.mb-4(data-aos="fade-down") Las tres preguntas sobre seguridad, escena y situación que se responden antes de tocar a la persona afectada y que ordenan la lectura del lugar en menos de un minuto.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img08.svg', alt='')(style="width: 85%")
            h4.text-center Elementos de protección y señalización
            p.mb-4(data-aos="fade-down") Las barreras que protegen al respondiente y las marcas que advierten a los demás sobre la presencia del peligro, elegidas según los riesgos identificados en la escena.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t4/img09.svg', alt='')(style="width: 85%")
            h4.text-center Balizaje
            br
            p.mb-4(data-aos="fade-down") La técnica que delimita a distancia la zona de riesgo en vías y espacios abiertos, con dispositivos dispuestos según la velocidad de circulación y las condiciones de visibilidad del lugar.
    p Los cuatro apartados van de lo general a lo específico. Las normas fijan la conducta y los factores ordenan la valoración del lugar; los elementos de protección y la señalización protegen y advierten, y el balizaje resuelve el caso particular, y muy frecuente, de la vía pública.
    p.mb-4 Con el propósito de profundizar en la manera de asegurar una escena antes de tocar a la persona afectada, se propone el siguiente recurso de audio. El siguiente pódcast aborda, de manera clara y contextualizada, las normas de seguridad del primer respondiente, las tres preguntas de seguridad, escena y situación, y el papel de la protección personal, la señalización y el balizaje para evitar una segunda víctima:
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Pódcast.
          span Asegurar la escena: el minuto que protege a todos.
        .row.justify-content-center.align-items-center.g-0
          .col-lg-12.col-12.order-lg-2.order-2
            .cajon.cajon.c02.p-4
              .col-lg-12.col-12
                .tarjeta.clr--pink.p-4.rounded-0.h-100
                  .tarjeta.bg-white.p-4
                    TarjetaAudio.color-acento-botones.mb-3(
                    texto="Pódcast"
                    :audio="require_src('@/assets/curso/Podcast_CF03_62360022.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-lg-12.col-12.order-lg-1.order-1
            figure
              img(src='@/assets/curso/temas/t4/img10.svg', alt='')
    .row.justify-content-center.mb-0
      .col.col-lg-10.col-12
        p.mb-4 Al terminar el pódcast conviene reconstruir el orden en que se presentan las ideas, porque ese orden es el mismo que se sigue en una escena real. Primero se recuerdan las normas que gobiernan la conducta, luego se formulan las tres preguntas y, solo entonces, se eligen la protección y las señales. Contrastar ese recorrido con lo que cada persona haría por instinto revela los pasos que suelen omitirse.
        .cajon.cajon.c01.color-secundario.p-4.mb-0
          p.mb-0 Ese recorrido empieza por las normas, porque de ellas se derivan las demás decisiones. Antes de preguntar si el lugar es seguro o de elegir un chaleco, el respondiente ya obedece unas reglas que le indican cuándo acercarse, cuándo abstenerse y cuándo pedir apoyo. Conocerlas evita que la urgencia las reemplace por el impulso, y por eso son la base del aseguramiento del área, la señalización y la atención posterior de la persona lesionada.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Normas de seguridad
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img11.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 Las normas de seguridad son el conjunto de lineamientos técnicos, operativos y comportamentales que orientan la actuación en la escena de una emergencia para prevenir daños, controlar riesgos y garantizar condiciones seguras durante la intervención. Su cumplimiento es el primer requisito de una atención efectiva, porque la protección del respondiente evita la aparición de nuevas víctimas.
        .cajon.cajon.c02.color-primario.p-4.mb-3
          p.mb-0 Estas normas se fundamentan en el principio de autoprotección, según el cual ninguna acción de ayuda debe realizarse si compromete la integridad de quien interviene. Ese principio se articula con la gestión del riesgo de la Ley 1523 de 2012, que promueve la identificación, el análisis y el control de los riesgos como base para proteger la vida, los bienes y el entorno.
        p.mb-0 En la práctica, las normas implican una actuación estructurada y consciente del contexto. Un brigadista de un centro comercial que recibe el aviso de una persona desmayada en el parqueadero no corre hacia ella. Verifica el tránsito interno, pide que detengan los vehículos, se coloca los guantes y solo entonces se acerca.
    p.mb-4 Lo que hace el brigadista no depende de su intuición ni de su temple, sino de unas reglas que aprendió y repite en cada intervención hasta convertirlas en hábito. Esas reglas orientan la conducta desde el momento en que se recibe el aviso hasta la entrega de la persona a los organismos de socorro. Su valor está en cumplirlas completas, sin saltarse la que parece menos urgente. El comportamiento seguro se descompone en siete normas:
    .row.align-items-center.mb-4
      .col-lg-11.col-12
        LineaTiempoE.color-secundario
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img12.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evaluar la escena antes de intervenir
              p Identificar los riesgos, las condiciones del entorno y los posibles peligros ocultos, aunque la urgencia invite a actuar de inmediato.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img13.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Priorizar la seguridad personal y de terceros
              p Evitar conductas que puedan generar nuevas víctimas, incluidas las de los curiosos que se acercan al lugar sin protección.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img14.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Abstenerse de intervenir en escenas inseguras
              p En especial cuando los riesgos superan la capacidad de control del respondiente, como incendios, derrumbes o agresores presentes.
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img15.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Actuar dentro del alcance de la formación
              p Evitar procedimientos para los cuales no se tiene competencia técnica, por bien intencionados que parezcan en el momento.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img16.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Mantener el control emocional
              p Favorecer decisiones adecuadas bajo presión, con voz calmada e instrucciones claras para quienes rodean la escena y quieren ayudar.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img17.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Utilizar los elementos de protección personal
              p Según el riesgo identificado, sin excepciones por prisa, por falta de costumbre o por la apariencia de la persona afectada.
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t4/img18.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Activar el sistema de emergencias de manera oportuna
              p Solicitar apoyo especializado tan pronto la situación lo requiera, y no después de haber intentado resolverla sin éxito.
    p.mb-4 Las siete normas no son acciones aisladas, sino un sistema que orienta la conducta durante toda la intervención. Aplicadas de manera continua, anticipan riesgos, reducen la probabilidad de incidentes secundarios y mantienen el control del entorno, y constituyen la base sobre la que se desarrollan el aseguramiento de la escena, la señalización y la atención del lesionado.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img19.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.p-3
          p.mb-0(data-aos="fade-down") La primera norma de seguridad es también la más difícil de cumplir, pues consiste en detenerse unos segundos cuando todo el cuerpo pide correr hacia la persona que necesita ayuda.
    p.mb-0 Las siete pautas anteriores indican cómo comportarse, pero no ordenan la valoración del lugar. Esa tarea corresponde a unos factores básicos que el respondiente comprueba apenas llega y antes de cualquier contacto, porque de ellos depende que la escena pueda asegurarse o que la actuación se limite a pedir apoyo.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Factores básicos para asegurar la escena
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Asegurar la escena exige responder, en pocos segundos, tres preguntas ordenadas, esto es, si el lugar es seguro para quien llega, qué revela el lugar sobre lo ocurrido y cuál es la situación que se enfrenta. Esas preguntas corresponden a los tres factores básicos del aseguramiento, que son seguridad, escena y situación. Los lineamientos de atención prehospitalaria del país los recogen como la primera fase de toda valoración (Ministerio de Salud y Protección Social, 2017).
    p.mb-4 El orden importa. La seguridad va primero porque sin ella no hay respondiente; la escena va después porque explica el mecanismo de lesión; y la situación cierra porque define cuántas personas están afectadas y qué recursos hacen falta. Alterar la secuencia conduce a errores frecuentes, como contar las víctimas antes de advertir que el techo puede ceder.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c03.p-4.h-100.w-100
          p.mb-3(data-aos="fade-down") En un bus intermunicipal volcado en una carretera, el primer conductor que se detiene aplica los tres factores sin nombrarlos. Cada una de las decisiones que toma en los primeros segundos responde a uno de ellos, en el mismo orden en que se presentan:
          .tarjeta.tarjeta--blanca.px-4.py-3
            ul.lista-ul.mb-0
              li.mb-2
                i.lista-ul__vineta
                p.mb-0 <b>Seguridad</b>: comprueba que no haya combustible derramado ni tránsito en contra, porque de esa condición depende que pueda acercarse sin convertirse en una víctima más.
              li.mb-2
                i.lista-ul__vineta
                p.mb-0 <b>Escena</b>: deduce por la posición del vehículo que hubo un vuelco lateral con alta energía, y esa fuerza anticipa lesiones graves en los ocupantes. 
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 <b>Situación</b>: estima que hay más de diez personas afectadas y que necesitará varias ambulancias, dato que transmite al sistema de emergencias desde la primera llamada.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img21.jpg', alt='Imagen decorativa')
    p.mb-4 El conductor del ejemplo no necesitó una lista para actuar, pero sí una manera de valorar el lugar que se aprende y se ejercita. Cada factor se formula como una pregunta que se responde con lo que se percibe desde una distancia prudente y sin tocar todavía a nadie. Plantearlas siempre en el mismo orden convierte una valoración apresurada en un procedimiento confiable. Las preguntas son las siguientes:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="¿Es seguro el lugar para quien llega?")
            .col-12.mb-0.mb-md-0
              p Corresponde al factor de seguridad y se responde antes de dar un paso. Conviene precisarla en tres puntos, es decir, qué peligros hay a la vista, si alguno sigue activo y si quien interviene puede acercarse sin exponerse. Una respuesta negativa detiene la intervención y obliga a solicitar apoyo especializado.
          .row(titulo="¿Qué revela el lugar sobre lo ocurrido?")
            .col-12.mb-0.mb-md-0
              p Corresponde al factor de escena y se responde observando las huellas del evento. La posición de un vehículo, la altura de una caída o la presencia de un cable suelto indican qué fuerza actuó sobre la persona y qué lesiones cabe esperar antes de valorarla de cerca.
          .row(titulo="¿Cuál es la situación que se enfrenta? ")
            .col-12.mb-0.mb-md-0
              p Corresponde al factor de situación y define la magnitud de la respuesta. Se precisa cuántas personas están afectadas, qué recursos harán falta y quién puede ayudar en el lugar, porque de ese cálculo depende la información que recibe el sistema de emergencias.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img22.png', alt='')
    p Responder a las tres preguntas toma menos de un minuto y evita las dos fallas más costosas de la atención inicial. Esas fallas son entrar a un lugar que va a lesionar al respondiente y pedir menos ayuda de la que la situación necesita.
    p.mb-4 Ese diagnóstico, sin embargo, no modifica por sí solo las condiciones del lugar. Lo que sigue es intervenir sobre el área para que el peligro identificado no alcance a la persona afectada, al respondiente ni a quienes se acercan. Esa intervención se realiza con los recursos disponibles en el sitio y se mantiene mientras dura la atención, porque un área asegurada puede dejar de estarlo. Las acciones concretas sobre el área son las siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Delimitar el área de riesgo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establece un perímetro de seguridad con los elementos disponibles, como conos, cintas, vehículos o personas, de modo que la zona del incidente quede separada del espacio por donde circulan los demás.
          .row(numero="2" titulo="Restringir el acceso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se evita la interferencia de personas ajenas a la atención, con instrucciones claras y firmes, porque los curiosos entorpecen las maniobras, contaminan la escena y pueden convertirse en nuevas víctimas.
          .row(numero="3" titulo="Controlar las fuentes de peligro")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se apaga un motor, se cierra una llave de gas o se aleja un objeto inestable, siempre que la acción no comprometa la seguridad personal de quien la realiza.
          .row(numero="4" titulo="Coordinar con otros actores")
            .col-12.mb-4.mb-md-0
              p.mb-0 Cuando ya se encuentran presentes organismos de respuesta, el respondiente informa lo que hizo, lo que encontró y se pone a disposición, sin duplicar ni contradecir sus instrucciones.
          .row(numero="5" titulo="Mantener vigilancia continua")
            .col-12.mb-4.mb-md-0
              p.mb-0 Las condiciones pueden cambiar durante la intervención, de modo que el tránsito, el fuego, la estructura o el clima se revisan de manera periódica hasta entregar la escena.
      .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img23.jpg', alt='')
    p Las cinco acciones convierten un lugar peligroso en un espacio de trabajo controlado. Cuando los riesgos superan la capacidad del respondiente, la acción correcta es abstenerse de intervenir directamente y esperar el apoyo de los organismos especializados.
    p.mb-0 Delimitar, restringir y advertir requieren herramientas. Unas protegen el cuerpo de quien interviene y otras informan a los demás de que allí existe un peligro; ambas se estudian a continuación como elementos de protección y señalización.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Elementos de protección y señalización
    p.mb-4 Los elementos de protección personal son los dispositivos que reducen la exposición del respondiente a los riesgos presentes en la escena y protegen su integridad física durante la intervención. Actúan como barreras frente a riesgos biológicos, físicos y, en algunos casos, químicos, y su uso es una medida básica de autoprotección, nunca una opción.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img24.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.p-3.mb-3
          p.mb-0 La señalización, por su parte, es la medida de seguridad que advierte, informa y orienta sobre la presencia de riesgos en la escena. Cumple una función preventiva y de control, porque alerta a terceros, delimita la zona de riesgo y mantiene el orden en el entorno. Eso resulta decisivo en escenarios abiertos o de alta circulación, donde la falta de control multiplica los eventos secundarios.
        p.mb-3 Ambas herramientas se eligen a partir de la evaluación de la escena y de los riesgos identificados. Una brigadista de una planta de alimentos que atiende un corte usa guantes y gafas; si el mismo corte ocurre en la vía frente a la planta, añade un chaleco reflectivo y señales para el tránsito.
        .cajon.cajon.c04.p-4.mb-0
          p.mb-0 El ejemplo muestra que no existe un equipo único para todas las emergencias, sino una selección que se ajusta al riesgo presente en cada escena. La pregunta que orienta esa selección es qué parte del cuerpo queda expuesta y ante qué agente, ya sean fluidos, salpicaduras, partículas en el aire o vehículos en movimiento.
    p El ejemplo muestra que no existe un equipo único para todas las emergencias, sino una selección que se ajusta al riesgo presente en cada escena. La pregunta que orienta esa selección es qué parte del cuerpo queda expuesta y ante qué agente, ya sean fluidos, salpicaduras, partículas en el aire o vehículos en movimiento.
    p.mb-4 Conocer la función de cada elemento evita tanto el exceso que retrasa la atención como la omisión que expone a quien interviene. Según el tipo de riesgo, los elementos se seleccionan así:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img25.svg' alt='AvatarTop')
          h4.text-center Guantes desechables
          p.text-center Evitan el contacto directo con fluidos corporales y reducen el riesgo de contaminación. Son el elemento mínimo en cualquier atención con sangre o secreciones y se descartan después de un solo uso.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img26.svg' alt='AvatarTop')
          h4.text-center Gafas de protección
          p.text-center Previenen la exposición de las mucosas oculares a salpicaduras, en especial durante procedimientos cercanos al rostro de la persona afectada o cuando hay sangrado abundante que salpica.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img27.svg' alt='AvatarTop')
          h4.text-center Mascarilla o tapabocas
          p.text-center Protege las vías respiratorias frente a partículas o agentes infecciosos cuando hay tos, estornudos o proximidad prolongada con la persona afectada, sobre todo en espacios cerrados o mal ventilados.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img28.svg' alt='AvatarTop')
          h4.text-center Barreras de protección corporal
          p.text-center Batas o delantales que proporcionan mayor cobertura en escenarios de alto riesgo o exposición prolongada, como la atención simultánea de varias personas con heridas abiertas o sangrantes.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img29.svg' alt='AvatarTop')
          h4.text-center Prendas de alta visibilidad
          p.text-center Chalecos y bandas reflectivas que hacen perceptible al respondiente para los conductores en vías y espacios abiertos, de día y sobre todo de noche o con lluvia.
    .row.justify-content-center.mb-4
      .cajon.cajon.c01.color-secundario.p-4.mb-0
        p.mb-0 Usar los elementos de protección no se limita a colocarlos, sino que supone verificar su estado, retirarlos de forma segura y disponerlos correctamente para evitar la contaminación cruzada. En Colombia, su uso en el ámbito laboral está respaldado por el Decreto 1072 de 2015, ya citado, dentro del Sistema de Gestión de Seguridad y Salud en el Trabajo.
    p Para que la señalización cumpla su función debe ser perceptible, clara y estar ubicada de manera estratégica. Los elementos deben identificarse con facilidad, comprenderse sin explicación y colocarse a una distancia que advierta el riesgo con anticipación. Con frecuencia el respondiente improvisa con lo que tiene, como un vehículo con luces de emergencia, una prenda de color vivo, una rama.
    p.mb-4 Improvisar no significa actuar sin método. Con un cono o con una rama, la señalización cumple el mismo propósito, que consiste en que quienes se aproximan perciban el peligro a tiempo y modifiquen su conducta antes de llegar al lugar. Para lograrlo no basta con colocar un objeto llamativo, sino que se requiere una secuencia de decisiones sobre dónde, cómo y hasta cuándo señalizar. Esa secuencia comprende cuatro acciones:
    .row.mb-4
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4 Delimitar el área de intervención
          p.mb-0 Se establece un perímetro claro que indique la zona de riesgo y separe el espacio de atención del espacio de circulación, con los elementos que se tengan a mano.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-right")
        .tarjeta-numerada.color-secundario.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4 Advertir la presencia del peligro
          p.mb-0 Se usan elementos que capten la atención de quienes se aproximan, por su color, su reflectividad o su luz, de día y de noche, y a una distancia suficiente.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="flip-left")
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4 Ubicar la señalización con anticipación
          p.mb-0 Se consideran la velocidad de circulación, las curvas y las condiciones del entorno, de modo que quien conduce tenga tiempo de reaccionar antes de llegar al lugar.
      .col-lg.col-md-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta-numerada.c01.p-5
          .tarjeta-numerada__numero
            .h2 4
          h4 Mantener el control del área
          p.mb-0 Se evita la alteración o el retiro de los elementos señalizadores hasta que la escena quede a cargo de los organismos de emergencia, sin importar cuánto tarden en llegar.
    p.mb-4 La señalización se articula de manera directa con el aseguramiento de la escena, ya que facilita el control de accesos, reduce la interferencia de personas no autorizadas y permite el ingreso seguro de los servicios de emergencia. En el contexto colombiano, estas prácticas se relacionan con el Código Nacional de Tránsito, que regula el uso de dispositivos de advertencia en las vías.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img30.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Cuando el incidente ocurre en una vía o en un espacio abierto, la señalización necesita alcanzar a quienes todavía están lejos. Esa extensión de la señalización a distancia tiene técnica y nombre propios, el balizaje.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Balizaje
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t4/img31.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3 El balizaje es la técnica de seguridad que delimita, señaliza y protege una zona de riesgo mediante dispositivos perceptibles a distancia, en especial en escenarios donde es necesario advertir con anticipación sobre la presencia de un incidente. Su aplicación resulta fundamental en espacios abiertos y en condiciones de baja visibilidad, como los accidentes de tránsito en vías de alta circulación.
        .cajon.cajon.c02.color-primario.p-4.mb-3
          p.mb-0 A diferencia de la señalización general, el balizaje tiene un carácter más operativo. No solo informa sobre la presencia de un peligro, sino que establece una barrera perceptible que orienta el comportamiento de las personas y regula el flujo en el entorno. De esa manera contribuye al aseguramiento de la escena, reduce la probabilidad de incidentes secundarios y facilita una intervención más segura.
        p.mb-0 Los elementos del balizaje son conos, triángulos reflectivos, luces intermitentes, cintas, bengalas de seguridad y, a falta de ellos, cualquier objeto disponible que mejore la visibilidad. En Colombia, el Código Nacional de Tránsito establece el uso de señales de advertencia cuando un vehículo se detiene en la vía por emergencia (Congreso de la República de Colombia, 2002).
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-8.col-12
        .tarjeta.tarjeta-c04.px-2.py-2.h-100
          p.mb-0.text-center Lo que define un buen balizaje no es el elemento sino su disposición, que responde a cuatro principios:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Anticipación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Ubicar los dispositivos a una distancia adecuada, considerando la velocidad de circulación, la pendiente y las condiciones del entorno, de modo que haya tiempo de reacción. Lectura habitual: en una vía rápida, la primera señal se coloca mucho antes del punto del incidente, y más lejos aún si hay una curva o una pendiente que oculte la escena.
          .row(numero="2" titulo="Progresividad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Delimitar un perímetro perceptible y escalonado, que anuncie la zona de riesgo de manera gradual y no de golpe frente al lugar del incidente. Lectura habitual: los conos se disponen en diagonal, del borde de la vía hacia el carril ocupado, de modo que el conductor se desplace poco a poco hacia el carril libre.
          .row(numero="3" titulo="Visibilidad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Garantizar que los elementos sean perceptibles en condiciones de baja iluminación o de clima adverso, mediante materiales reflectivos o luces propias. Lectura habitual: de noche o con lluvia, el triángulo sin reflectividad no cumple su función y se refuerza con las luces de emergencia del vehículo detenido y con una linterna.
          .row(numero="4" titulo="Permanencia")
            .col-12.mb-4.mb-md-0
              p.mb-0 Mantener la estabilidad de los dispositivos y evitar su desplazamiento o retiro durante toda la atención, hasta que los organismos de emergencia asuman el control. Lectura habitual: un cono liviano volcado por el viento deja de proteger; se lastra o se reemplaza sin esperar a que ocurra un segundo choque.
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img23.jpg', alt='')
    p Estos cuatro principios se cumplen al mismo tiempo o no se cumplen, pues un dispositivo bien anticipado pero sin visibilidad nocturna, o perceptible pero mal ubicado, deja la escena expuesta. Ninguno compensa la ausencia de otro, ya que cada uno resuelve una parte distinta del problema, esto es, cuándo advertir, cómo desviar, con qué hacerse notar y durante cuánto tiempo sostener la protección. Por esa razón el balizaje se evalúa como un conjunto y no dispositivo por dispositivo.
    p.mb-4 Esa combinación se comprende mejor de forma gráfica, porque cada principio ocupa un tramo distinto de la vía y en un orden que no admite alteraciones. La siguiente figura recorre ese trayecto completo en cuatro zonas consecutivas, desde el primer dispositivo que advierte el peligro hasta el espacio libre donde trabajan quienes atienden. Identificar dónde empieza y dónde termina cada zona permite reconocer, en cualquier vía, cuánto espacio exige una escena protegida:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Disposición del balizaje en una vía
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t4/img32.svg', alt='La figura 1 representa la disposición del balizaje en una vía en cuatro zonas consecutivas: advertencia, transición, trabajo y seguridad, que protegen la escena desde la perspectiva del conductor.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t4/img33.svg', alt='La figura 1 representa la disposición del balizaje en una vía en cuatro zonas consecutivas: advertencia, transición, trabajo y seguridad, que protegen la escena desde la perspectiva del conductor.')
    p La figura anterior pone de manifiesto que el balizaje se diseña desde la perspectiva de quien conduce y no de quien atiende. La protección de la escena comienza mucho antes del lugar del incidente, allí donde el conductor todavía tiene tiempo de reaccionar.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img34.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") El balizaje protege a quien atiende tanto como a quien es atendido. Una escena en vía sin dispositivos de advertencia convierte al respondiente en la siguiente víctima probable.
    p.mb-0 Con la escena asegurada, protegida y señalizada, el riesgo que queda por controlar es el que no se identifica de inmediato, es decir, los agentes biológicos presentes en la sangre y en las secreciones de la persona afectada. Controlarlos es el objeto de la bioseguridad, y el último eslabón del proceso es la activación del sistema de emergencias.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
