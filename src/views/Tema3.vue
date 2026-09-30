<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Prevención y autocuidado
    p.mb-4 La mejor emergencia es la que no ocurre. Antes de la escena, del incidente y del riesgo existe un espacio de decisiones cotidianas que determina cuántas veces una persona necesitará ayuda y con qué condición de salud la recibirá. Ese espacio es el de la prevención y el autocuidado, dos nociones que hacen parte de la atención inicial, aunque se ejerzan mucho antes de ella.
    figure.mb-4
      img(src='@/assets/curso/temas/t3/img01.png', alt='')
    p.mb-4 Ambas se articulan con los principios de la gestión del riesgo y con los lineamientos de promoción y prevención del sector salud, que buscan disminuir la carga de enfermedad y los eventos prevenibles. Desde el punto de vista del primer respondiente, importan por dos razones:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img02.svg', alt='')(style="width: 100%")
            h4.text-center Reducen la frecuencia de los incidentes
            p.mb-4(data-aos="fade-down") Los hábitos seguros en el hogar, la vía y el trabajo evitan que muchas emergencias lleguen a ocurrir, de modo que el primer respondiente interviene menos veces y en escenas menos complejas.
          .col-xl.col-lg-6.tarjeta.tarjeta-c07.p-5
            .row.justify-content-center.mb-3
              .col-lg-4.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img03.svg', alt='')(style="width: 100%")
            h4.text-center Modifican la gravedad de cualquier evento
            p.mb-4(data-aos="fade-down") La condición previa de la persona afectada, es decir, su estado físico, sus enfermedades de base y sus hábitos, determina qué tan grave resulta un mismo incidente y qué tan rápida es su recuperación.
    p Las dos razones muestran que la prevención no es un asunto ajeno a la emergencia, sino su antecedente directo, porque decide cuántas veces ocurre y con qué gravedad se presenta. Lo que una persona hace por su salud en los días corrientes se convierte en ventaja o en desventaja el día del incidente.
    p.mb-4 Esa doble influencia de la prevención, sobre la frecuencia de los incidentes y sobre su gravedad, no es una idea abstracta. Un caso tomado del ámbito laboral muestra cómo se manifiesta en quienes atienden emergencias a diario.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img04.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") Una brigadista de una empresa de logística lo comprueba cada día, pues los compañeros que usan el arnés duermen lo suficiente y mantienen controlada su presión arterial sufren menos accidentes y se recuperan mejor cuando los sufren.
    p.mb-4 La prevención se ejerce en tres planos que se complementan. El primero es el cuidado de la propia salud mediante hábitos cotidianos; el segundo, la protección frente a las enfermedades que pueden contraerse o transmitirse durante la atención; y el tercero, la reducción de las lesiones en los lugares donde transcurre la vida diaria. Cada uno de esos planos se presenta a continuación:
    .row.justify-content-center
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img05.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Autocuidado y estilos de vida saludable
            h5.t2.mb-2 Autocuidado y estilos de vida saludable
            p.mb-0 Las prácticas conscientes con las que cada persona protege su salud y mejora su capacidad de respuesta ante un evento adverso, desde la alimentación hasta el descanso.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img06.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Prevención de enfermedades
            h5.t2.mb-2 Prevención de enfermedades
            p.mb-0 Las acciones que evitan la aparición de alteraciones de la salud y protegen al respondiente y a la persona afectada frente a agentes biológicos durante la atención.
      .col-xl-4.col-lg-4.col-md-10.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/t3/img07.jpg", alt="")
          .crd_hover_txt--body
            h5.t1.mb-3 Prevención de lesiones
            h5.t2.mb-2 Prevención de lesiones
            p.mb-0 Las medidas que reducen la probabilidad de daño físico en el hogar, en la vía pública y en el trabajo, y que dependen de la familia, de cada usuario y del empleador.
    p.mb-4 Los tres apartados comparten una idea, según la cual la seguridad no comienza cuando suena la sirena, sino en los hábitos y en las condiciones que cada persona y cada organización mantienen todos los días.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.c03.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") Esa idea cambia el lugar que ocupa el primer respondiente frente a la emergencia. Ya no es solo quien actúa cuando el daño ocurrió, sino alguien que puede reducir la probabilidad de que ocurra y la gravedad con que se presenta. Cada decisión cotidiana sobre la propia salud y sobre el entorno es, en la práctica, una intervención temprana que nadie ve, pero que se refleja el día del incidente.
          .row.align-items-center.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img09.svg', alt='')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") En las organizaciones ocurre lo mismo a mayor escala. Un lugar de trabajo con instalaciones mantenidas, personal formado y rutinas de revisión produce menos emergencias y las enfrenta con más orden que uno donde todo se improvisa. Por eso la prevención se entiende como un deber compartido entre la persona, la empresa y el sistema de salud, y no como una recomendación opcional.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img08.jpg', alt='')
    p.mb-4 Llevar esa idea a la práctica supone atender unos frentes concretos, presentes en cualquier hogar, vía o lugar de trabajo, que anticipan la emergencia antes de que se presente. Los principales son los siguientes:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta-c02.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img10.svg', alt='')(style="width: 85%")
            h4.text-center Condición de salud del respondiente
            p.mb-4(data-aos="fade-down") El estado físico, las vacunas al día y el control de las enfermedades propias permiten intervenir sin convertirse en una segunda víctima.
          .col-xl.col-lg-6.tarjeta.tarjeta-c03.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img11.svg', alt='')(style="width: 85%")
            h4.text-center Preparación previa
            p.mb-4(data-aos="fade-down") La formación en primeros auxilios, el conocimiento del botiquín y de las rutas de evacuación acortan el tiempo entre el incidente y la primera acción útil.
          .col-xl.col-lg-6.tarjeta.tarjeta-c04.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img12.svg', alt='')(style="width: 85%")
            h4.text-center Condiciones del entorno
            p.mb-4(data-aos="fade-down") El orden, la señalización, el mantenimiento de equipos e instalaciones y el control de las sustancias peligrosas reducen los peligros que originan los incidentes.
          .col-xl.col-lg-6.tarjeta.tarjeta-c05.p-5
            .row.justify-content-center.mb-3
              .col-lg-7.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t3/img13.svg', alt='')(style="width: 85%")
            h4.text-center Cultura de reporte
            p.mb-4(data-aos="fade-down") Informar las condiciones inseguras y participar en los simulacros convierte la experiencia de cada persona en protección para todo el grupo.
    p Los cuatro frentes actúan antes de que exista una escena y por eso rara vez se les reconoce como parte de la atención inicial. Sin embargo, cada uno reduce el número de emergencias o mejora las condiciones en que se atienden, que es exactamente lo que se espera de la prevención.
    p.mb-0 De todos esos frentes, el primero que se examina es el que depende por completo de cada persona, esto es, la manera en que cuida su propia salud en los días corrientes. Quien descuida su alimentación, su descanso o el control de sus enfermedades llega a la emergencia con menos capacidad de respuesta y con mayor riesgo de resultar afectado. Por esa razón, antes de proteger a otros, conviene comprender qué prácticas cotidianas sostienen la salud del propio respondiente.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Autocuidado y estilos de vida saludable
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img14.jpg', alt='')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 El autocuidado es el conjunto de prácticas y decisiones individuales, conscientes y sostenidas, orientadas a preservar la salud y a prevenir riesgos. Los estilos de vida saludable son la expresión cotidiana de ese autocuidado, es decir, los comportamientos que inciden directamente en el estado de salud, en la funcionalidad y en la calidad de vida de una persona.
        .cajon.cajon.c02.color-primario.p-4.mb-3
          p.mb-0 Desde la salud pública, los estilos de vida saludable se fundamentan en reducir los factores de riesgo modificables y en fortalecer los factores protectores. Eso incluye una alimentación equilibrada, la actividad física regular, el descanso adecuado, el manejo del estrés y la reducción de conductas de riesgo, en coherencia con las estrategias de promoción y prevención del Ministerio de Salud y Protección Social.
        p.mb-0 Para la atención inicial, estos estilos tienen una relevancia operativa. La condición basal de la persona afectada determina en gran medida la gravedad del evento y su evolución. El estado cardiovascular, la capacidad respiratoria, la presencia de enfermedades crónicas y el nivel de respuesta al estrés modifican la reacción del organismo ante una lesión. Un mismo golpe en el pecho tiene consecuencias distintas en un ciclista de cuarenta años y en un fumador sedentario con hipertensión.
    p.mb-4 Esa diferencia entre dos personas que reciben el mismo golpe no es casual, sino el resultado de una cadena que empieza mucho antes del incidente. Lo que alguien hace a diario con su cuerpo produce un estado de salud, y ese estado define cómo responde el organismo cuando llega la lesión. Comprender esa cadena permite al primer respondiente anticipar la evolución de la persona afectada y valorar sus propios hábitos. Sus tres eslabones son los siguientes:
    .row.justify-content-center.mb-4
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/t3/img15.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t3/img16.svg", alt="alt").img100
            .col
              h5.text-black Hábitos protectores
              p Alimentación equilibrada, actividad física regular, sueño y descanso suficientes, manejo del estrés y ausencia de consumo de sustancias psicoactivas. Aplicación en el entorno: una conductora de transporte intermunicipal que respeta sus horas de sueño reduce el riesgo de un accidente por somnolencia.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t3/img17.svg", alt="alt").img100
            .col
              h5.text-black Efectos en la salud
              p Prevención de enfermedades crónicas, reducción de riesgos y mejor estado funcional del organismo. Aplicación en el entorno: un trabajador con la presión arterial controlada tolera mejor el esfuerzo y el calor de una jornada en campo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t3/img18.svg", alt="alt").img100
            .col
              h5.text-black Respuesta ante el evento
              p Mejor respuesta fisiológica, menor gravedad del incidente y mayor capacidad de recuperación. Aplicación en el entorno: una persona activa físicamente se recupera con más rapidez de una fractura que una persona sedentaria de la misma edad.
    p.mb-4 Los tres eslabones muestran que los estilos de vida no son un asunto privado ajeno a la emergencia, pues condicionan la probabilidad de que ocurra, la gravedad con que se presenta y la velocidad con que la persona se recupera. Por eso hacen parte de la gestión del riesgo y de la preparación ante emergencias.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img19.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c04.p-3
          p.mb-0(data-aos="fade-down") La emergencia no empieza en el momento del incidente. Empieza años antes, en los hábitos que deciden con qué corazón, con qué pulmones y con qué fuerzas llega cada persona a ese momento.
    p.mb-0 El autocuidado protege frente a muchas enfermedades, pero no frente a todas. Existen agentes biológicos que se transmiten en el contacto con otra persona, y evitar esa transmisión exige acciones específicas que se aplican antes, durante y después de la atención.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Prevención de enfermedades
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La prevención de enfermedades comprende el conjunto de acciones sistemáticas orientadas a evitar la aparición de alteraciones de la salud y a detectar de manera oportuna condiciones que puedan generar complicaciones. Se fundamenta en la identificación de factores de riesgo y en la aplicación de medidas de control, y es un componente esencial tanto de la salud pública como de la atención inicial de emergencias.
        br 
        br 
        p.mb-0 En los primeros auxilios, la prevención adquiere un carácter operativo, ya que busca proteger al respondiente y a la persona afectada frente a la exposición a agentes biológicos. Esto implica prácticas seguras durante la atención, en especial cuando existe contacto con fluidos corporales o riesgo de transmisión de enfermedades infecciosas.
    .row.justify-content-center.align-items-center.mb-4
      .col-12
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 Esas prácticas se articulan con los lineamientos del Ministerio de Salud y Protección Social y con el Sistema de Gestión de Seguridad y Salud en el Trabajo. Ese sistema, reglamentado por el Decreto 1072 de 2015, obliga a los empleadores a identificar, evaluar y controlar los riesgos de sus trabajadores (Ministerio del Trabajo, 2015). En una clínica veterinaria, por ejemplo, la vacunación del personal y el lavado de manos entre pacientes son parte de ese sistema.
    p.mb-4 Más allá de las obligaciones de cada empresa, existen acciones que cualquier persona puede aplicar al atender una emergencia, con o sin formación en salud. Son gestos sencillos, que exigen pocos recursos y que interrumpen el paso de los agentes infecciosos entre quien atiende y quien es atendido. Su valor está en aplicarlos siempre, y no solo cuando la persona afectada parece enferma. Las principales acciones son cinco:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img21.svg' alt='AvatarTop')
          h4.text-center Higiene de manos
          p.text-center Considerada la medida más efectiva para reducir la transmisión de microorganismos, se realiza antes y después de la atención, con agua y jabón o con una solución a base de alcohol cuando no hay agua disponible.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img22.svg' alt='AvatarTop')
          h4.text-center Uso adecuado de elementos de protección personal
          p.text-center Guantes, mascarilla o protección ocular según el nivel de riesgo identificado, colocados antes del contacto con la persona afectada y retirados de forma segura al terminar la atención.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img23.svg' alt='AvatarTop')
          h4.text-center Vacunación
          p.text-center Estrategia de protección frente a enfermedades prevenibles y de alto impacto en salud pública, como el tétanos o la hepatitis B, que conviene mantener al día en quien atiende emergencias con alguna frecuencia.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img24.svg' alt='AvatarTop')
          h4.text-center Manejo seguro de fluidos corporales
          p.text-center Evitar el contacto directo con sangre, secreciones u otros materiales potencialmente contaminados, interponiendo siempre una barrera, aunque sea improvisada con una bolsa o una tela limpia.
        .tarjeta.bg01.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img25.svg' alt='AvatarTop')
          h4.text-center Desinfección de superficies y elementos
          p.text-center Cuando las condiciones lo permiten, limpiar las superficies y los objetos que tuvieron contacto con fluidos, para prevenir la contaminación cruzada de otras personas o del propio botiquín.
    p Las cinco acciones no protegen únicamente a quien las aplica. Reducen el riesgo de complicaciones en la persona afectada y limitan la propagación de agentes infecciosos en la comunidad, de modo que la prevención de enfermedades es, al mismo tiempo, una medida individual y una responsabilidad colectiva.
    p.mb-0 Las enfermedades no son la única amenaza prevenible. Las lesiones, que representan una causa importante de discapacidad, también pueden anticiparse, y la manera de hacerlo cambia según el lugar donde transcurre la vida diaria.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Prevención de lesiones en el hogar, la vía pública y el trabajo
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t3/img26.jpg', alt='')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3 La prevención de lesiones comprende las acciones orientadas a identificar, evaluar y controlar los factores de riesgo que pueden generar daño físico a las personas. Se basa en la anticipación del peligro y en medidas que reducen la probabilidad de accidentes o mitigan sus consecuencias, en especial en los entornos cotidianos, como el hogar, la vía pública y los espacios laborales.
        .cajon.cajon.c01.color-secundario.p-4.mb-3
          p.mb-0 Las lesiones son una causa significativa de morbilidad y discapacidad, y en gran medida son prevenibles. Por eso la prevención trasciende la atención del evento y se centra en la gestión del riesgo, promoviendo condiciones seguras y comportamientos responsables que disminuyan la exposición a situaciones peligrosas. Cada entorno concentra peligros propios y, por tanto, medidas propias.
        p.mb-0 En el ámbito laboral, el Decreto 1072 de 2015 ya mencionado exige identificar los peligros de cada actividad y controlarlos. En la vía, el Código Nacional de Tránsito fija las reglas de comportamiento y los elementos de protección obligatorios (Congreso de la República de Colombia, 2002). En el hogar no hay norma que obligue, y la prevención depende por completo de la organización de la familia.
    p.mb-4 Ninguno de los tres entornos exige conocimientos técnicos para prevenir, sino atención a los peligros que ya se conocen y que, por ser cotidianos, dejan de percibirse. Un tapete suelto, una motocicleta sin luces o una máquina sin bloquear no parecen amenazas hasta que producen la lesión. Por eso las medidas de cada entorno se formulan como acciones concretas, que cualquier persona puede aplicar en su casa, en su trayecto y en su trabajo. Esas medidas se resumen así:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta-c01")
          .row(titulo="En el hogar")
            .col-12.mb-0.mb-md-0
              p Adecuar los espacios de forma segura, organizar y despejar los pasillos, guardar bajo llave las sustancias químicas y los medicamentos, supervisar a los niños y usar con cuidado los equipos eléctricos y de cocina. Escenario típico: en una casa con un adulto mayor, retirar los tapetes sueltos y colocar una barra de apoyo en el baño evita la caída más frecuente.
          .row(titulo="En la vía pública")
            .col-12.mb-0.mb-md-0
              p Cumplir las normas de tránsito, atender las condiciones del entorno y usar los elementos de protección personal, como el casco, el cinturón de seguridad y las prendas reflectivas. Escenario típico: un domiciliario que circula de noche por una vía sin alumbrado reduce su riesgo con un chaleco reflectivo y luces en la motocicleta.
          .row(titulo="En el entorno laboral")
            .col-12.mb-0.mb-md-0
              p Aplicar los protocolos de seguridad, identificar los peligros de cada actividad y usar los elementos de protección personal adecuados a las condiciones del trabajo. Escenario típico: en una empresa de metalmecánica de Sogamoso, el bloqueo de la energía antes del mantenimiento de una prensa evita atrapamientos.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img27.png', alt='')
    p.mb-4 En los tres entornos la prevención sigue la misma lógica, que consiste en reconocer el peligro antes de que se materialice, mantener condiciones seguras y adoptar conductas que reduzcan la exposición. Lo que cambia es quién tiene la responsabilidad de hacerlo, es decir, la familia en el hogar, cada usuario en la vía y el empleador con sus trabajadores en el ámbito laboral.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img28.svg', alt='')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.c02.p-3
          p.mb-0(data-aos="fade-down") Prevenir una lesión cuesta menos que atenderla, y mucho menos que vivir con sus secuelas. Cada tapete retirado, cada casco puesto y cada máquina bloqueada es una emergencia que no llegará.
    p.mb-4 No todas las medidas de prevención tienen el mismo alcance. Las que actúan sobre el entorno, como retirar el peligro o interponer una barrera física, protegen a todas las personas sin exigirles nada. Las que dependen del comportamiento, como usar el casco o mirar antes de cruzar, funcionan solo mientras cada persona las cumpla. Por eso la prevención eficaz empieza por el entorno y deja la conducta individual como último recurso.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-2.order-2
        .cajon.c01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") El primer respondiente ocupa una posición privilegiada para alimentar ese proceso. Quien atiende una caída en una escalera sin baranda, un corte con una máquina sin guarda o un atropello en una esquina sin semáforo conoce de primera mano la condición que produjo la lesión. Informarla después de la atención convierte cada incidente en una oportunidad de corregir el entorno y evita que la misma causa vuelva a lesionar a otra persona.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img29.svg', alt='')
    p.mb-4 Ese orden de prioridad se traduce en cuatro tipos de medidas, que van de la más eficaz a la que depende por completo de cada persona. Reconocerlos permite elegir en cada entorno la que ofrece mayor protección con los recursos disponibles:
    .cajon.cajon.c04.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-4 Los cuatro tipos no se excluyen, sino que se combinan, aunque su eficacia disminuye en el orden presentado. Cuando en un entorno solo se dispone de la protección personal, la prevención descansa por completo en el hábito de cada persona, y ese hábito es el mismo que se exige al primer respondiente cuando llega a una escena.
    .row.justify-content-center.mb-0
      .cajon.cajon.c01.color-secundario.p-4.mb-0
        p.mb-0 Aun con la mejor prevención, los incidentes siguen ocurriendo, y cuando eso pasa la atención inicial se enfrenta a un lugar que todavía puede lesionar. Las medidas que evitan el daño en la vida cotidiana tienen entonces un equivalente inmediato, que consiste en volver seguro el sitio antes de intervenir. Ese aseguramiento tiene sus propias normas, unos factores que se valoran en segundos y unas herramientas para proteger a quien interviene y advertir a los demás, y a ellos se dedica el siguiente recorrido.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Eliminación del peligro',
        texto:
          'Consiste en retirar la fuente del daño para que el riesgo desaparezca por completo. Por ejemplo, reemplazar un tapete suelto por un piso antideslizante o guardar los medicamentos en un armario con llave elimina la caída y la intoxicación antes de que ocurran.',
        imagen: '@/assets/curso/temas/t3/img30.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Barreras físicas',
        texto:
          'Son elementos que se interponen entre el peligro y las personas cuando este no puede eliminarse. Por ejemplo, una guarda sobre las partes móviles de una máquina, una baranda en una escalera o una reja en una ventana alta impiden el contacto con el riesgo.',
        imagen: '@/assets/curso/temas/t3/img31.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Medidas administrativas',
        texto:
          'Corresponden a las normas, los procedimientos y la formación que organizan el comportamiento de las personas frente al peligro. Por ejemplo, el mantenimiento programado de un vehículo, la señalización de un piso húmedo o la capacitación de un operario en el bloqueo de energía.',
        imagen: '@/assets/curso/temas/t3/img32.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
      {
        titulo: 'Protección personal',
        texto:
          'Agrupa los elementos que cada persona lleva puestos para reducir el daño cuando el contacto con el peligro ya ocurrió. Por ejemplo, el casco de un motociclista o los guantes de un trabajador no evitan el incidente, pero disminuyen la gravedad de la lesión.',
        imagen: '@/assets/curso/temas/t3/img33.jpg',
        // leyendaImagen: 'Leyenda_de_la_imagen',
      },
    ],
  }),
}
</script>
<style lang="sass">
.avatar
  position: absolute
  bottom: 0
  right: -4rem
  z-index: 1
  @media (max-width: 1000px)
    display: none
.crd--avatarHorizontal
  position: relative
  padding-right: 12rem
  & > *
    position: relative
  h5
    color: #D6ECF0
  p
    margin-bottom: 0
  &::before
    position: absolute
    content: ''
    top: 0
    right: 0
    width: calc( 100% - 60px)
    height: 100%
    background-color: #DCF7EF
  @media (max-width: 1000px)
    padding-right: 2rem

.crd--first, .crd--last
  &::before
    background-color: #DDEDF8 !important
.crd--first
  &::before
    border-top-left-radius: 30px
.crd--last
  &::before
    border-bottom-left-radius: 30px
</style>
