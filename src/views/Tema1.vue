<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cultura de cumplimiento y gestión de riesgos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Tanto las personas como las organizaciones que deseen ser exitosas necesitan de valores y cumplimiento de normas. Los valores, la cultura y la integridad son los motores para el éxito sostenido de las empresas, bien sean privadas o estatales.
          br
          br
          | Se dice que una persona demuestra integridad cuando es honesta, actúa correctamente, sin afectar a otros. Los valores de las personas son los determinantes de la cultura de las organizaciones, y la cultura de la organización puede definir los riesgos en el logro de los objetivos.

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-8.col-12.mb-3.mb-md-0
        p(data-aos="flip-left") Las organizaciones y las personas que deseen ser exitosas necesitan una cultura de cumplimiento evidente y genuina. Y los líderes de la organización, directores, gerentes, deberían predicar con el ejemplo, para que la cultura de cumplimiento sea adoptada por todos.
        p(data-aos="flip-left") Tradicionalmente, las actividades de gestión de riesgo y el cumplimiento de la regulación se habían ejecutado como funciones independientes, y dado que las normas y los marcos de referencia tanto de gestión de riesgo como de cumplimiento comparten requerimientos comunes, se pueden presentar actividades redundantes y uso ineficiente de recursos. 
        p(data-aos="flip-left") De la necesidad de manejar las redundancias e ineficiencias surge el programa de GRC, con una visión integral denominada Gobierno, Riesgo y Cumplimento (#[em Governance, Risk and Compliance - GRC]), con el cual se deben identificar las correlaciones entre diferentes tipos de riesgos, elementos internos y entes regulatorios, considerando que el entorno es dinámico y tanto los riesgos como los requerimientos de cumplimiento están evolucionando permanentemente.
        p.mb-3(data-aos="flip-left") La siguiente figura ilustra la estrecha relación existente entre Gobierno, Riesgo y Cumplimiento GRC:
      .col-md-4.col-10
        figure
          img(src="@/assets/curso/temas/tema1/tema1-2.png", alt="")

          
    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Gobierno, Riesgo y Cumplimiento GRC</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='En la figura se tiene los engranajes De Riesgo, Gobierno y Cumplimiento.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='En la figura se tiene los engranajes De Riesgo, Gobierno y Cumplimiento.') 

    //- .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down")
    //-   .col-md-6.col-lg.mb-2.mb-lg-0
    //-     .tarjeta-avatar
    //-       img(src='@/assets/curso/temas/tema1/icos-a.svg' alt='')
    //-       .tarjeta.color-primario.w-100
    //-         .p-4.mt-3
    //-           h4.text-center Riesgo
    //-   .col-md-6.col-lg.mb-2.mb-lg-0
    //-     .tarjeta-avatar
    //-       img(src='@/assets/curso/temas/tema1/icos-b.svg' alt='')
    //-       .tarjeta.color-primario.w-100
    //-         .p-4.mt-3
    //-           h4.text-center Gobierno
    //-   .col-md-6.col-lg.mb-2.mb-lg-0
    //-     .tarjeta-avatar
    //-       img(src='@/assets/curso/temas/tema1/icos-c.svg' alt='')
    //-       .tarjeta.color-primario.w-100
    //-         .p-4.mt-3
    //-           h4.text-center Cumplimiento


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Gobierno corporativo

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-md-4.col-lg-3.col-10.mb-3.mb-md-0
        figure
          img(src="@/assets/curso/temas/tema1/tema1-3.png", alt="")
      .col-md-8.col-lg-7.col-12(data-aos="flip-left") 
        .cajon-b.color-primario.p-3.mb-0
          p.mb-0 El gobierno corporativo es el conjunto de normas, principios y procedimientos que regulan la estructura y el funcionamiento de los órganos de gobierno de una empresa. En concreto, establece las relaciones entre la junta directiva, el consejo de administración, los accionistas y el resto de las partes interesadas, y estipula las reglas por las que se rige el proceso de toma de decisiones sobre la compañía para la generación de valor (Deloitte, 2022).
        .px-3 
          p El gobierno corporativo responde a las exigencias no solo por parte de inversores, sino también de los consumidores y de la sociedad que requieren saber cómo las organizaciones logran los resultados. Es por esto que cada vez adquiere mayor relevancia que las organizaciones sean gestionadas con transparencia, buenas prácticas y comportamiento responsable, para lograr mayores niveles de confianza y haciéndolas más atractivas, competitivas y sostenibles en el tiempo. 

    p.mb-3(data-aos="flip-left") Por el contrario, la falta de buen gobierno corporativo es la causa de reportes de falsos registros contables, contratación sin criterios profesionales, aceptación de sobornos, desvío de dineros a cuentas personales, e innumerables situaciones que se han presentado en organizaciones. El tipo de gobierno corporativo depende del tipo de empresa; por ejemplo, las que cotizan en bolsa son presionadas a tener un gobierno corporativo sólido, requisito de normas de las comisiones de valores de cada jurisdicción.
    p.mb-3(data-aos="flip-left") Sin embargo, las prácticas de gobierno corporativo pueden y deben ser aplicadas a todas las empresas, sin importar el tamaño, porque, como se mencionaba al comienzo, cada vez es más fácil que se divulguen las faltas y sean de conocimiento de clientes y sociedad en general, a través de medios de comunicación y redes sociales, lo que también constituye riesgos reputacionales. 
    p.mb-5(data-aos="flip-left") Las normas de gobierno corporativo articulan los componentes siguientes:

    .row.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.px-5.py-4
          .tarjeta-numerada__numero
            .h2 1
          p.text-center Toma de decisiones y políticas corporativas.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.px-5.py-4
          .tarjeta-numerada__numero
            .h2 2
          p.text-center Mecanismos de control sobre el desempeño de la dirección ejecutiva.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.px-5.py-4
          .tarjeta-numerada__numero
            .h2 3
          p.text-center Cumplimiento del marco normativo.

      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-botones.px-5.py-4
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Relaciones entre órganos de gobierno, derechos y deberes de: consejo de administración, junta directiva y accionistas.

    p.mb-5(data-aos="flip-left") En cuanto a empresas del Estado, los principios de buen gobierno, la metodología de gestión del riesgo y el cumplimiento de normas son similares al sector privado, la diferencia principal es que el objetivo no es necesariamente maximizar el valor de los accionistas, sino proveer servicios y productos de acuerdo con los intereses y prioridades definidas por el Estado. Según se describe en DNP (s.f.), la práctica del buen gobierno busca mejores organizaciones, eficiencia de los recursos públicos y procesos de gestión, atracción y promoción de talento humano con excelencia para el servicio público, y mayor transparencia. También se mencionan los principios orientadores del ejercicio del buen gobierno:

    .row.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-6.col-md-10.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/tema1-4.svg' alt='')
          .tarjeta.color-primario
            .p-4
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Transparencia y rendición de cuentas.
                li.mb-0
                  span.icon ✔ 
                  | Gestión pública efectiva.
                li.mb-0
                  span.icon ✔ 
                  | Participación y servicio al ciudadano.
                li.mb-0
                  span.icon ✔ 
                  | Vocación por el servicio público.
                li.mb-0
                  span.icon ✔ 
                  | Estrategias de lucha contra la corrupción.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Gestión de Riesgos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los estándares internacionales definen los riesgos como eventos que impiden el logro de los objetivos de las organizaciones. Y la gestión de riesgo es el conjunto de actividades que la organización realiza para entender y reducir los efectos de la incertidumbre en el logro de los objetivos. Por lo tanto, el primer paso en una gestión de riesgo es entender los objetivos de la organización en particular.
          br
          br
          | En el proceso de gestión de riesgos se identifican, analizan, mitigan y controlan los riesgos, hasta dejarlos en un nivel residual que sea aceptable por la organización.

    p.mb-3(data-aos="flip-left") La gestión de riesgo tradicionalmente se asocia al análisis cuantitativo, y exige conocimientos de probabilidades, finanzas, estadística y matemáticas. Pero también, por tener elementos de comportamiento humano, la gestión de riesgo requiere del componente psicológico, de habilidades de imaginación y persuasión para comunicar a las partes interesadas.
    p.mb-5(data-aos="flip-left") En la actividad de identificación de los riesgos, estos se pueden agrupar en categorías, que según la función se pueden clasificar de la siguiente manera:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Riesgo estratégico")
            .col-md-6.mb-4.mb-md-0
              p Se presenta por efecto de la decisión tomada o no respecto al rumbo que sigue la organización.
              p Ejemplos: Son fuentes de riesgo estratégico:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Implementación de tecnologías emergentes.
                li.mb-0
                  span.icon ✔ 
                  | Fusiones y adquisiciones.
                li.mb-0
                  span.icon ✔ 
                  | Riesgo reputacional.
                li.mb-0
                  span.icon ✔ 
                  | Robo de propiedad intelectual.
                li.mb-0
                  span.icon ✔ 
                  | Espionaje industrial.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
          .row(titulo="Riesgo financiero")
            .col-md-6.mb-4.mb-md-0
              p Relacionado con la pérdida de dinero en una inversión o iniciativa de negocio. 
              p Ejemplos:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Riesgo de liquidez.
                li.mb-0
                  span.icon ✔ 
                  | Riesgo de crédito.
                li.mb-0
                  span.icon ✔ 
                  | Fraude financiero.
                li.mb-0
                  span.icon ✔ 
                  | Lavado de dinero.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
          .row(titulo="Riesgo legal y reglamentario")
            .col-md-6.mb-4.mb-md-0
              p Resulta de violación de leyes, regulaciones, códigos de conducta o práctica establecidos en una industria u organización.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
          .row(titulo="Riesgo operacional")
            .col-md-6.mb-4.mb-md-0
              p Fallas de procesos, personas, sistemas y equipos.
              p Ejemplos:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Configuraciones erróneas.
                li.mb-0
                  span.icon ✔ 
                  | Afectación de infraestructura crítica.
                li.mb-0
                  span.icon ✔ 
                  | Gestión de proveedores.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
          .row(titulo="Riesgo tecnológico")
            .col-md-6.mb-4.mb-md-0
              p La tecnología ha potenciado la productividad y también ha expuesto a las organizaciones a nuevos riesgos relacionados con la información. 
              p Ejemplos:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Falla accidental o intencional de componentes tecnológicos.
                li.mb-0
                  span.icon ✔ 
                  | Fraude.
                li.mb-0
                  span.icon ✔ 
                  | Piratería informática.
                li.mb-0
                  span.icon ✔ 
                  | Datos sensibles.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
          .row(titulo="Ciberseguridad")
            .col-md-6.mb-4.mb-md-0
              p Va más allá del aprovechamiento de una falla o vulnerabilidad de componentes, puede afectar personas, organizaciones y países dadas las características de propagación y evolución, así como la incertidumbre que se puede presentar.
              p Ejemplos:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | Secuestro de datos.
                li.mb-0
                  span.icon ✔ 
                  | #[em Fearware] (manipulación social).
                li.mb-0
                  span.icon ✔ 
                  | Fraudes con criptomonedas.
                li.mb-0
                  span.icon ✔ 
                  | Ataques usando inteligencia artificial.
                li.mb-0
                  span.icon ✔ 
                  | Compromiso de datos en la nube híbrida.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Cumplimiento de la regulación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El “#[em compliance]” hace relación a los esfuerzos de las organizaciones por mitigar el riesgo legal. El cumplimiento puede tener una parte de obligaciones de cumplimiento #[b mandatorias] y otra parte de obligaciones de cumplimiento #[b voluntarias]. 
          br
          br
          | Las obligaciones de cumplimiento mandatorias se refieren a las leyes que deben cumplir las empresas, pueden ser ambientales, laborales, leyes de lavado de activos, etc. Y las obligaciones de cumplimiento voluntarias están relacionadas con cumplimiento de obligaciones adquiridas por acuerdos con empleados, por ejemplo, obligaciones contractuales, requisitos de norma ISO, directrices, y también relacionadas con mitigar penas por delitos como el cohecho o la colusión, contienen elementos de autorregulación y se refuerzan con códigos internos de conducta (Cascón, 2021).

    p.mb-3(data-aos="flip-left") Cada organización debe cumplir regulaciones según el sector al que pertenece, e históricamente, los servicios financieros han sido de los más exigidos por las regulaciones en todos los países, junto con los de salud, alimentos, minería y transporte.  
    p.mb-5(data-aos="flip-left") El riesgo legal se basa en reglas y, por tanto, es manejable con una estrategia de cumplimiento sólida y la implementación de un Sistema de Gestión de Cumplimiento (SGC); las pérdidas financieras por multas y los daños de reputación son evitables. Debido a la aprobación de leyes de responsabilidad penal para las personas jurídicas, en los últimos años, puede ser un mitigante del riesgo legal para las organizaciones tener implementado un SGC.

    .row.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-8.col-md-10.col-12
        .cajon.color-primario.p-4
          .row.justify-content-center
            .col-md-3.col-lg-2.col-10
              img(src='@/assets/curso/temas/tema1/tema1-13.svg' alt='')
            .col-md-9.col-lg-10.col-12
              p En términos generales, son elementos clave del programa de cumplimiento:
              ul.lista-ul.ms-3.mb-0
                li.mb-0
                  span.icon ✔ 
                  | El rol del oficial de cumplimiento.
                li.mb-0
                  span.icon ✔ 
                  | El mapa de riesgos.
                li.mb-0
                  span.icon ✔ 
                  | El plan de comunicación.
                li.mb-0
                  span.icon ✔ 
                  | Los códigos internos de conducta.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Gobierno, Riesgo y Cumplimiento  en la era digital
    
    p.mb-3(data-aos="fade-down-right") Hoy por hoy, las compañías se transformaron y se adaptaron a las nuevas condiciones, desarrollando nuevos productos y servicios basados en datos y explotando tecnologías emergentes con aplicaciones de #[em blockchain, Big data, IoT], Inteligencia Artificial.
    p.mb-3(data-aos="fade-down-right") Debido al nuevo contexto, la gestión de riesgos debe incluir riesgos emergentes con estas características (SENA, 2020):
    
    ul.lista-ul.ms-3.ms-lg-4.mb-5(data-aos="fade-right")
      li.mb-1
        span.icon ✔ 
        | Alta incertidumbre y falta de conocimiento sobre impacto e interacciones.
      li.mb-1
        span.icon ✔ 
        | Incremento de complejidad, interacciones emergentes y dependencias sistemáticas.
      li.mb-1
        span.icon ✔ 
        | Cambios en el contexto: político, económico, social, tecnológico y legal.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se requiere entender el riesgo en el contexto digital, con las características de incertidumbre y complejidad, y aprender de los eventos para el desarrollo de la capacidad de resiliencia. La resiliencia de una organización se desarrolla con la combinación de factores estratégicos y operativos.
          br
          br
          | “La resiliencia organizacional es la capacidad de una organización para absorber y adaptarse en un entorno cambiante para permitirle cumplir sus objetivos y sobrevivir y prosperar. Las organizaciones más resilientes pueden anticipar y responder a amenazas y oportunidades, que surgen de cambios repentinos o graduales en su contexto interno y externo. Mejorar la resiliencia puede ser un objetivo estratégico de la organización y es el resultado de una buena práctica empresarial y una gestión eficaz del riesgo” (ISO, 2017). 

    p.mb-4(data-aos="fade-down-right") Para generar la confianza digital, las organizaciones, entonces, ahora deben además de contar con el proceso de gestión de seguridad para garantizar la continuidad del negocio, también desarrollar capacidades de resiliencia para lograr mantener la operación del negocio a pesar de haber sido impactados por eventos de ciberseguridad.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Marcos de referencia y estándares internacionales para el GRC
      div.titulo-herramientas.d-block.d-md-none Marcos de referencia y estándares internacionales para el GRC

    p.mb-4(data-aos="fade-down-right") El uso de marcos de referencia y estándares permite impulsar programas de Gobierno, Riesgo y Cumplimiento apropiados para cada organización. A continuación, se presentan algunos de los principales relacionados con este programa que se pueden adoptar de manera integral en las organizaciones:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row.justify-content-center(titulo="COBIT")
            .col-12
              p #[em Control Objectives for Information and Related Technologies] (ISACA, 2019) es un marco de referencia para el gobierno y la gestión de la información y la tecnología empresarial, dirigido a toda la empresa. 
              p Integra varios estándares para procesos específicos, como #[em COSO], para controles internos; ITIL, para alinearse con las necesidades de la empresa; #[em BiSL], enfocada en la demanda de información; el estándar #[em ISO 27000], de seguridad para TI; el entrenamiento en mejoras de procesos, #[em CMMI; TOGAF], para la arquitectura empresarial; y #[em PMBOK], para manejo de proyectos. 
            .col-12.col-md-10.mt-3.text-center
              img(src='@/assets/curso/temas/tema1/tema1-15.png' alt='')
          .row.justify-content-center(titulo="Modelo de capacidad GRC - OCEG")
            .col-12
              p Este modelo de capacidad de GRC es el primer y único estándar de código abierto que integra las diversas subdisciplinas de gobierno, riesgo, auditoría, cumplimiento, ética/cultura y TI en un enfoque unificado basado en principios (OCEG, 2022). 
              p Este estándar se puede usar para abordar una variedad de situaciones y áreas temáticas, desde anticorrupción hasta continuidad comercial y administración de terceros. El modelo es una excelente herramienta para enmarcar conversaciones sobre las capacidades de #[em GRC] con la junta directiva, los altos ejecutivos y los gerentes. 
            .col-12.col-md-10.mt-3
              .row.justify-content-center.mb-5
                .col-12(data-aos="fade-left")
                  .titulo-sexto.color-acento-contenido
                    p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Modelo de capacidad GRC</i>
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-16.svg', alt='En la figura se tiene en el centro interactuar, alrededor en circulo organizar, evaluar, pro actuar, detectar, responder y medir. En el circulo externo el contexto con diseño y organización, gestión de incertidumbre, operación y continuidad, aprendizaje y monitoreo.')
          .row.justify-content-center(titulo="Modelo COSO")
            .col-12
              p Para gestión de riesgos. Sus siglas responden a #[em Committee of Sponsoring Organizations of the Treadway] (COSO, 2017), que es una organización de carácter voluntario constituida por representantes de cinco organizaciones del sector privado en Estados Unidos. Nace en 1985 con la misión de crear y proporcionar conocimiento frente a la gestión del riesgo empresarial (ERM), el control interno y la lucha contra el fraude.
            .col-12.col-md-10.mt-3
              .row.justify-content-center.mb-5
                .col-12(data-aos="fade-left")
                  .titulo-sexto.color-acento-contenido
                    p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Modelo COSO</i>
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-17.svg', alt='En la figura se tiene un cubo, en la base  se tiene ambiente de control, sobre esta capa evaluación de riesgo, luego actividades de control, posteriormente información y comunicación, por último monitoreo. En la parte superior del cubo se tienen operaciones, informe financiero y cumplimiento, y horizontalmente se tiene Actividad 1 y 2, unidad A y B.')
          .row.justify-content-center(titulo="Modelo de las tres líneas")
            .col-12
              p Promueve un gobierno sólido y la gestión de riesgos (IIA, 2020). El IIA Instituto de Auditores Internos, en el año 2020, actualizó el modelo de gestión de riesgo y control, “Modelo de las tres líneas de defensa”, por un modelo de interconexión de los roles: Órgano de Gobierno, Gerencia y Auditoría Interna, para asegurar las condiciones de cumplimiento de la organización.
            .col-12.col-md-10.mt-3
              .row.justify-content-center.mb-5
                .col-12(data-aos="fade-left")
                  .titulo-sexto.color-acento-contenido
                    p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Modelo de las tres líneas</i>
                  figure
                    img(src='@/assets/curso/temas/tema1/tema1-18.svg', alt='En la figura se tiene en la primera línea de defensa: controles de gerencia, medidas de control interno. En la segunda línea de defensa se tiene: controles financieros, seguridad, gestión de riesgos, calidad, inspección y cumplimiento. En la tercera línea de defensa se tiene la auditoría interna. Sobre las tres líneas se tiene la alta dirección, luego organismo de Gobierno, consejo, comité de auditoría. Paralelamente se realiza auditoría externa y organismos de control.')
          .row.justify-content-center(titulo="Norma ISO 31000:2018")
            .col-12
              p Contiene los principios y guías para la gestión de riesgo, y define el riesgo, no de la manera tradicional, enfocado en las posibles pérdidas, sino como el efecto de la incertidumbre en los objetivos de la empresa (ISO, 2018). La ISO 31000:2018, aunque no es certificable, permite a las organizaciones de todos los sectores, sin importar que sean públicas o privadas, incorporar estándares y procesos de alto nivel para evaluar y mitigar cualquier tipo de riesgo en todas sus operaciones.
            .col-12.col-md-10.mt-3.text-center
              img(src='@/assets/curso/temas/tema1/tema1-19.png' alt='')
          .row.justify-content-center(titulo="ISO 37301:2021")
            .col-12
              p #[em Compliance Management System] se crea como respuesta al creciente interés de las empresas por alinear sus sistemas de gestión de cumplimiento de acuerdo con normas internacionales (ISO, 2021). Esta reemplazó a la ISO 19600:2014 #[em Compliance Management Systems - Guidelines]. El documento especifica los requisitos y proporciona directrices para establecer, desarrollar, implementar, evaluar, mantener y mejorar un sistema de gestión del "#[em compliance]" eficaz dentro de una organización. El documento es aplicable a toda clase de organizaciones, independientemente del tipo, tamaño y naturaleza de la actividad, así como a organizaciones del sector público, privado o sin fines de lucro.
            .col-12.col-md-10.mt-3.text-center
              img(src='@/assets/curso/temas/tema1/tema1-20.png' alt='')

      .col-12.d-block.d-md-none.mt-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/Marcos_y_estandares_GRC.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar.] Marcos y estándares GRC
          
    p.mb-5(data-aos="fade-down-right") Como se vio, son varias las organizaciones de profesionales que han trabajado en los últimos años en el desarrollo y madurez de normas y marcos de referencia. Estas organizaciones, además, ofrecen permanente formación a los asociados y profesionales interesados en adquirir las habilidades y competencias, también ofrecen exámenes de certificación en dichos marcos y normas, con el fin de que los profesionales demuestren su idoneidad para desempeñarse como consultores de los temas de riesgo y cumplimiento. 


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
