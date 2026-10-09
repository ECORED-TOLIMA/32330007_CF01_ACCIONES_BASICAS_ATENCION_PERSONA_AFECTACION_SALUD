<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") La atención inicial en situaciones de emergencia requiere una actuación oportuna, segura y fundamentada en criterios técnicos y normativos. El reconocimiento adecuado de la escena y el control de los riesgos constituyen el primer paso para evitar la agravación del incidente y proteger tanto al primer respondiente como a la persona afectada. En este contexto, la aplicación de principios de bioseguridad, normas de seguridad y protocolos de activación del sistema de emergencias resulta esencial.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-2.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.png', alt='')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.c01.color-secundario.p-4.mb-4
          p.mb-0 En Colombia, estas acciones se enmarcan en lineamientos legales y técnicos orientados a la protección de la vida y la integridad, como lo establecido en la Constitución Política, la Ley 1523 de 2012 sobre gestión del riesgo de desastres y las guías de primeros auxilios adoptadas por el sector salud. Asimismo, el cumplimiento de deberes como la prestación de ayuda y la adecuada actuación frente a emergencias evita conductas sancionables como la omisión de socorro.
        p(data-aos="fade-down") Este componente formativo busca fortalecer en el aprendiz las competencias necesarias para identificar peligros, evaluar condiciones de la escena y aplicar medidas de prevención y control, garantizando intervenciones iniciales seguras, responsables y acordes con los protocolos vigentes. De esta manera, se contribuye a una respuesta efectiva que minimice riesgos y favorezca la atención integral en situaciones que afectan la salud.
        p.mb-0(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/m2XRlqDSolY?si=DVr3pEzWkvvbPolZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
