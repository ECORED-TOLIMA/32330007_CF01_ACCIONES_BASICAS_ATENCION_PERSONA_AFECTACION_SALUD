<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Escena, incidente y riesgos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img01.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p Toda emergencia ocurre en un lugar y tiene una causa. El lugar es la escena; la causa es el incidente; y entre ambos se distribuyen los riesgos que amenazan a la persona afectada, al respondiente y a quienes se acercan. Comprender esas tres nociones es el primer paso de cualquier atención, porque orienta la toma de decisiones antes de que exista contacto con el lesionado.
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 La distinción tiene consecuencias prácticas. Una misma lesión, una fractura de pierna, por ejemplo, exige acciones distintas si ocurre en la cocina de una casa, en una carretera de montaña o en una planta de producción con maquinaria en movimiento. Lo que cambia no es la lesión sino la escena, y con ella el conjunto de peligros que deben controlarse antes de intervenir.
        p.mb-0 En una obra de construcción, un ayudante cae de un andamio. Quien llega primero se enfrenta a un incidente (la caída), a una escena (el andamio, los materiales, la altura) y a varios riesgos (objetos que pueden desprenderse, cables, otros trabajadores que se aglomeran).
    .row.justify-content-center.align-items-center.mb-4
      .cajon.cajon.c04.p-3
        p.mb-0(data-aos="fade-down") El ejemplo anterior muestra que, ante un mismo hecho, el primer respondiente necesita distinguir varias cosas a la vez, como el lugar y las condiciones que lo rodean, el evento que dio origen a la emergencia, la posibilidad real de acercarse sin peligro, la naturaleza de cada riesgo presente y las medidas con que se reduce. Cada una de esas distinciones se convierte en una decisión concreta durante la atención, y por eso conviene comprenderlas por separado antes de integrarlas en la acción. A continuación, se presentan los cinco aspectos que orientan esa valoración de la emergencia:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img02.svg' alt='AvatarTop')
          h4.text-center Escena y sus tipos          
          p.text-center El espacio físico donde ocurre el evento y su clasificación según el nivel de seguridad que ofrece, desde la escena segura hasta la que exige esperar apoyo especializado.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img03.svg' alt='AvatarTop')
          h4.text-center Incidente          
          p.text-center El evento que desencadena la emergencia y las condiciones que lo rodean, como el mecanismo de lesión y la energía involucrada, que anticipan las lesiones probables antes del contacto.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img04.svg' alt='AvatarTop')
          h4.text-center Evaluación de la escena          
          p.text-center El proceso continuo con el que se determina si es posible intervenir y en qué condiciones, y que se repite cada vez que el entorno cambia durante la atención.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img05.svg' alt='AvatarTop')
          h4.text-center Tipos de riesgos          
          p.text-center La clasificación de los peligros presentes según su origen físico, biológico, químico, ambiental, mecánico o psicosocial, y según el lugar donde ocurre el incidente, sea el hogar, la vía o el trabajo.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t2/img06.svg' alt='AvatarTop')
          h4.text-center Reducción del riesgo          
          p.text-center Las acciones con las que se disminuye la probabilidad de daño o se mitigan sus efectos, desde controlar la fuente del peligro hasta pedir apoyo y mantener la distancia.
    p.mb-4 Los cinco aspectos siguen el orden real de una intervención. Primero se reconoce dónde ocurrió el evento y luego qué ocurrió; después se evalúa si es seguro acercarse, se identifican los riesgos y, por último, se actúa sobre ellos para reducirlos.
    .row.justify-content-center.mb-0
      .cajon.cajon.c01.color-secundario.p-4
        p.mb-0 Ese orden no es una convención, sino una exigencia de la propia emergencia. Antes de saber qué ocurrió, de calcular los riesgos o de decidir cómo reducirlos, quien llega necesita reconocer el lugar y clasificarlo, porque de esa valoración inicial depende si puede acercarse de inmediato o si debe esperar apoyo especializado. Comprender qué es la escena y cuáles son sus tipos aporta ese criterio, y por eso constituye el punto de partida del recorrido.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Escena y sus tipos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img07.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La escena es el espacio físico donde se presenta una situación que afecta la salud o la integridad de una persona. Incluye el lugar mismo, las condiciones ambientales, los objetos presentes, las personas que rodean el evento y los peligros activos o latentes. No se limita al punto exacto donde está el lesionado, sino que abarca todo lo que puede influir en la intervención. Identificar esas características generales es el primer paso para decidir cómo actuar.
        br 
        br 
        p.mb-0 Clasificar la escena es fundamental para decidir. La categoría en que se ubica define el nivel de riesgo, la forma de intervención más adecuada y el momento en que conviene esperar. Esa clasificación orienta la seguridad del respondiente, organiza la respuesta y ayuda a priorizar las acciones cuando los recursos son escasos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img08.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") Una escena, además, no es estática. Un incendio en una vivienda comienza como una escena insegura, pasa a controlada cuando llegan los bomberos y puede volver a ser insegura si una viga cede. Por eso la clasificación se repite tantas veces como cambien las condiciones.
    p.mb-4 Clasificar la escena exige un criterio compartido, de modo que dos personas que llegan al mismo lugar tomen la misma decisión. La tabla 2 ofrece ese criterio, pues reúne los siete tipos de escena más frecuentes, desde la segura hasta la de riesgo químico o ambiental. La primera columna nombra cada tipo, la segunda describe las características que permiten reconocerlo y la tercera indica la actuación recomendada. Conviene recorrerla fila por fila, identificando primero a qué tipo corresponde el lugar para saber después qué hacer en él:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Clasificación de la escena según sus condiciones de riesgo
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de escena
                th(data-aos="fade-down")(style= "width: 40%") Características principales
                th(data-aos="fade-down")(style= "width: 40%") Actuación recomendada
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escena segura
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Condiciones estables, sin amenazas evidentes ni riesgos activos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Intervención inmediata aplicando los protocolos de primeros auxilios.
              tr
                td(data-aos="fade-down") Escena insegura
                td(data-aos="fade-down") Fuego, tránsito sin control, violencia, estructuras inestables o sustancias peligrosas.
                td(data-aos="fade-down") No intervenir directamente. Activar el sistema de emergencias y esperar el control del riesgo.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escena potencialmente insegura
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Riesgos ocultos o cambiantes y condiciones inestables.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evaluación constante y actuación con precaución. Uso estricto de medidas de seguridad.
              tr
                td(data-aos="fade-down") Escena controlada
                td(data-aos="fade-down") Presencia de organismos de emergencia, señalización y control de riesgos.
                td(data-aos="fade-down") Intervención coordinada con otros actores, siguiendo sus indicaciones de seguridad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escena con múltiples víctimas
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Varias personas afectadas de manera simultánea y alta complejidad.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Organizar la atención, priorizar y activar de inmediato el apoyo especializado.
              tr
                td(data-aos="fade-down") Escena de riesgo biológico
                td(data-aos="fade-down") Presencia de fluidos corporales o enfermedades transmisibles.
                td(data-aos="fade-down") Aplicar medidas estrictas de bioseguridad y usar elementos de protección personal.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Escena de riesgo químico o ambiental
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gases, sustancias químicas, contaminación o condiciones extremas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evitar la exposición directa y activar los organismos especializados.
    p.mb-4 La tabla deja una regla clara, según la cual la intervención directa solo procede en escenas seguras o controladas. En las demás, la primera acción del respondiente es activar el sistema de emergencias y protegerse, aunque la persona afectada esté a pocos metros. Esa espera no es indiferencia, sino la única manera de evitar una segunda víctima.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img09.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-3
          p.mb-0(data-aos="fade-down") Una escena insegura no se vuelve segura porque haya alguien herido en ella. Entrar sin control del riesgo suma una víctima más y retrasa la ayuda que ya venía en camino.
    p.mb-4 Asignar un tipo de escena no es un ejercicio de memoria, sino un procedimiento breve que se cumple en segundos y siempre en el mismo orden. Seguirlo evita el error más frecuente del primer respondiente, que consiste en entrar al lugar guiado por la urgencia y clasificarlo cuando ya está dentro. La secuencia es la siguiente:
    .row.align-items-center.mb-4
      .col-lg-11.col-12
        LineaTiempoE.color-secundario
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img10.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Identificar los peligros desde una distancia segura
              p Antes de entrar se reconocen el fuego, el humo, el tránsito, los cables, las estructuras dañadas o las personas agresivas que puedan afectar a quien se acerca.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Establecer si el peligro sigue activo
              p Se determina si la amenaza continúa, si ya fue controlada por alguien o si puede reaparecer, porque de esa condición depende el tipo de escena.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img12.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Contar a las personas afectadas y presentes
              p Se precisa cuántas personas necesitan atención y quiénes más se encuentran en el lugar, ya que una sola víctima y varias exigen decisiones distintas.
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t2/img13.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Asignar el tipo de escena y decidir
              p Con esa información se ubica el lugar en una de las categorías de la tabla 2 y se adopta la actuación que le corresponde, desde intervenir de inmediato hasta esperar apoyo.
    p La secuencia es corta porque la escena no espera. Sin embargo, cada paso descarta una decisión equivocada, es decir, entrar donde no se debe, subestimar un peligro que sigue activo o atender a una persona sin advertir que hay otras. Clasificar bien es, en últimas, decidir bien.
    p.mb-0 Con el lugar ya reconocido y clasificado, la valoración queda a medio camino. Saber que la escena es segura o controlada autoriza a acercarse, pero no dice qué le ocurrió a la persona ni qué lesiones cabe esperar. Esa información proviene del evento que dio origen a la emergencia, cuya identificación orienta las primeras acciones de atención y los datos que se entregan al sistema de emergencias.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Incidente
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c03.p-4.h-100.w-100
          .row.align-items-center.mb-4
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img15.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") El incidente es el evento que da origen a la situación de emergencia y, por tanto, el punto de partida de la intervención. Identificarlo responde a tres preguntas, es decir, qué ocurrió, cómo ocurrió y dónde ocurrió. Las respuestas anticipan las posibles consecuencias sobre la salud de la persona afectada y sobre el entorno.
          p.mb-0(data-aos="fade-down") Los incidentes tienen causas diversas, como accidentes de tránsito, caídas, quemaduras, intoxicaciones, eventos cardiovasculares, crisis convulsivas o situaciones de violencia. Cada uno presenta características propias que influyen en la valoración de la escena y en la definición de las acciones. Un desmayo en una oficina climatizada y una caída desde un tejado comparten la consecuencia de una persona en el suelo, pero no comparten ni la causa ni el riesgo.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img14.jpg', alt='')
    p.mb-4 Cuando ya se sabe qué ocurrió, el análisis continúa con las condiciones que rodearon el hecho, porque dos incidentes con el mismo nombre pueden producir lesiones muy distintas. Una caída, por ejemplo, no significa lo mismo si fue desde una silla o desde un andamio, sobre césped o sobre concreto, en un día seco o bajo la lluvia. Para interpretarla se tienen en cuenta tres condiciones:
    .row.justify-content-center.mb-4(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img16.svg", alt="alt").img80.m-auto
          h4.text-center El mecanismo de lesión
          p La forma en que la fuerza actuó sobre el cuerpo, como un golpe directo, una caída, una compresión, una quemadura o la inhalación de una sustancia. Orienta sobre el tipo de lesión que cabe esperar.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img17.svg", alt="alt").img80.m-auto
          h4.text-center La energía involucrada
          p La cantidad de fuerza que recibió la persona, determinada por la velocidad, la altura, el peso o la temperatura. A mayor energía, mayor probabilidad de lesiones graves, aunque no sean evidentes.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t2/img18.svg", alt="alt").img80.m-auto
          h4.text-center Los factores ambientales
          p Las condiciones del entorno que agravan el cuadro o crean nuevos peligros, como la lluvia, el calor, la oscuridad, el humo o la presencia de tránsito.
    p.mb-4 Las tres condiciones se valoran juntas, porque ninguna explica el incidente por sí sola. El mecanismo indica el tipo de daño, la energía su posible gravedad y el ambiente las complicaciones que pueden sumarse. Un caso sencillo permite comprobarlo.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img19.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-3
          p.mb-0(data-aos="fade-down") En una carretera de montaña, un motociclista que resbala y cae a alta velocidad absorbe más energía que un ciclista que se va al suelo mientras está detenido en un semáforo. Esa diferencia hace prever lesiones internas, aunque no haya sangre.
    p.mb-4 Interpretar el mecanismo, la energía y el ambiente no es un ejercicio aislado, sino parte de un análisis que avanza siempre en el mismo orden. Primero se establece qué pasó, luego se identifican los factores que pueden agravar la situación y, con esa base, se define qué hacer y a quién llamar. Ese orden convierte la información dispersa de la escena en decisiones, y sus tres momentos que se presentan a continuación:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Para que la intervención quede cubierta por ese margen de protección deben cumplirse cuatro condiciones:
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="Incidente")
            .col-12.mb-0.mb-md-0
              p Establecer qué ocurrió, cómo ocurrió y dónde ocurrió, a partir de lo que se reconoce al llegar y de lo que cuentan los testigos presentes. Caso de uso: la persona que atiende un choque pregunta a los presentes si hubo vuelco, a qué velocidad iban los vehículos y cuántos ocupantes había en cada uno.
          .row(titulo="Factores asociados")
            .col-12.mb-0.mb-md-0
              p Identificar el mecanismo de lesión, la energía involucrada y las condiciones del entorno que pueden agravar el cuadro o generar nuevos peligros. Caso de uso: una caída desde tres metros sobre concreto hace sospechar lesión de columna, por lo que se evita mover a la persona hasta que llegue el apoyo.
          .row(titulo="Decisiones")
            .col-12.mb-0.mb-md-0
              p Definir los riesgos que deben controlarse, la atención inicial que corresponde y la necesidad de activar el sistema de emergencias con información precisa. Caso de uso: ante una intoxicación por gas en una vivienda, se ventila el espacio, se retira a la persona si es seguro hacerlo y se llama al 123.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img20.png', alt='')
    p La secuencia va de los hechos a las decisiones. Saltarse el primer momento conduce a intervenir sin saber qué pasó; saltarse el segundo lleva a subestimar lesiones que no se detectan de inmediato. Comprender el incidente también facilita la activación del sistema de emergencias, porque la información que se transmite al operador es clara y precisa.
    p.mb-0 Esa información clara y precisa solo se logra cuando el incidente y la escena se valoran juntos. El incidente explica por qué ocurrió la emergencia y qué lesiones cabe esperar; la escena indica en qué condiciones es posible intervenir y qué peligros siguen presentes. Por separado, cada valoración deja un vacío, pues conocer la causa no protege de un riesgo activo y reconocer el lugar no anticipa el daño. Integrarlas en un procedimiento ordenado, que se repite mientras dura la atención, es lo que da lugar a la evaluación de la escena.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Evaluación de la escena
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img21.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c01.color-secundario.p-4.mb-3
          p.mb-0 Llegar a un lugar y decidir si es posible acercarse exige un proceso sistemático y continuo, mediante el cual se identifican los riesgos, se determinan las condiciones de seguridad y se orienta la intervención inicial. Ese proceso, que se conoce como evaluación de la escena, se realiza antes de la atención y durante ella, y tiene como propósito proteger al respondiente, a la persona afectada y a quienes se encuentran en el entorno.
        p Lo que distingue este proceso de una simple inspección de llegada es su carácter continuo. El lugar que parecía estable al inicio puede transformarse en cuestión de minutos, y la valoración hecha al comienzo deja de ser válida sin que nadie lo advierta. Algunas situaciones frecuentes lo muestran:
        .cajon.c02.p-4.d-flex.align-items-center
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Un vehículo accidentado puede incendiarse por el combustible derramado o el calor del motor.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Una multitud puede alterarse y presionar, empujar o interferir con la atención.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 La lluvia puede convertir una vía en una superficie resbaladiza para quien atiende y para quien transita.
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Un cable caído puede volver a energizarse cuando se restablece el servicio eléctrico.
    p.mb-4 En todos los casos el riesgo aparece después de la primera valoración y no antes. Quien la da por terminada al llegar queda expuesto a un peligro que no existía cuando decidió acercarse.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img22.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 Mantener esa alerta durante toda la atención no depende de la intuición, sino de cuatro principios que guían cada decisión. La seguridad va primero, porque ninguna acción justifica una nueva víctima. La inspección general precede al detalle, porque el peligro más grave no siempre está junto al lesionado. La decisión es explícita, porque intervenir o esperar es una elección consciente y no un impulso. Y la reevaluación es constante, porque la escena de hace un minuto ya no existe.
        p Los principios orientan el criterio, pero en el lugar de los hechos se traducen en acciones concretas que siguen siempre el mismo orden. Al llegar se inspecciona el conjunto del lugar; luego se identifican los riesgos presentes; con ellos se valora si la seguridad permite intervenir; después se decide cómo actuar y con qué protección, y durante toda la atención se vigila que las condiciones no hayan cambiado. Esos cinco pasos, que se repiten mientras duran en la atención, se describen a continuación:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Inspección inicial")
            .col-12.mb-4.mb-md-0
              p.mb-0 Al llegar, se examina el conjunto del lugar para reconocer con rapidez las condiciones generales y los posibles peligros, sin fijarse todavía en la persona afectada. Forma de aplicación: antes de acercarse a un trabajador caído en una bodega de Palmira, se examina el conjunto del lugar, con el techo, el piso, los cables y la maquinaria.
          .row(numero="2" titulo="Identificación de riesgos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se determinan los factores físicos, ambientales, biológicos, químicos o humanos que pueden afectar la seguridad de quien interviene y de los demás presentes. Forma de aplicación:  se detecta que hay un cable expuesto cerca del cuerpo y un charco de agua bajo él, una combinación que convierte el lugar en una trampa eléctrica.
          .row(numero="3" titulo="Valoración de la seguridad")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se decide si existen condiciones adecuadas para intervenir o si es necesario esperar apoyo especializado, con base en los riesgos identificados. Forma de aplicación:  mientras el cable no esté desenergizado, la escena se considera insegura, no se toca a la persona y se llama a quien puede cortar la energía.
          .row(numero="4" titulo="Decisión de intervención")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se establece el nivel de actuación posible, las medidas de protección que se usarán y el momento en que conviene entrar. Forma de aplicación: con la energía cortada por el encargado, se ingresa con guantes, se delimita el área y se pide a los curiosos que se retiren.
          .row(numero="5" titulo="Monitoreo continuo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Se vigila la escena durante toda la atención para detectar cambios en las condiciones y ajustar la intervención cuando sea necesario. Forma de aplicación: se asigna a un compañero la tarea de avisar si alguien reconecta la energía, si entran más personas o si aparece un nuevo peligro.
      .col-lg-4.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img23.jpg', alt='')
    .row.row.justify-content-center.mb-4
      .col-lg-10.col-12
        p.mb-0 Estos cinco pasos forman un ciclo y no una lista que se agota. Cada vez que el monitoreo detecta un cambio, la evaluación vuelve a la identificación de riesgos y a la valoración de la seguridad. Esa circularidad es lo que hace posible prevenir incidentes secundarios y mantener la atención bajo condiciones controladas.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t2/img24.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") La evaluación termina siempre en una lista de riesgos identificados. Para actuar sobre ellos es necesario reconocer de qué tipo son, porque un riesgo eléctrico no se controla igual que uno biológico ni que uno derivado del comportamiento de una multitud.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipos de riesgos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c03.p-3.h-100.w-100
          p.mb-3 Un riesgo es la probabilidad de que un peligro existente cause daño a las personas, afecte la salud o deteriore el entorno. En la escena, los riesgos se asocian a condiciones físicas del lugar, a la presencia de agentes peligrosos y a comportamientos humanos. Reconocerlos a tiempo hace posible establecer medidas de prevención, control y mitigación.
          .row.align-items-center.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img26.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Clasificar los riesgos facilita su identificación y su manejo. Cada categoría se asocia con un tipo de daño y con medidas de control propias. De ahí que la clasificación no sea un ejercicio teórico sino una herramienta para decidir con rapidez qué hacer frente a cada peligro.
          p.mb-0(data-aos="fade-down") El análisis de riesgos no es una actividad aislada. Comienza al llegar al lugar y se mantiene durante toda la atención, articulado con la evaluación de la escena, que le entrega los peligros detectados, y con la reducción del riesgo, que recibe de él las prioridades de control.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img25.jpg', alt='')
    p.mb-4 La siguiente tabla clasifica los riesgos según su origen, de modo que para cada tipo describe la condición que lo produce, ofrece ejemplos reconocibles y señala las medidas de control con las que se enfrenta:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Clasificación de los riesgos presentes en una escena
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de riesgo
                th(data-aos="fade-down")(style= "width: 40%") Ejemplos
                th(data-aos="fade-down")(style= "width: 40%") Medidas de control
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Físico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Caídas, objetos cortantes, estructuras inestables, tránsito vehicular.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Señalización, delimitación del área y control del acceso.
              tr
                td(data-aos="fade-down") Biológico
                td(data-aos="fade-down") Sangre, secreciones, enfermedades infecciosas.
                td(data-aos="fade-down") Elementos de protección personal, higiene de manos y bioseguridad.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Químico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Gases, combustibles, productos de limpieza, derrames.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evitar el contacto, ventilar el área y usar protección especializada.
              tr
                td(data-aos="fade-down") Ambiental
                td(data-aos="fade-down") Lluvia, calor extremo, oscuridad, ruido excesivo.
                td(data-aos="fade-down") Protección personal, adaptación al entorno e iluminación adecuada.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mecánico
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Equipos industriales, herramientas, vehículos en operación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Detener la maquinaria, asegurar los equipos y mantener distancia segura.
              tr
                td(data-aos="fade-down") Psicosocial
                td(data-aos="fade-down") Multitudes alteradas, agresividad, pánico.
                td(data-aos="fade-down") Control de la situación, comunicación efectiva y apoyo de las autoridades.
    p Lo que la tabla revela es que las medidas de control se repiten entre categorías, pues delimitar, proteger, distanciar y pedir apoyo aparecen una y otra vez. Eso significa que un respondiente con pocos recursos puede enfrentar la mayoría de los riesgos con las mismas cuatro acciones, siempre que los haya reconocido a tiempo.
    p.mb-4 Reconocer el tipo de riesgo permite elegir la acción; reconocer el lugar permite anticiparla. Un mismo peligro no se presenta igual en todas partes, porque cada espacio de la vida cotidiana reúne condiciones, objetos y personas que lo hacen más probable. Por eso, además de clasificar los riesgos por su origen, conviene relacionarlos con el sitio donde suelen ocurrir los incidentes, y la mayoría se concentra en tres entornos, el hogar, la vía pública y el ambiente de trabajo, cada uno con peligros característicos:
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img27.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        TabsA.color-acento-botones.mb-3
          .tarjeta.tarjeta-c06.p-4(titulo="En el hogar")
            p Predominan las caídas, las quemaduras en la cocina, las intoxicaciones por productos de aseo o medicamentos y las instalaciones eléctricas inseguras. Los adultos mayores y los niños son quienes más se exponen a estos peligros.
          .tarjeta.tarjeta-c06.p-4(titulo="En la vía pública")
            p Dominan los riesgos del tránsito vehicular, las aglomeraciones, la falta de iluminación y las condiciones ambientales adversas, que se agravan en las vías rurales sin señalización ni alumbrado.
          .tarjeta.tarjeta-c06.p-4(titulo="En el ambiente de trabajo")
            p Los riesgos dependen de la actividad y pueden incluir maquinaria, sustancias peligrosas, trabajo en alturas y condiciones ergonómicas o psicosociales específicas de cada oficio y de cada puesto.
        p.mb-0 Conocer los riesgos típicos de cada entorno acelera la evaluación, ya que quien entra a una cocina busca primero el fogón y el gas; quien llega a una vía busca primero el tránsito. Esa anticipación reduce el tiempo entre la llegada y la primera medida de protección.
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-4
          p.mb-0 No todos los riesgos presentes en una escena tienen el mismo peso. Algunos son evidentes y exigen acción inmediata, como el fuego o el tránsito; otros permanecen latentes, como un cable sin aislar bajo el agua o una estructura debilitada, y solo se manifiestan cuando alguien entra en contacto con ellos. Distinguir unos de otros evita que el peligro más notorio oculte al más grave.
    p.mb-4 Cuando en una escena coinciden varios peligros no es posible controlarlos todos al mismo tiempo, y la decisión por cuál empezar no puede dejarse a la intuición. La valoración del riesgo ordena esa decisión con tres criterios que se aplican a cada peligro identificado, de modo que el primero en atenderse sea el que combina mayor probabilidad, mayor daño posible y mayor cercanía a las personas:
    .row.mb-4
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img28.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Probabilidad
              p.mb-0.text-center Qué tan posible es que el peligro cause daño en las condiciones actuales de la escena.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img29.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Gravedad
              p.mb-0.text-center La magnitud del daño que produciría si llega a materializarse, desde una lesión leve hasta la muerte.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/img30.svg' alt='')
          .tarjeta.color-primario
            .p-4
              h4.text-center Exposición
              p.mb-0.text-center El número de personas que están al alcance del peligro y el tiempo durante el cual lo estarán.
    p Un riesgo con alta probabilidad, alta gravedad y varias personas expuestas se atiende antes que cualquier otro, aunque no sea el más llamativo del lugar.
    p.mb-0 Ordenar los riesgos por prioridad indica por dónde empezar, pero no cambia por sí mismo las condiciones del lugar. Un peligro identificado, clasificado y puesto en primer lugar sigue siendo un peligro mientras nadie actúe sobre él. El paso siguiente consiste en intervenir para que deje de amenazar a las personas, y esa intervención tiene un nombre y un método propios, la reducción del riesgo.
    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Reducción del riesgo
    p.mb-4 Actuar sobre un peligro significa disminuir la probabilidad de que cause un daño o mitigar sus efectos si llega a materializarse. Ese conjunto de acciones, que recibe el nombre de reducción del riesgo, se fundamenta en la identificación de los peligros, en el análisis de las condiciones del entorno y en la valoración de su posible impacto, con el fin de establecer medidas de control adecuadas.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img31.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Lo que distingue esta etapa de las anteriores es que ya no se trata de saber, sino de hacer. Hasta aquí el primer respondiente ha reconocido el lugar, comprendido el incidente y ordenado los peligros; ahora debe modificar la realidad para que la atención sea posible. Esa acción no exige equipos especiales ni conocimientos técnicos, sino decisiones tomadas en el orden correcto, desde retirar la fuente del peligro hasta pedir apoyo cuando nada más resulta suficiente.
    p.mb-4 Esas decisiones no dependen solo del criterio de quien ayuda, pues en el país existe un marco legal que define qué significa reducir un riesgo y cómo se articula con las demás fases de la gestión del riesgo. Conocerlo permite comprender que la actuación del primer respondiente forma parte de una política nacional y no de una iniciativa aislada, como se presenta a continuación:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-5.col-12.order-lg-2.order-2
        .cajon.c01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") En Colombia, la noción se enmarca en la Ley 1523 de 2012, que adopta la política nacional de gestión del riesgo de desastres (Congreso de la República de Colombia, 2012). Esa norma define la reducción del riesgo como uno de sus tres procesos, junto con el conocimiento y el manejo. Aunque la ley se ocupa de eventos de gran escala, su lógica se aplica a la escena de cualquier incidente, esto es, conocer el riesgo, reducirlo y manejar lo que no se pudo evitar.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img32.svg', alt='')
    .row.justify-content-center.mb-4
      .col.col-12.col-lg-10
        .cajon.cajon.c02.p-4.mb-4 
          p.mb-0 Un caso sencillo permite comprender cómo se aplica ese marco en una situación cotidiana. En una fábrica de confecciones, una operaria sufre un corte con una máquina. Reducir el riesgo significa apagar la máquina, retirar a los compañeros que se agolpan, señalizar el puesto y ponerse guantes antes de atender la herida.
        p.mb-0 Apagar, retirar, señalizar y protegerse no son gestos improvisados, sino la expresión de una misma lógica que reduce el riesgo por cuatro vías. La primera elimina o controla la fuente del peligro; la segunda delimita y señaliza el área para que nadie más se exponga; la tercera protege a quien interviene con los elementos disponibles, y la cuarta activa el sistema de emergencias cuando el riesgo supera la capacidad de control. Esas cuatro acciones se presentan a continuación:
    .row.justify-content-center.mb.lg-4
      .col.col-lg-10.col-12
        ImagenInfografica.color-acento-botones.desktop.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t2/img33.svg', alt='')
          .tarjeta.color-secundario.p-3(x="31%" y="38%" numero="1")
            p.mb-0 Se interrumpe el peligro cuando es seguro hacerlo, antes de cualquier otra acción. Puesta a prueba: cerrar la llave del gas, desconectar la energía o detener una máquina antes de acercarse.
          .tarjeta.color-secundario.p-3(x="69%" y="38%" numero="2")
            p.mb-0 Se marca el área de riesgo y se restringe el acceso de personas ajenas. Puesta a prueba: un cono, una cinta o un vehículo con luces de emergencia advierten a los demás y protegen al respondiente.
          .tarjeta.color-secundario.p-3(x="31%" y="89%" numero="3")
            p.mb-0 Se usan los elementos de protección disponibles según el riesgo identificado, sin excepciones. Puesta a prueba: guantes ante fluidos corporales, chaleco reflectivo en una vía, tapabocas ante síntomas respiratorios.
          .tarjeta.color-secundario.p-3(x="69%" y="89%" numero="4")
            p.mb-0 Se solicita apoyo especializado cuando el riesgo supera la capacidad de control. Puesta a prueba: ante un derrame químico se llama al 123 y se mantiene la distancia hasta que llegue el personal entrenado.
        p.mt-4 Las cuatro acciones no se eligen al azar ni se aplican todas a la vez, sino en orden de preferencia. Primero se intenta quitar el peligro y, si no es posible, se aísla; después se protege a quien interviene y, cuando nada de eso basta, se pide ayuda y se espera. Ese orden importa porque cada acción es más segura que la siguiente, y respetarlo evita que una medida menor, como ponerse guantes, sustituya a una decisión mayor, como no entrar a un lugar con gas.
        .row.justify-content-center.align-items-center.mb-0
          .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t2/img35.svg', alt='')
          .col.col-lg-11.col-12.order-lg-2.order-2
            .cajon.cajon.c04.px-3.py-2
              p.mb-0(data-aos="fade-down") Reducir el riesgo no siempre es hacer algo. A veces la medida más eficaz es no entrar, mantener la distancia y esperar a quien tiene los medios para controlar el peligro.
    .row.justify-content-center.col-12.mb-4
      figure.movil
        img(src='@/assets/curso/temas/t2/img34.svg', alt='')
    p.mb-0 Hasta aquí el riesgo se ha tratado como algo que ya está presente en la escena. Sin embargo, muchos incidentes pueden evitarse antes de que ocurran, con hábitos y condiciones que reducen la probabilidad del daño. Esa anticipación es el terreno de la prevención y el autocuidado.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
