<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo presenta el reconocimiento y el aseguramiento de la escena como el primer acto de la atención de una persona con afectación de la salud. Los cinco ejes temáticos que lo conforman avanzan del marco a la acción. Parten de la normatividad básica que respalda y limita al primer respondiente y continúan con la comprensión de la escena, el incidente y los riesgos. Desarrollan luego la prevención y el autocuidado como prácticas que evitan emergencias y abordan la seguridad y el aseguramiento de la escena mediante normas, factores básicos, elementos de protección, señalización y balizaje. Culminan en la bioseguridad y en la activación del sistema de emergencias médicas, con el botiquín como recurso de apoyo. Este recorrido hace comprender que ayudar con seguridad no es un acto de valentía sino de método, porque se reconoce, se asegura, se protege y se pide apoyo antes de tocar a la persona afectada.
    p A continuación, se presenta el mapa conceptual que organiza de manera visual los ejes temáticos del componente y las relaciones que los articulan:
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual titulado “Fundamentos de la escena y control de riesgos”, organizado en cinco ejes: normatividad básica del primer respondiente; escena, incidente y riesgos; prevención y autocuidado; seguridad y aseguramiento de la escena; y bioseguridad y sistema de emergencias médicas. Cada eje se une al nodo central con un conector relacional y despliega los subtemas. El recorrido va del marco normativo a la activación de la ayuda especializada, lo que muestra que la actuación segura del primer respondiente comienza por conocer sus deberes y termina cuando la persona afectada queda en manos del sistema de emergencias.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>
<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
