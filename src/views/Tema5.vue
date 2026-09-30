<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Bioseguridad y sistema de emergencias médicas
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La bioseguridad comprende el conjunto de principios, medidas y prácticas orientadas a prevenir, controlar y reducir la exposición a agentes biológicos que puedan afectar la salud de las personas. En la atención de emergencias protege al respondiente y a la persona afectada, sobre todo cuando hay contacto con sangre, secreciones u otros fluidos corporales potencialmente contaminados.
    p.mb-4 No es una acción puntual sino un proceso continuo, que comienza antes del contacto con la persona afectada, se mantiene durante la atención y termina con la disposición segura de los elementos utilizados. En Colombia se respalda en los lineamientos del Ministerio de Salud y Protección Social y en el Sistema de Gestión de Seguridad y Salud en el Trabajo. Este último obliga a identificar, evaluar y controlar el riesgo biológico en los distintos entornos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img02.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.px-3.py-1
          p.mb-0(data-aos="fade-down") La bioseguridad, sin embargo, no cierra la atención inicial. Una auxiliar de una droguería que atiende a un cliente con una herida profunda aplica guantes y presión, pero su acción más importante es la llamada al 123 y la información que entrega al operador.
    p.mb-4 Esa llamada muestra que protegerse del riesgo biológico y activar la ayuda especializada forman parte del mismo momento de la atención. Una barrera bien puesta evita el contagio, pero solo el sistema de emergencias resuelve lo que excede la capacidad de quien atiende, y ambas cosas dependen además de los recursos que haya a la mano. El tema reúne esos tres asuntos y los desarrolla en cinco apartados:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg02(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-0
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t5/img03.png", alt="")
            .col-lg-8.px-0.py-0
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img04.svg", alt="").img100.m-auto
                  h4.text-center Principios y elementos de protección personal
                  p.text-center Las reglas que estandarizan la conducta preventiva frente a cualquier persona atendida y las barreras físicas que hacen posible cumplirlas en cada escena de emergencia.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img05.svg", alt="").img100.m-auto
                  h4.text-center Técnicas de bioseguridad
                  br
                  p.text-center Las prácticas que se ejecutan antes, durante y después del contacto con la persona afectada, desde la higiene de manos hasta el manejo de los materiales usados.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img06.svg", alt="").img100.m-auto
                  h4.text-center Riesgo biológico y mecanismos de transmisión
                  p.text-center Los agentes que amenazan la salud del respondiente y las vías por las que pasan de una fuente de infección a una persona susceptible.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img07.svg", alt="").img100.m-auto
                  h4.text-center Sistema de emergencias médicas
                  p.text-center El número de emergencias, los componentes que responden y el procedimiento de activación que conectan la atención inicial con los servicios especializados de salud y socorro.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t5/img08.svg", alt="").img100.m-auto
                  h4.text-center Botiquín de primeros auxilios
                  p.text-center El recurso material que hace posible la atención inicial, con las características que debe cumplir y el contenido básico organizado por función, sin medicamentos de prescripción.
    p.mb-0 Los cinco apartados completan el recorrido iniciado con la normatividad, porque cada uno resuelve una parte de lo que ocurre después de asegurar el lugar. Quien conoce sus deberes, valora la escena, previene y protege el área llega a este punto con el entorno bajo control, aunque todavía expuesto a lo que no se ve. Lo que sigue es aprender a interponer barreras, a pedir ayuda con precisión y a disponer de los elementos que hacen posible la atención.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Principios y elementos de protección personal
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img09.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los principios de bioseguridad constituyen la base conceptual y operativa para la prevención del riesgo biológico durante la atención de emergencias. Su aplicación orienta la conducta del respondiente de manera estandarizada, reduce la probabilidad de exposición a agentes infecciosos y garantiza condiciones seguras, con independencia del tipo de incidente o de la apariencia de la persona afectada.
        br
        br
        p.mb-0 Los principios no se aplican de forma aislada, sino que actúan de manera integrada desde el reconocimiento de la escena hasta la finalización del procedimiento. Comprenderlos implica aplicarlos de manera consciente y permanente en cada acción, y no solo conocer su enunciado.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img10.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") En un restaurante, una mesera atiende a un comensal que sangra por la nariz. No sabe nada de la historia clínica de esa persona y, aun así, se pone guantes, usa una servilleta limpia como barrera y bota los desechos en una bolsa aparte.
    p.mb-4 La mesera no piensa en principios mientras actúa, pero cada uno de sus gestos responde a uno. Tratar al comensal como si pudiera transmitir una infección, poner algo entre su sangre y las propias manos y separar los desechos son decisiones que la bioseguridad ha convertido en reglas universales. Reconocerlas en una situación cotidiana ayuda a aplicarlas de manera consciente en cualquier otra. Los tres principios que se cumplen en ese gesto son los siguientes:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t5/img11.svg", alt="alt").img80.m-auto
          h4.text-center Universalidad
          p Todas las personas se consideran potencialmente portadoras de agentes infecciosos, sin importar su apariencia o su diagnóstico. En el terreno: se aplican las mismas medidas de protección a cualquier persona, desde un niño en un colegio hasta un desconocido en la calle.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t5/img12.svg", alt="alt").img80.m-auto
          h4.text-center Uso de barreras 
          p Se interponen elementos de protección personal que evitan el contacto directo con fluidos o materiales contaminados. En el terreno: guantes, mascarilla o gafas según el riesgo, y a falta de ellos una bolsa o una tela limpia como barrera.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd01.crd--grayGrad
          .bottomCircle01.mb-5
            figure
              img(src="@/assets/curso/temas/t5/img13.svg", alt="alt").img80.m-auto
          h4.text-center Eliminación segura de residuos
          p Los materiales contaminados se disponen de manera adecuada para evitar la propagación de infecciones. En el terreno: gasas, guantes y apósitos usados se depositan en una bolsa cerrada y no en la caneca común ni en el suelo.
    p.mb-4 Cuando se aplican en conjunto, los tres principios establecen una conducta preventiva constante que minimiza la transmisión de enfermedades y fortalece la seguridad en la escena. De ellos se desprende el uso de los elementos de protección personal, que en la bioseguridad funcionan como barreras.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 Los elementos de protección personal ya descritos en el aseguramiento de la escena cumplen aquí una función específica, que consiste en interrumpir el contacto con sangre, secreciones y superficies contaminadas. Su selección se basa en la evaluación de la escena y en el tipo de exposición prevista, y su uso se realiza de manera sistemática, en coherencia con el principio de universalidad.
    p.mb-4 Tener los elementos adecuados no garantiza protección si se usan de cualquier manera. Un guante que se coloca tarde, o que se retira tocando su cara externa, traslada el agente infeccioso justo cuando la atención parece terminada. Por eso el uso de los elementos se organiza como una secuencia con momentos definidos, cada uno con una acción precisa, que se repite de la misma forma en toda intervención. Los cuatro momentos de esa secuencia son los siguientes:
    .row.mb-4
      .col-lg-11.col-12
        LineaTiempoE.color-secundario
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t5/img14.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Verificar los elementos antes de acercarse
              p Se revisa el estado y la disponibilidad de guantes, mascarilla y gafas, y se descartan los guantes rotos o las mascarillas húmedas.
          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t5/img15.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Colocarlos antes de cualquier contacto
              p Comenzando por la mascarilla y las gafas y terminando con los guantes, que son los últimos en ponerse y los primeros en retirarse.
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t5/img16.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Evitar tocarse el rostro
              p El celular o las superficies limpias mientras se llevan puestos los guantes contaminados, porque cada contacto traslada el agente infeccioso.
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/t5/img17.svg', alt='')
            .col-lg-10.mb-4.mb-lg-0
              h4 Retirarlos de forma segura al terminar
              p De dentro hacia fuera y sin tocar la cara externa, y disponerlos en una bolsa cerrada antes de lavarse las manos.
    p.mb-0 El orden de colocación y de retiro no es un detalle, ya que la mayoría de las exposiciones ocurren al quitarse los guantes contaminados sin cuidado. Con los elementos puestos, la protección depende de cómo se actúa, es decir, de las técnicas de bioseguridad.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Técnicas de bioseguridad
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img18.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 En la atención de emergencias, el conjunto de prácticas estandarizadas que previenen la exposición a agentes biológicos y evitan la transmisión de enfermedades constituye lo que se conoce como técnicas de bioseguridad. Complementan el uso de los elementos de protección personal y se ejecutan de manera rigurosa y continua antes, durante y después del contacto con la persona afectada.
        .cajon.cajon.c02.color-primario.p-3.mb-3
          p.mb-0 Su aplicación adecuada mantiene condiciones seguras en la escena, reduce el riesgo de contaminación cruzada y garantiza una atención responsable. Las técnicas no son acciones aisladas sino parte de un proceso sistemático que acompaña toda la intervención, y su eficacia depende de la disciplina, de la conciencia del riesgo y de la adherencia a los protocolos.
        .cajon.cajon.c04.p-4.mb-0
          p.mb-0 Un conductor de ambulancia que traslada a un paciente con una herida infectada lo sabe bien. El riesgo no termina cuando el paciente baja del vehículo, sino cuando la camilla y las superficies quedan limpias y las manos lavadas.
    p.mb-4 La siguiente tabla organiza las técnicas principales, describe en qué consiste cada una y precisa el momento y la forma de aplicarla durante la atención, de modo que se siga como una secuencia de antes, durante y después:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Técnicas de bioseguridad en la atención de emergencias
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Técnica
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Aplicación en la atención
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Higiene de manos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Medida básica para eliminar microorganismos y prevenir su transmisión.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Antes y después de la atención, con agua y jabón o con solución a base de alcohol.
              tr
                td(data-aos="fade-down") Uso adecuado de elementos de protección
                td(data-aos="fade-down") Colocación, uso y retiro correctos de las barreras de protección.
                td(data-aos="fade-down") Antes del contacto con la persona afectada y retiro seguro al finalizar.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evitar el contacto directo con fluidos
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Prevención de la exposición a sangre, secreciones u otros fluidos.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Uso permanente de barreras durante toda la atención.
              tr
                td(data-aos="fade-down") Manejo seguro de materiales
                td(data-aos="fade-down") Manipulación adecuada de los elementos contaminados.
                td(data-aos="fade-down") No reutilizar materiales y desecharlos en bolsa cerrada después de su uso.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Prevención de contaminación cruzada
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Control de la transferencia de microorganismos entre personas o superficies.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evitar tocar superficies innecesarias y limpiar las utilizadas al terminar.
    p.mb-4 La información presentada en la tabla anterior, confirma que las técnicas se distribuyen a lo largo de toda la atención y no solo en el momento del contacto. La higiene de manos abre y cierra el proceso, las barreras lo acompañan y el manejo de materiales lo concluye, de manera que ningún momento queda sin una práctica protectora.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img19.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.p-3
          p.mb-0(data-aos="fade-down") La higiene de manos sigue siendo la medida más eficaz contra la transmisión de infecciones, pues cuesta menos que cualquier equipo y falla solo cuando se omite.
    p En la atención de primeros auxilios, estas medidas adquieren especial importancia, ya que el contacto con sangre, secreciones o superficies contaminadas ocurre con frecuencia y, muchas veces, de forma imprevista. Incorporarlas como una rutina reduce la probabilidad de transmisión y convierte la prevención en un hábito, antes que en una reacción improvisada durante la emergencia.
    p.mb-4 Entre las principales técnicas de bioseguridad se encuentran las siguientes, cada una con un propósito específico dentro de la prevención:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img20.svg', alt='')(style="width: 85%")
            h4.text-center Higiene de manos
            br
            p.mb-4(data-aos="fade-down") Técnica de lavado o desinfección que elimina los microorganismos presentes en la piel; se realiza antes y después de cada atención para interrumpir la cadena de transmisión de los agentes infecciosos que se alojan en las manos.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img21.svg', alt='')(style="width: 85%")
            h4.text-center Elementos de protección personal (EPP)
            p.mb-4(data-aos="fade-down") Barreras físicas, como guantes, tapabocas y gafas, que evitan el contacto directo con fluidos corporales; se seleccionan según el procedimiento y se retiran con cuidado para no contaminar la piel ni la ropa.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img22.svg', alt='')(style="width: 85%")
            h4.text-center Manejo de residuos
            br
            p.mb-4(data-aos="fade-down") Conjunto de acciones para separar, almacenar y disponer los materiales usados en la atención; permite aislar los desechos contaminados y evitar que se conviertan en una nueva fuente de infección para otras personas.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t5/img23.svg', alt='')(style="width: 85%")
            h4.text-center Limpieza y desinfección
            br
            p.mb-4(data-aos="fade-down") Procedimiento que retira la suciedad visible y reduce la carga microbiana de superficies e instrumentos; asegura que los elementos reutilizables queden libres de agentes patógenos antes de emplearse en una nueva atención.
    .row.justify-content-center.mb-4
      .col-12
        .cajon.cajon.c02.color-primario.p-4.mb-0
          p.mb-0 Estas cuatro técnicas no funcionan de manera aislada, sino que se complementan entre sí para cubrir los distintos momentos de la atención. Comprender el propósito de cada una permite aplicarlas con criterio y no de forma mecánica. Así, la prevención deja de ser una lista de pasos y se convierte en una práctica consciente y segura.
    p.mb-4 En la práctica, estas técnicas se traducen en acciones concretas que el auxiliador aplica durante la atención:
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-9.col-12.order-lg-2.order-2
        .cajon.c01.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Lavar las manos con agua y jabón durante al menos veinte segundos, antes y después de atender a la persona. 
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Colocar guantes limpios antes del contacto con sangre o secreciones y cambiarlos entre una atención y otra. 
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Usar tapabocas y gafas cuando exista riesgo de salpicaduras de fluidos durante la maniobra de primeros auxilios. 
            li.mb-2
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Desechar el material contaminado en bolsa roja y no reutilizar guantes ni apósitos ya empleados.
      .col-lg-3.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img24.svg', alt='')
    p.mb-0 Llevar estas acciones a la práctica no requiere condiciones especiales, sino disposición y constancia por parte de quien auxilia. Cada gesto, por sencillo que parezca, reduce la posibilidad de contagio en el momento de la atención. Incorporarlos como un hábito es lo que marca la diferencia entre una intervención segura y una que pone en riesgo a todos.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Riesgo biológico y mecanismos de transmisión
    p.mb-4 En la atención inicial, la exposición a microorganismos patógenos presentes en sangre, secreciones u otros fluidos corporales, capaces de generar enfermedades infecciosas, constituye lo que se conoce como riesgo biológico. Esta condición adquiere una relevancia crítica en las emergencias por la posibilidad de contacto directo con la persona afectada y con materiales potencialmente contaminados.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img25.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los agentes implicados son bacterias, virus, hongos y parásitos, que se transmiten sobre todo por el contacto con fluidos corporales o con superficies contaminadas. En los primeros auxilios, el riesgo aumenta ante heridas abiertas, hemorragias, presencia de secreciones o procedimientos que implican cercanía con la persona afectada. Un aspecto crítico es que el riesgo no siempre es evidente, ya que una persona puede ser portadora sin manifestar signos ni síntomas, y por eso el manejo se apoya en el principio de universalidad.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img26.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.px-3.py-1
          p.mb-0(data-aos="fade-down") La transmisión no ocurre de manera aislada sino a través de un proceso en el que intervienen una fuente de infección, un mecanismo de transmisión y una persona susceptible. Ese proceso se conoce como cadena de transmisión, y comprenderlo señala dónde es posible intervenir para interrumpirla.
    p.mb-4 La siguiente figura representa esa cadena, pues sitúa en secuencia la fuente, el mecanismo, la persona susceptible y la posible infección, y se lee de izquierda a derecha como el recorrido del agente infeccioso:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Cadena de transmisión de agentes biológicos en la atención inicial
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img27.svg', alt='La figura 2 representa la cadena de transmisión en cuatro eslabones, fuente, mecanismo, persona susceptible e infección, que las medidas de bioseguridad interrumpen.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img28.svg', alt='La figura 2 representa la cadena de transmisión en cuatro eslabones, fuente, mecanismo, persona susceptible e infección, que las medidas de bioseguridad interrumpen.')
    .row.justify-content-center.mb-4
      .col-12.col-lg-10
        .cajon.cajon.c01.color-secundario.p-4.mb-0
          p.mb-0 De acuerdo con la cadena descrita, la infección es el resultado de una secuencia completa y no de un solo contacto. Por esa razón, basta con romper uno de sus eslabones, casi siempre el mecanismo de transmisión, para que el agente no alcance a la persona susceptible.
    p.mb-4 Para romper el eslabón es necesario reconocerlo en la escena, porque el mecanismo de transmisión no se presenta con un nombre sino como un gesto cotidiano, ya sea una mano sin guante, unas tijeras reutilizadas o una tos cercana. Cada mecanismo tiene una señal que lo delata y una barrera que lo interrumpe, y saber asociarlas es lo que convierte la bioseguridad en una práctica y no en una lista. En la atención de emergencias operan cuatro mecanismos:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Para que la intervención quede cubierta por ese margen de protección deben cumplirse cuatro condiciones:
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="Contacto directo")
            .col-12.mb-0.mb-md-0
              p Ocurre cuando la piel o las manos tocan sangre, secreciones u otros fluidos corporales de la persona afectada. Es el mecanismo más frecuente en la atención de heridas y hemorragias. Señal concreta: una persona que comprime una herida sin guantes y tiene una cortada en el dedo queda expuesta al agente infeccioso.
          .row(titulo="Contacto indirecto")
            .col-12.mb-0.mb-md-0
              p El agente infeccioso pasa a través de objetos o superficies contaminadas, como gasas, guantes usados, instrumentos o cualquier elemento que tuvo contacto con fluidos. Señal concreta: reutilizar unas tijeras que cortaron ropa ensangrentada sin limpiarlas contamina el siguiente uso y expone a la siguiente persona atendida y a quien la atiende.
          .row(titulo="Vía respiratoria")
            .col-12.mb-0.mb-md-0
              p Se produce por la inhalación de partículas o secreciones expulsadas al toser, estornudar o hablar, sobre todo en espacios cerrados o con ventilación limitada. Señal concreta: atender a una persona con tos persistente en un cuarto pequeño y sin mascarilla expone a quien la atiende y a quienes esperan afuera.
          .row(titulo="Exposición de mucosas")
            .col-12.mb-0.mb-md-0
              p Fluidos contaminados entran en contacto con los ojos, la nariz o la boca. Es menos frecuente, pero de riesgo significativo en procedimientos cercanos al rostro. Señal concreta: una salpicadura de sangre en el ojo durante el control de una hemorragia arterial, cuando no se usan gafas de protección.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img29.png', alt='')
    p Estos cuatro mecanismos comparten una condición, porque necesitan un punto de contacto sin barrera. De ahí que las medidas de bioseguridad, desde la higiene de manos hasta la mascarilla, actúen como interruptores de la cadena y eviten que el agente infeccioso alcance a la persona susceptible.
    p.mb-0 Con el riesgo biológico controlado, la atención inicial ha cumplido su parte. Lo que sigue depende de otros actores, como los servicios de salud, los cuerpos de socorro y las autoridades que integran el sistema de emergencias, al que el respondiente debe saber llamar.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Sistema de emergencias médicas
    p.mb-4 El sistema de emergencias médicas es el conjunto organizado de instituciones, recursos y procedimientos destinados a brindar respuesta oportuna ante situaciones que afectan la salud, la seguridad o la integridad de las personas. Su activación garantiza una atención especializada y articula la intervención del primer respondiente con los servicios de salud y los organismos de socorro.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img30.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.c02.color-primario.p-3.mb-3
          p.mb-0 En Colombia, el sistema se articula con el Sistema Nacional para la Gestión del Riesgo de Desastres de la Ley 1523 de 2012 y con las redes de prestación de servicios de salud. Esa articulación hace posible una respuesta coordinada frente a eventos de distinta magnitud. Los lineamientos de atención prehospitalaria fijan, además, las condiciones de los servicios de traslado y de los centros reguladores (Ministerio de Salud y Protección Social, 2017).
        .row.justify-content-center.align-items-center.mb-4
          .col.col-lg-2.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img31.svg', alt='')
          .col.col-lg-10.col-12.order-lg-2.order-2
            p.mb-0(data-aos="fade-down") El acceso se realiza a través de la línea 123, que funciona como número único de emergencias en la mayoría de las ciudades del país e integra a la policía, las ambulancias y los bomberos. En algunas regiones existen además líneas específicas, como el 125 para salud o el 119 para bomberos.
        .cajon.cajon.c04.p-3.mb-0
          h4 Un ejemplo ayuda a comprender cómo opera esta cadena.
          p.mb-0 Cuando una docente de un colegio rural llama al 123 porque un niño presenta una convulsión, activa a varios actores que no están a la vista. Cada uno cumple una función distinta, y la eficacia de la respuesta depende de que todos actúen de manera coordinada y entreguen el relevo al siguiente hasta que el niño reciba la atención que necesita.
    p.mb-4 En esta cadena de respuesta intervienen varios actores, cada uno con un rol propio y complementario. Desde quien brinda la primera ayuda en el lugar del evento hasta el centro que coordina la atención y los servicios que la prestan, todos aportan un eslabón indispensable para que la persona reciba el cuidado oportuno. Estos son los actores que intervienen y la función que cumple cada uno:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img32.svg' alt='AvatarTop')
          h4.text-center Comunidad y primer respondiente
          br
          p.text-center Representan el primer nivel de respuesta, porque identifican el incidente, activan el sistema y brindan la atención inicial mientras llegan los servicios especializados al lugar del evento.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img33.svg' alt='AvatarTop')
          h4.text-center Centros Reguladores de Urgencias y Emergencias (CRUE)
          p.text-center Coordinan la atención en salud, gestionan la referencia de pacientes y optimizan la disponibilidad de servicios, para que la persona sea trasladada al lugar adecuado.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img34.svg' alt='AvatarTop')
          h4.text-center Servicios de salud
          br
          p.text-center Incluyen ambulancias, personal prehospitalario y centros asistenciales encargados de la atención médica, la estabilización y el traslado del paciente hasta el nivel de complejidad que su condición exige.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img35.svg' alt='AvatarTop')
          h4.text-center Cuerpos de socorro
          br
          p.text-center Comprenden bomberos, Defensa Civil y grupos de rescate, encargados del control de riesgos, la atención de desastres y el rescate en situaciones de difícil acceso o alto riesgo.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t5/img36.svg' alt='AvatarTop')
          h4.text-center Fuerza pública
          br
          p.text-center Incluye a la policía y a otras autoridades que garantizan la seguridad en la escena, controlan el orden público y facilitan la intervención de los demás actores del sistema.
    p.mb-4 La articulación de estos componentes produce una respuesta organizada, evita la duplicidad de acciones y mejora la capacidad de atención frente a eventos de distinta magnitud. El primer respondiente es el único de ellos que ya está en el lugar, y por eso la calidad de su llamada determina la rapidez de todos los demás.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img37.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") La activación es el proceso mediante el cual se solicita la intervención de los servicios de respuesta ante una situación que supera la capacidad de atención inicial.
    p.mb-4 De su oportunidad y de su calidad depende la movilización de recursos, y por eso la comunicación con el operador se realiza de forma estructurada, en cinco pasos:
    PasosA.color-secundario.mb-4(tipo="n")
      .row.justify-content-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          h4 Identificar la necesidad de apoyo
          p.mb-0 Reconocer las situaciones que requieren intervención especializada, sin esperar a comprobar si la atención inicial funciona o si la persona mejora sola. Ejemplo cotidiano: una persona que no responde, una hemorragia que no cede o un dolor en el pecho justifican la llamada de inmediato.
        .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/t5/img38.svg', alt="")
      .row.justify-content-center
        .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/t5/img39.svg', alt="")
        .col-lg-10(data-aos="fade-left")
          h4 Establecer contacto con la línea de emergencias
          p.mb-0 Marcar el número disponible en la región, por lo general el 123, desde el teléfono más cercano o pidiendo a otra persona que lo haga. Ejemplo cotidiano: en una escena con varias personas, se señala a alguien concreto y se le pide que llame y regrese a confirmar.
      .row.justify-content-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          h4 Proporcionar información clara y precisa
          p.mb-0 Indicar la ubicación exacta con referencias, el tipo de incidente, el número de personas afectadas y las condiciones evidentes de cada una. Ejemplo cotidiano: «Carrera 5 con calle 20, frente a la panadería, choque de moto y carro, una persona consciente que sangra de la pierna».
        .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/t5/img40.svg', alt="")
      .row.justify-content-center
        .col-lg-2.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/t5/img41.svg', alt="")
        .col-lg-10(data-aos="fade-left")
          h4 Responder a las indicaciones del operador
          p Mantener la comunicación y seguir las instrucciones, que pueden incluir maniobras de primeros auxilios guiadas por teléfono mientras llega la ayuda al lugar del incidente. 
          p.mb-0 Ejemplo cotidiano: el operador orienta cómo hacer presión sobre la herida mientras la ambulancia se desplaza hacia el lugar.
      .row.justify-content-center
        .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
          h4 No interrumpir la comunicación de manera anticipada
          p.mb-0 Colgar solo cuando el operador lo autorice, para asegurar que la información esté completa y que el recurso enviado sea el adecuado para el caso. Ejemplo cotidiano: el operador pide confirmar el número de contacto y la referencia de acceso antes de finalizar la llamada.
        .col-lg-2.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/t5/img42.svg', alt="")
    p.mb-4 Una activación oportuna reduce los tiempos de respuesta, mejora la preparación del equipo que llega y aumenta las probabilidades de una intervención eficaz. Una activación tardía o con información incompleta retrasa la atención y afecta el pronóstico de la persona afectada.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img43.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") La llamada al 123 no es el final de la ayuda sino su multiplicación, porque convierte a una persona sola frente a un incidente en el primer eslabón de una cadena de respuesta.
    p.mb-0 Mientras el sistema de emergencias se moviliza, la atención no se detiene, continúa en el lugar del evento con los recursos que allí se encuentran disponibles. De todos ellos, el que más aporta a una respuesta oportuna es el botiquín de primeros auxilios, siempre que esté completo y bien mantenido. Contar con los elementos adecuados y saber emplearlos permite estabilizar a la persona afectada durante los minutos que transcurren hasta la llegada del personal especializado. Por esa razón, conocer qué debe contener un botiquín y cómo mantenerlo listo para su uso resulta tan decisivo como dominar las maniobras de atención.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Botiquín de primeros auxilios
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img44.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-1.order-2
        .cajon.cajon.c02.color-primario.p-3.mb-4
          p.mb-0 El botiquín de primeros auxilios es el conjunto de elementos básicos organizados para brindar atención inicial ante situaciones que afectan la salud. Su efectividad no depende únicamente de lo que contiene, sino de las condiciones en que se encuentra disponible, es decir, accesible, organizado, conservado y completo.
        p.mb-4(data-aos="fade-down") Esas condiciones hacen que los insumos estén en buen estado, faciliten la intervención y reduzcan el riesgo de errores durante la atención. Un botiquín cerrado con llave, guardado en una oficina lejana o lleno de elementos vencidos deja de ser un recurso y se convierte en una falsa seguridad.
        .cajon.cajon.c04.p-3.mb-0
          p.mb-0 El uso del botiquín se realiza de manera responsable. Se aplican medidas de bioseguridad, se emplean únicamente los elementos necesarios y se evitan procedimientos para los que no hay formación. Tampoco se incluyen medicamentos sin prescripción, porque su uso inadecuado genera riesgos. En una empresa de transporte, la brigada revisa cada mes los botiquines de los buses, repone lo usado y descarta lo vencido.
    p.mb-4 En la siguiente tabla reúne las características que debe cumplir un botiquín, de modo que para cada una describe el requisito técnico y explica por qué importa en la atención, de modo que sirva como lista de verificación:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Características del botiquín de primeros auxilios
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 40%") Descripción técnica
                th(data-aos="fade-down")(style= "width: 40%") Importancia en la atención
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Accesibilidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Ubicado en un lugar conocido, señalizado y sin obstrucciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Permite una respuesta rápida en situaciones de emergencia.
              tr
                td(data-aos="fade-down") Identificación
                td(data-aos="fade-down") Marcado con el símbolo de primeros auxilios (cruz verde o blanca).
                td(data-aos="fade-down") Facilita su reconocimiento inmediato por cualquier persona.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Organización
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Elementos clasificados, ordenados y en condiciones higiénicas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Reduce errores y optimiza el tiempo de intervención.
              tr
                td(data-aos="fade-down") Protección
                td(data-aos="fade-down") Resguardado de la humedad, el calor, el polvo y la contaminación.
                td(data-aos="fade-down") Garantiza la integridad y la efectividad de los insumos.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Mantenimiento
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Revisión periódica de fechas de vencimiento, estado y reposición.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Evita el uso de materiales vencidos o en mal estado.
              tr
                td(data-aos="fade-down") Disponibilidad
                td(data-aos="fade-down") Dotado con todos los elementos necesarios según el contexto de uso.
                td(data-aos="fade-down") Asegura una atención adecuada sin limitaciones.
              tr
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Adaptabilidad
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Contenido ajustado al lugar: hogar, trabajo o vehículo.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Responde a los riesgos específicos de cada contexto.
    p.mb-4 Según la tabla, casi todas las características dependen de la organización que administra el botiquín y no de la persona que lo usa en la emergencia. De ahí que el mantenimiento sea una actividad programada, que consiste en revisar el estado de los elementos, reemplazar los vencidos y reponer los utilizados.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img45.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.p-4
          p.mb-0(data-aos="fade-down") El contenido del botiquín se organiza por función, lo que facilita su identificación y su uso durante la intervención.
    p.mb-4 Organizar el botiquín por función responde a una necesidad práctica, ya que durante una emergencia nadie tiene tiempo de revisar cada compartimento para encontrar una gasa. Agrupar los elementos según lo que hacen, ya sea limpiar, cubrir, proteger o cortar, permite ubicarlos sin pensar y reponerlos con criterio después de cada uso. Esa organización también facilita comprobar con rapidez qué elementos deben reponerse antes de una emergencia. Los elementos básicos se agrupan en cuatro categorías:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Material de curación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Gasas estériles, vendas elásticas y de tela, apósitos adhesivos, esparadrapo y algodón, destinados a limpiar, cubrir, proteger y fijar la cobertura de heridas y raspaduras de distinto tamaño.
          .row(numero="2" titulo="Elementos de protección")
            .col-12.mb-4.mb-md-0
              p.mb-0 Guantes desechables y tapabocas, que garantizan la bioseguridad de quien atiende y de la persona afectada, y que se reponen después de cada uso porque son de un solo uso.
          .row(numero="3" titulo="Instrumental básico")
            .col-12.mb-4.mb-md-0
              p.mb-0 Tijeras de punta roma, pinzas y termómetro, para cortar ropa o vendas, retirar cuerpos extraños superficiales y valorar la temperatura corporal sin causar nuevas lesiones a la persona.
          .row(numero="4" titulo="Soluciones, antisépticos y otros elementos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Solución salina para limpiar heridas, antisépticos como la yodopovidona o la clorhexidina, bolsas para residuos y un manual básico de primeros auxilios de consulta rápida.
      .col-lg-6.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img46.jpg', alt='')
    p.mb-4 Las cuatro categorías cubren las necesidades de la atención inicial, que son limpiar, cubrir, proteger y orientar. Todo lo que exceda ese alcance, en particular los medicamentos, corresponde al personal de salud y no al botiquín de un hogar, un vehículo o un puesto de trabajo.
    .row.justify-content-center.align-items-stretch.mb-0.g-0
      .col-lg-8.col-12.order-lg-1.order-2
        .cajon.c03.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") El botiquín cierra el recorrido porque reúne, en un objeto cotidiano, todo lo desarrollado en los cinco ejes de la atención segura. Quien lo usa con criterio ya sabe que su intervención está respaldada y limitada por la ley, que la escena se evalúa antes de actuar y que los riesgos se reducen antes de tocar a la persona afectada. Sabe también que la prevención evita muchas emergencias, que la seguridad y el balizaje protegen a todos los presentes y que la bioseguridad y la llamada al 123 completan la cadena de atención. En el hogar, en la vía o en el trabajo, en cualquier municipio del país, ese conjunto de saberes convierte a un ciudadano común en un primer respondiente capaz de reconocer la escena y asegurarla con responsabilidad.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img47.jpg', alt='')
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
