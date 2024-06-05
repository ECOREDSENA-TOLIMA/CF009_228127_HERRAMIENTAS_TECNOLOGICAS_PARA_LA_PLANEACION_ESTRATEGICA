<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistema de Gestión de Cumplimiento según la ISO 37301

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un SGC comprende: las políticas, los objetivos, y los procesos de “#[em compliance]”.
          br
          br
          | En la implementación de un SGC, como se especifica en la norma ISO 37301:2021 (ISO, 2021), se recorrerán de manera interactiva las fases del ciclo PHVA.
          br
          br
          | Las normas ISO tienen una estructura común y los numerales de la norma cubren todo el ciclo de la mejora continua, como se muestra en la siguiente figura, los numerales de ISO 37301. Requerimientos y guía de uso para el SGC:

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Numerales norma ISO 37301 SGC</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig-4b.svg', :alt='altImg4')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-4a.svg', :alt='altImg4') 

    p.mb-5(data-aos="fade-down-right") Para cada numeral de la norma que contiene requisitos (cláusulas 4 al 10), existe una serie de actividades para desarrollar con el equipo de cumplimiento y representantes de los procesos que se abordan. También se realizan capacitaciones en todos los niveles, con el fin de desarrollar la cultura de cumplimiento, porque la responsabilidad del logro de los objetivos de cumplimientos es de todos, no solamente del oficial encargado o quien haga la función.

    .row.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-8.col-md-10.col-12
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema3/tema3-2.svg' alt='')
          .tarjeta.color-primario
            .p-4
              p La implementación del SGC permite a la organización:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | La demostración eficaz, comprobable del cumplimiento de las obligaciones. 
                  | Por ejemplo, leyes, reglamentos, acuerdos, contratos, código, directrices.
                li.mb-0
                  span.icon ✔ 
                  | La buena reputación de la organización.
    
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Evaluación del desempeño
      div.titulo-herramientas.d-block.d-md-none Evaluación del desempeño

    p.mb-3(data-aos="fade-down-right") Una vez implementados los procesos, realizadas las capacitaciones, que estén funcionando los mecanismos para la prevención, la detección y respuesta a situaciones de cumplimiento eventual o real, llega el momento de evaluar el desempeño en función del cumplimiento de los requisitos de la norma ISO 37301.
    p.mb-3(data-aos="fade-down-right") El desempeño corresponde a los resultados medibles, y se puede relacionar con la gestión de actividades, procesos, productos, servicios, sistemas u organizaciones. 
    p.mb-3(data-aos="fade-down-right") En el numeral 9 de la norma 37301:2021, se describe la evaluación del desempeño del SGC, que corresponde a la fase Verificar (V) del ciclo PHVA.
    p.mb-5(data-aos="fade-down-right") A continuación, se describen los frentes de la evaluación de desempeño del SGC:

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Realizar el seguimiento, medición, análisis y evaluación del sistema de gestión
      div.titulo-herramientas.d-block.d-md-none Realizar el seguimiento, medición, análisis y evaluación del sistema de gestión

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es necesario obtener valores para saber si se están logrando los objetivos de cumplimiento que estableció la organización en la fase anterior. 
          br
          br
          | Para ello, se identifican las fuentes de retroalimentación del desempeño, se desarrollan indicadores, se elaboran informes, se mantienen registros. 
          br
          br
          | Se puede decir que se hace seguimiento del sistema de gestión cuando se realizan verificaciones, supervisión y observaciones en forma crítica.  Se debe definir a qué hacer seguimiento, cuándo y con cuáles métodos.  Asimismo, determinar qué medir, cuándo, y con cuál método. 
          br
          br
          | Se identifican las #[b fuentes] de información, clientes, proveedores, autoridades, empleados, leyes, auditorías internas, revisiones por la dirección, etc. Y las herramientas para obtener la información pueden ser encuestas de percepción, canales de denuncia, quejas, entre otras.

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-8.col-10.mb-3.mb-md-0
        p También se deben desarrollar #[b indicadores] de gestión apropiados para determinar si se están logrando los objetivos y para evaluar el desempeño en términos de cumplimiento. Los indicadores deben ser claros y comprensibles para todas las personas.
        p Cada organización puede organizar los indicadores según su conveniencia, su realidad, su contexto, e incluso, su nivel de conocimiento, lo importante es que tales indicadores soporten la toma de decisiones para mejorar el desempeño del SGC. Son ejemplo de indicadores: número de incidentes de protección de datos, tiempo para la investigación de denuncias, número de no conformidades de cumplimiento abiertas, entre otros.
        p El informe de cumplimiento que elabora periódicamente el oficial encargado o el equipo que tenga la función, sobre la base de criterios definidos, lo entrega al órgano de gobierno y a la alta dirección.  La gestión eficaz del informe respectivo podría evitar que un problema de no cumplimiento se propague por la organización. 
      .col-md-4.col-12
        figure
          img(src="@/assets/curso/temas/tema3/tema3-4.png", alt="")

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-10.mb-4
        .cajon.color-secundario.p-4(data-aos="zoom-in-down")
          p Algunas características del informe son:
          ul.lista-ul.ms-3.mb-0
            li.mb-0
              span.icon ✔ 
              | Debe detallar la obligación y cumplimiento correspondiente y los no cumplimientos que se produjeron.
            li.mb-0
              span.icon ✔ 
              | Mencionar los requisitos de las partes interesadas.
            li.mb-0
              span.icon ✔ 
              | Señalar las acciones correctivas implementadas y su eficacia.
            li.mb-0
              span.icon ✔ 
              | Mostrar los cambios eventuales en las obligaciones de cumplimiento y en el sistema de comunicaciones a utilizar, además de señalar antecedentes de auditorías y realizar monitoreo de los planes de acción para la mejora.

    p.mb-5(data-aos="fade-down-right") Los #[b registros] son parte de la información documentada del sistema de gestión, demuestran seguimientos y mediciones de los procesos. Corresponden a actas de revisión por la dirección, análisis de indicadores de gestión, seguimiento a las acciones correctivas, y los mismos informes de cumplimiento.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Auditorías internas
      div.titulo-herramientas.d-block.d-md-none Auditorías internas

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-3.col-10.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/tema3/tema3-5.png", alt="")
      .col-md-9.col-12
        p La auditoría se trata de un proceso planeado, con objetivo establecido y enfocada en procesos. La auditoría debe ser transparente y hacer parte de un plan de auditoría.
        p En las auditorías, se revisa qué tan confiable es la organización, si respeta los pactos, cumple las promesas organizacionales y las normas. 
        p La ejecución de la auditoría está a cargo del equipo auditor, con base en los conocimientos de los criterios de “#[em compliance]”, los requisitos y el contexto del auditado. 
        p Los auditores deben tener habilidades y competencias para realizar la auditoría y una conducta profesional acorde con su rol, que garantice un ambiente de confianza.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12.mb-4
        .cajon.color-primario.p-4(data-aos="zoom-in-down")
          p La auditoría no debe ser solo un ejercicio burocrático sin sentido, debe ser bien ejecutada, a la vez que entrega valor a la organización con la presentación de acciones apropiadas contenidas en el informe de auditoría.  Este informe, es una entrada importante para las decisiones de la alta dirección, que potencialmente influyen en la gestión estratégica de la organización.  El documento escrito debe demostrar el logro de los objetivos de auditoría, debe demostrar la eficacia del SGC, y debe identificar las no conformidades en el sistema de gestión y también las oportunidades de mejora.
          p Después de la auditoría interna, sigue la implementación de acciones correctivas para cerrar las no conformidades detectadas, lo cual es una oportunidad de aprendizaje para la organización (Thaller y Bravo, 2021).
          p La siguiente figura ilustra tanto el proceso como los elementos de entrada y salida de una auditoría:

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Proceso de auditoría</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/fig-5a.svg', :alt='altImg5')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/fig-5b.svg', :alt='altImg5') 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Revisiones por la Dirección
      div.titulo-herramientas.d-block.d-md-none Revisiones por la Dirección

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-md-5.col-10.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/tema3/tema3-6.png", alt="")
      .col-md-7.col-12
        p La revisión por la dirección es un proceso liderado por la alta dirección y el órgano de gobierno, donde se toman las decisiones relacionadas con las oportunidades de mejora y aplicación de cambios, con el objetivo de mejorar el SGC.
        p En la revisión por la dirección, se reconoce:
        ul.lista-ul.ms-3.mb-0
          li.mb-0
            span.icon ✔ 
            | Si las personas entienden la política de cumplimiento. 
          li.mb-0
            span.icon ✔ 
            | Si se tomaron en cuenta los resultados de auditoría. 
          li.mb-0
            span.icon ✔ 
            | Si las no conformidades fueron resueltas y cuáles acciones correctivas fueron implementadas. 
          li.mb-0
            span.icon ✔ 
            | Se revisa la eficacia de los controles. 
          li.mb-0
            span.icon ✔ 
            | Se toman en cuenta todos los registros frente a la violación de obligaciones de cumplimiento.
          li.mb-0
            span.icon ✔ 
            | Se evalúa si fueron suficientes los recursos asignados al SGC.
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue

    altImg4: `Figura 5. Numerales norma ISO 37301 SGC
En la figura se tiene:
ACTUAR 
10 Mejora.
PLANIFICAR
4 Contexto de la organización
5 Liderazgo
6 Planificación.
HACER
7 Apoyo
8 Operación.
VERIFICAR
9 Evaluación del desempeño.`,
    altImg5: `Figura 6. Proceso de auditoría
En la figura se representa:
En la parte izquierda las entradas:
Auditores competentes
Conocimiento de la norma
Procedimientos documentados, responsabilidades definidas
Criterios de auditoría, métodos
Luego en el centro de la figura se tiene:
Planeación, ejecución, preparación del informe, comunicación de informe, seguimiento y recomendaciones.
En la parte derecha de la figura se tienen las salidas:
Registros de auditoría
Informes de no conformidad y acciones correctivas
Datos para análisis de oportunidades de mejora
En la parte de abajo una flecha con herramientas utilizadas.`,
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
