<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Auditoría de los sistemas de gestiones según la ISO 19011

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las auditorías son un proceso sistemático, independiente y documentado para obtener evidencias objetivas y evaluarlas de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría.
          br
          br
          | En esta sección, se hace referencia a la norma ISO 19011:2018 (ISO, 2018), que contiene las orientaciones sobre la auditoría de los sistemas de gestión, incluyendo los principios de la auditoría, la gestión de un programa de auditoría y la realización de auditorías de sistemas de gestión, y es aplicable a todas las organizaciones que necesitan planificar y realizar auditorías internas o externas de sistemas de gestión, o gestionar un programa de auditoría. 
    
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Tipos de auditoría
      div.titulo-herramientas.d-block.d-md-none Tipos de auditoría

    p.mb-5(data-aos="fade-down-right") Con base en la relación con el auditor y el auditado, existen tres tipos de auditoría:

    .row.justify-content-center.mb-4(data-aos="zoom-in-down")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-secundario-c.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/avatar-1a.svg', alt='')
          h4.text-center Auditorías internas
          p Realizadas por personal de la organización, para valorar el Sistema de Gestión implementado. Tienen como enfoque revisar los procesos para detectar oportunidades de mejora en procura de la eficacia de los sistemas de gestión.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0.d-flex.align-items-stretch
        .tarjeta--boton.color-secundario-c.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/avatar-1b.svg', alt='')
          h4.text-center Auditoría externa de proceso
          p Su objetivo es evaluar la relación entre el cliente y el proveedor, se revisa que los proveedores cumplan con los requisitos preestablecidos entre ambas partes en el contrato.
      .col-sm-6.col-lg-4.mb-4.mb-sm-0.d-flex.align-items-stretch
        .tarjeta--boton.color-secundario-c.p-4
          .row.justify-content-center.mb-3
            .col-7.col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/avatar-1c.svg', alt='')
          h4.text-center Auditoría de conformidad
          p Realizada con el fin de lograr la certificación o acreditación en un sistema de gestión, mantener la certificación o recertificación. También puede tratarse de una auditoría legal o reglamentaria realizada por una agencia gubernamental. 

    p.mb-5(data-aos="fade-down-right") La norma ISO 19011:2018 hace referencia a las auditorías de primera y segunda parte. En algunos casos, se auditan varios sistemas de gestión de distintas disciplinas, por ejemplo: Sistema de Gestión de Calidad - SGC, de Seguridad de la Información - SI, de Gestión Ambiental - SGA, de Seguridad y Salud en el Trabajo - SSST, etc. En esos casos, se le denomina auditoría #[b combinada].  También se puede presentar la situación de auditar Sistemas Integrados en un único Sistema de Gestión; los principios y procesos de auditoría son los mismos que para una auditoría combinada, a veces llamada auditoría integrada.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Principios de la auditoría 
      div.titulo-herramientas.d-block.d-md-none Principios de la auditoría 
    
    p.mb-5(data-aos="fade-down-right") Los #[b principios] de la auditoría son declaraciones de filosofía, reglas o códigos de conducta, en este caso, relacionados con las auditorías:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Integridad
              p Fundamento de la profesionalidad.
              p Se refiere a que las personas que gestionan un programa de auditoría y que realizan la auditoría desempeñando su labor de forma ética, con honestidad y responsabilidad; solo si son competentes, lo hacen de forma imparcial, es decir, sin sesgo en todas sus acciones y siendo sensibles a cualquier influencia que se pueda ejercer sobre su juicio mientras realiza la auditoría.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-2.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
            .col-md-7.text-start
              h4 Presentación imparcial
              p Obligación de informar con veracidad y exactitud.
              p La comunicación entre auditores y auditado debería ser veraz, exacta, objetiva, oportuna, clara y completa. Se debería informar de los obstáculos significativos encontrados durante la auditoría. Los hallazgos, las conclusiones e informes de la auditoría deberían reflejar con veracidad y exactitud las actividades de auditoría.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Debido cuidado profesional
              p Aplicación de diligencia y juicio al auditar.
              p El cliente de la auditoría y demás partes interesadas depositan confianza en el equipo auditor, y este debe proceder con debido cuidado profesional, demostrando la capacidad de hacer juicios razonados en todas las situaciones de la auditoría.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
            .col-md-7.text-start
              h4 Confidencialidad
              p Seguridad de la información.
              p Durante la auditoría, el equipo auditor podrá tener acceso a información para realizar las tareas; dicha información no debe usarse inapropiadamente para beneficio personal del auditor o del cliente de la auditoría, y sin perjudicar los intereses legítimos del auditado. La confidencialidad incluye el tratamiento apropiado de la información sensible o confidencial.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Independencia
              p Base para la imparcialidad de la auditoría y la objetividad de sus conclusiones.
              p Los auditores deberían actuar de una manera libre de sesgo y conflicto de intereses. Aun en las auditorías internas, se debe fomentar la objetividad en el proceso de auditoría, y los auditores deberían ser independientes de la función que se audita, para asegurar que los hallazgos y conclusiones están basados solo en la evidencia de la auditoría.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
            .col-md-7.text-start
              h4 Enfoque basado en la evidencia
              p Método racional para alcanzar conclusiones de la auditoría fiables y reproducibles en un proceso de auditoría sistemático.
              p Auditoría basada en evidencia, porque la evidencia debería basarse en muestras de la información disponible, ya que esta se lleva a cabo durante un periodo de tiempo delimitado y con recursos finitos. Debería aplicarse un uso apropiado del muestreo, para que exista confianza en las conclusiones de la auditoría.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Enfoque basado en riesgos
              p Considera los riesgos y oportunidades.
              p El enfoque basado en riesgos se debe tener en cuenta durante la planificación, la realización y la presentación de los informes de auditoría, con el fin de asegurar que estas se centran en asuntos importantes para la organización y para lograr los objetivos del programa establecido.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')

    p.mb-5(data-aos="fade-down-right") Los 7 principios de auditoría ayudan a hacer del proceso una herramienta eficaz y fiable en apoyo de las políticas y controles de gestión. Es un requisito para el equipo de auditores adherirse a estos principios para proporcionar conclusiones pertinentes y suficientes de la auditoría realizada.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Programa de la auditoría
      div.titulo-herramientas.d-block.d-md-none Programa de la auditoría

    p.mb-3(data-aos="fade-down-right") El programa de auditorías hace referencia a un conjunto de auditorías planificadas para un periodo de tiempo determinado y dirigidas hacia un propósito específico. El programa depende del contexto del auditado, de los objetivos organizacionales, de las necesidades y expectativas de las partes interesadas, de los requisitos de seguridad y confidencialidad de la información.
    p.mb-5(data-aos="fade-down-right") La información que debe incluir el programa de auditoría se muestra a continuación.

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-4.col-10.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/tema2/tema2-9.png", alt="")
      .col-md-8.col-12
        h4 Programa de auditoría
        ol.lista-ol--cuadro.mb-0
          li.mb-2
            .lista-ol--cuadro__vineta
              span 1
            | Objetivos para el programa de auditoría.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 2
            | Riesgos y oportunidades asociadas con el programa de auditoría y las acciones para abordarlos.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 3
            | Alcance de cada auditoría dentro del programa de auditoría.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 4
            | Calendario (número, duración, frecuencia) de las auditorías.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 5
            | Tipos de auditoría, tales como internas o externas.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 6
            | Criterios de auditoría.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 7
            | Métodos de auditoría a emplear.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 8
            | Criterios para seleccionar a los miembros del equipo auditor.
          li.mb-2 
            .lista-ol--cuadro__vineta
              span 9
            | Información documentada pertinente.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Método establecido en la auditoría
      div.titulo-herramientas.d-block.d-md-none Método establecido en la auditoría

    p.mb-3(data-aos="fade-down-right") El método de auditoría seleccionado depende de los objetivos de la auditoría, el alcance y los criterios definidos, así como de la duración y la ubicación. También la manera, el lugar y el momento en que se accede a la información de auditoría pueden determinar los métodos de auditoría y, según las circunstancias de la auditoría, pueden mezclar métodos o necesitar cambiarlos durante el proceso.
    p.mb-5(data-aos="fade-down-right") Según la auditoría se realice en las instalaciones del auditado, in situ, o a distancia, con o sin interacción entre personal auditado y equipo auditor, los métodos de auditoría pueden ser diferentes: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1a.svg' alt='')
        h4 En las instalaciones y con interacción
        ul.lista-ul.ms-3
          li.mb-1
            i.lista-ul__vineta
            | Entrevistas. 
          li.mb-1
            i.lista-ul__vineta
            | Completar listas de verificación y cuestionarios con la participación del auditado. 
          li.mb-1
            i.lista-ul__vineta
            | Revisar los documentos con la participación del auditado. 
          li.mb-1
            i.lista-ul__vineta
            | Muestrear. 
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1b.svg' alt='')
        h4 En las instalaciones y sin interacción humana
        ul.lista-ul.ms-3
          li.mb-1
            i.lista-ul__vineta
            | Revisar los documentos.
          li.mb-1
            i.lista-ul__vineta
            | Observar el trabajo desempeñado.
          li.mb-1
            i.lista-ul__vineta
            | Realizar visitas al sitio. 
          li.mb-1
            i.lista-ul__vineta
            | Completar listas de verificación. 
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1c.svg' alt='')
        h4 A distancia y con interacción
        ul.lista-ul.ms-3
          li.mb-1
            i.lista-ul__vineta
            | Entrevistas a través de medios de comunicación interactivos.
          li.mb-1
            i.lista-ul__vineta
            | Observar el trabajo realizado con una guía a distancia.
          li.mb-1
            i.lista-ul__vineta
            | Completar listas de verificación y cuestionarios a través de medios de comunicación interactivos.
          li.mb-1
            i.lista-ul__vineta
            | Revisar los documentos con la participación del auditado a través de medios de comunicación interactivos.
      
      .tarjeta.color-secundario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema2/carrucel-1d.svg' alt='')
        h4 A distancia y sin interacción humana 
        ul.lista-ul.ms-3
          li.mb-1
            i.lista-ul__vineta
            | Revisar los documentos.
          li.mb-1
            i.lista-ul__vineta
            | Observar el trabajo desempeñado a través de medios de vigilancia, considerando los requisitos sociales y legales. 
          li.mb-1
            i.lista-ul__vineta
            | Analizar los datos. 
      
    p.mb-3(data-aos="fade-down-right") Las actividades de auditoría sin interacción humana con las personas que representan al auditado implican la interacción con los equipos, las instalaciones y la documentación, por ejemplo, revisión de registros, análisis de datos y muestrear productos.
    p.mb-5(data-aos="fade-down-right") La viabilidad de las actividades de auditoría a distancia puede depender del nivel de riesgo para el logro de los objetivos de la auditoría, el nivel de confianza que existe entre el auditor y el personal del auditado, y los requisitos reglamentarios. En las auditorías a distancia, se utilizan medios de comunicación interactivos para realizar las entrevistas, observar el trabajo realizado, completar cuestionarios y listas de verificación junto con el auditado.
  
    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-4.col-10.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/tema2/tema2-10.png", alt="")
      .col-md-8.col-12
        .h4.pt-4.mb-4(data-aos="zoom-down-right")
          span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Ciclo PHVA
          div.titulo-herramientas.d-block.d-md-none Ciclo PHVA
        p Planificar-Hacer-Verificar-Actuar, ciclo PHVA, es una estrategia de mejora continua en 4 pasos, también conocida como ciclo #[em Deming].
        p El ciclo PHVA es una estrategia interactiva de resolución de problemas para mejorar procesos e implementar cambios en las organizaciones, ofrece un alto nivel de flexibilidad y mejora iterativa.
        p En las normas ISO, se destaca el “enfoque a procesos” y se sugiere el uso de esta metodología como una herramienta de mejora continua. Los auditores deben comprender que auditar un sistema de gestión es auditar los procesos de una organización y sus interacciones con una o más normas de sistemas de gestión. 
        p Cuando las actividades se comprenden y se gestionan como procesos interrelacionados que funcionan como un sistema coherente, se logran resultados coherentes y predecibles de manera más eficaz y eficiente. 

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Gestión de un programa de auditoría
      div.titulo-herramientas.d-block.d-md-none Gestión de un programa de auditoría

    p.mb-3(data-aos="fade-down-right") En la gestión del Programa de Auditoría (PA), se cumple el ciclo de la mejora continua PHVA. En el capítulo 5 de la norma ISO 19011, en los numerales 5.2 a 5.7, se describen las actividades que deben seguir las personas responsables de gestionar el programa de auditoría (ISO, 2018).
    p.mb-3(data-aos="fade-down-right") El capítulo 6 de la norma ISO 19011 (ISO, 2018) comprende desde la preparación y realización de una auditoría, como parte de un programa de auditoría, hasta su seguimiento.
    p.mb-5(data-aos="fade-down-right") A continuación, se ilustra el Ciclo PHVA, incluyendo una breve descripción de los numerales correspondientes a la gestión de un programa y la realización de auditorías:

    h4.mb-4(data-aos="fade-down-right") Relacionada con la gestión

    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-10.col-12
        TabsA.color-acento-botones.mb-5(data-aos="zoom-down-right")
          .tarjeta.tarjeta--azul.p-4(titulo="Planificar")
            h4 Planificar
            p #[b 5.2.] Al planificar, se establecen los objetivos del programa de auditoría, deben ser coherentes con la dirección estratégica de la organización y servir de apoyo a los objetivos y política del Sistema de Gestión que se esté auditando.
            p #[b 5.3.] El equipo responsable de la gestión del programa de auditoría debe identificar y presentar al cliente de la auditoría los riesgos y oportunidades considerados al desarrollar el programa de auditoría y los requisitos de recursos, para que puedan tratarse adecuadamente; las oportunidades pueden ser relacionadas a fechas según disponibilidad de los auditados, minimizar tiempo, número de visitas, entre otros.
            p #[b 5.4.] Se definen los roles, responsabilidades y competencias de los responsables del programa de auditoría, se establece la extensión del programa de auditoría, determinando los recursos financieros y de tiempo.

          .tarjeta.tarjeta--azul.p-4(titulo="Hacer")
            h4 Hacer
            p #[b 5.5.] En la implementación del programa de auditoría, se coordinan las actividades, se comunica el programa, se definen e implementan controles necesarios para su seguimiento, identificando mejoras.
            p Se definen objetivos, alcance y criterios de auditorías individuales, determinando métodos de auditoría y seleccionando miembros del equipo auditor. 
            p Se asignan responsabilidades al líder del equipo auditor, se gestionan resultados del programa de auditorías. Los responsables del programa deben asegurar que generan, gestionan y conservan registros de auditoría.
          .tarjeta.tarjeta--azul.p-4(titulo="Verificar")
            h4 Verificar
            p #[b 5.6.] Se debe asegurar la evaluación del cumplimiento de agendas, logro de objetivos del programa, desempeño del equipo auditor, retroalimentación de los clientes de la auditoría, suficiencia de la información documentada en el proceso de auditoría.
          .tarjeta.tarjeta--azul.p-4(titulo="Actuar")
            h4 Actuar
            p #[b 5.7.] Las personas responsables de la gestión del programa de auditoría y el cliente de la auditoría revisan el programa, también identifican oportunidades de mejora y aplican cambios al programa si es necesario. En esta etapa, también se revisa el desarrollo profesional continuo de los auditores.
      .col-md-2.d-none.d-sm-none.d-md-inline-flex
        figure
          img(src="@/assets/curso/temas/tema2/tema2-11.png", alt="")


    h4.mb-4(data-aos="fade-down-right") Relacionada con la realización 

    .row.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-10.col-12
        TabsA.color-acento-botones.mb-5(data-aos="zoom-down-right")
          .tarjeta.tarjeta--azul.p-4(titulo="Planificar")
            h4 Planificar
            p #[b 6.2.] La responsabilidad de llevar a cabo la auditoría hasta su finalización es del líder del equipo auditor designado. Al iniciar la auditoría, el líder del equipo auditor hace contacto con el auditado para comunicar canales de comunicación, objetivos, alcance, métodos y equipo de auditoría. También solicita acceso a la información pertinente, determina acuerdos de ubicación, seguridad, entre otros.
            p #[b 6.3.] Como parte de la preparación de actividades de auditoría, se revisa la información documentada para la comprensión de la operación del auditado, para preparar las actividades y los documentos de trabajo de la auditoría.
            p Con base en la información, se planifica en detalle la auditoría basada en riesgos, se asignan las tareas al equipo auditor, se prepara la información documentada para la auditoría, como listas de verificación, detalle de muestreo e información audiovisual.
          .tarjeta.tarjeta--azul.p-4(titulo="Hacer")
            h4 Hacer
            p #[b 6.4.] Se asignan roles y responsabilidad a guías y observadores de la auditoría. Se realiza reunión de apertura, se confirma el acuerdo de participantes, el equipo auditor y sus roles, se asegura ejecución de las actividades planeadas, la comunicación durante la auditoría, la disponibilidad y acceso de la información de auditoría. Se recopila, revisa y verifica la información documentada mediante muestreo. Se generan hallazgos, determinan conclusiones de auditoría, se prepara y realiza reunión de cierre.
            p #[b 6.5.] El líder del equipo auditor debe informar las conclusiones y distribuir el informe de auditoría en los tiempos acordados, de acuerdo con el programa de auditoría.
          .tarjeta.tarjeta--azul.p-4(titulo="Verificar")
            h4 Verificar
            p #[b 6.6.] Finalizando la auditoría, se revisan las lecciones aprendidas, se identifican los riesgos y las oportunidades para el programa de auditoría y para el auditado.
          .tarjeta.tarjeta--azul.p-4(titulo="Actuar")
            h4 Actuar
            p #[b 6.7.] Según los objetivos de auditoría, los resultados pueden indicar la necesidad de correcciones o de acciones correctivas u oportunidades para la mejora, se realizan las actividades de seguimiento de la auditoría, y en una auditoría posterior se puede verificar la eficacia de las acciones llevadas a cabo.
      .col-md-2.d-none.d-sm-none.d-md-inline-flex
        figure
          img(src="@/assets/curso/temas/tema2/tema2-12.png", alt="")



</template>

<script>
export default {
  name: 'Tema2',
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
