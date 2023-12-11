<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

      
    .mb-5(data-aos="zoom-down") 
      p En los últimos años, con la globalización y la complejidad de los mercados en la era digital, la incertidumbre ha aumentado significativamente para las organizaciones.
      p Los problemas éticos en grandes corporaciones, difundidos ampliamente por los medios de comunicación, como los de Enron (2001) y el banco BCCI (1986) de Estados Unidos, y la constructora Odebrecht (2015) en Latino América, han causado perjuicios a los accionistas, a los trabajadores, proveedores, al medio ambiente, y a la sociedad en general. Ante tales escándalos corporativos, las regulaciones nacionales e internacionales han respondido con legislación para evitar se vuelvan a presentar tales delitos. También surgió la necesidad de desarrollar valores, vincularlos a una cultura organizacional de la ética, y así surge el concepto de gobierno corporativo.
      p Adicionalmente, nuevos elementos se han ido incorporando al panorama empresarial con los cambios en los modelos de negocios, que se aceleraron con motivo de la emergencia sanitaria global (2019); la llamada transformación digital, con el diseño de los productos y servicios centrados en las personas, hizo también que la gestión de gobierno, riesgo y cumplimiento cambiara de foco.

    figure.mb-4(data-aos="zoom-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/khEG8Ct4JS0" title="Verificación del cumplimiento según las estrategias de gobierno, riesgo y cumplimiento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    
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
