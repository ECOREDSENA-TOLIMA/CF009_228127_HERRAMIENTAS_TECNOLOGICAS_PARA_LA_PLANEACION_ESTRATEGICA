<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El logro de los objetivos organizacionales es posible en la medida en que se desarrolle una cultura de cumplimiento y se gestionen integralmente los riesgos, dentro del marco de las buenas prácticas de gobierno corporativo. La implementación del sistema de gestión basado en la norma ISO 37301 se puede apoyar de buenas prácticas de los marcos de referencia relacionados con la gestión de riesgo, de gobierno TI y gobierno corporativo. En la evaluación del SGC, se realizan actividades de seguimiento, medición, análisis y evaluación, así como auditorías internas y la revisión por la dirección. 
    p.mb-5 A continuación, se presenta una síntesis de las temáticas vistas en el componente formativo, a través del siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura de la síntesis se tiene inicialmente gobierno, riesgo, cumplimiento, que incluye visión integral de cultura de cumplimiento en organizaciones, personas y valores e integridad. También hace parte el gobierno corporativo que corresponde a normas para la toma de decisiones, relaciones entre partes interesadas, gestión de riesgo, y cumplimiento de regulación. De la misma forma se implementa las Normas ISO 31000 y Normas ISO 37301, en la fase de verificación. Para terminar el GRC se apoya en marcos COBIT, COSO, Modelo IIA, GRC Capability model.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
