import type { ServiceFeatureIconId } from "./serviceFeatureIcons"

export type ServiceFeature = {
  icon: ServiceFeatureIconId
  title: string
  description: string
}

export type Service = {
  id: number
  image: string
  title: string
  slug: string
  description: string
  longDescription: string
  features: ServiceFeature[]
}

const services: Service[] = [
  {
    id: 1,
    image: "https://i.ibb.co/mCVTx2qM/mantenimientopreventivo.jpg",
    title: "Mantenimiento Preventivo",
    slug: "mantenimiento-preventivo",
    description: "Programas de revisión periódica diseñados para prolongar la vida útil de su maquinaria. Reducimos el riesgo de paradas imprevistas y optimizamos el rendimiento constante de su planta industrial.",
    longDescription:
      "Con el mantenimiento preventivo lo que queremos es evitar o mitigar las consecuencias de una posible falla del equipo, previniendo las incidencias antes de que estas ocurran. Las tareas de mantenimiento preventivo incluyen acciones como cambiar piezas consumibles en desgaste, lubricación, ajustes, etc. El mantenimiento preventivo debe evitar los fallos en el equipo antes de que estos ocurran.",
    features: [
      {
        icon: "calendarClock",
        title: "Planes por calendario",
        description: "Rutinas definidas según horas de operación o intervalos de tiempo para no dejar pasar revisiones críticas.",
      },
      {
        icon: "clipboardList",
        title: "Checklist documentado",
        description: "Listas de verificación por equipo y criticidad, con registro para trazabilidad y auditorías.",
      },
      {
        icon: "shield",
        title: "Menos paradas imprevistas",
        description: "Enfoque en piezas de desgaste, lubricación y ajustes que reducen fallas sorpresivas en planta.",
      },
    ],
  },
  {
    id: 2,
    image: "https://i.ibb.co/wZg90368/mantenimientopredictivo.jpg",
    title: "Mantenimiento Predictivo",
    slug: "mantenimiento-predictivo",
    description: "Monitoreo avanzado y diagnóstico en tiempo real de sus equipos. Detectamos anomalías, desgastes y vibraciones antes de que se conviertan en fallas críticas, asegurando la máxima disponibilidad operativa.",
    longDescription:
      "Con el mantenimiento predictivo lo que queremos es anticipar las fallas antes de que ocurran, utilizando datos en tiempo real para tomar decisiones de mantenimiento en el momento adecuado. Este enfoque se basa en el análisis de señales de salud del equipo, como vibraciones, temperaturas, presiones y otros parámetros, para identificar anomalías que indiquen un deterioro progresivo.",
    features: [
      {
        icon: "activity",
        title: "Monitoreo de condición",
        description: "Seguimiento de vibraciones, temperaturas y parámetros eléctricos para detectar tendencias anómalas.",
      },
      {
        icon: "gauge",
        title: "Diagnóstico basado en datos",
        description: "Interpretación de mediciones para anticipar intervenciones antes de que el equipo falle en servicio.",
      },
      {
        icon: "calendarClock",
        title: "Intervención oportuna",
        description: "Ventanas de mantenimiento alineadas al estado real del activo, optimizando recursos y paradas.",
      },
    ],
  },
  {
    id: 3,
    image: "https://i.ibb.co/yBf5b7Rz/mantenimientocorrectivo.jpg",
    title: "Mantenimiento Correctivo",
    slug: "mantenimiento-correctivo",
    description: "Respuesta técnica rápida y especializada para la reparación de averías súbitas. Solucionamos fallas mecánicas, eléctricas y electrónicas para restaurar su línea de producción en el menor tiempo posible.",
    longDescription:
      "Con el mantenimiento correctivo lo que queremos es reparar las fallas que ya han ocurrido en los equipos, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de mantenimiento se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El mantenimiento correctivo se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "hammer",
        title: "Reparación en campo",
        description: "Desmontaje, sustitución de componentes y pruebas funcionales para restablecer la operación segura.",
      },
      {
        icon: "search",
        title: "Causa raíz",
        description: "Análisis de la falla para evitar recurrencias y proponer mejoras en operación o mantenimiento.",
      },
      {
        icon: "clipboardList",
        title: "Informe técnico",
        description: "Registro de hallazgos, repuestos utilizados y recomendaciones posteriores al cliente.",
      },
    ],
  },
  {
    id: 4,
    image: "https://gamrentals.com/media/media-bd/imagenes/foto-bloque-mantenimiento-correctivo-1920x1280-1685964086.jpg",
    title: "Auxilio técnico y atención de emergencias",
    slug: "auxilio-tecnico-y-atencion-de-emergencias",
    description:
      "Auxilio técnico y atención de emergencias para equipos industriales para prevenir fallas y garantizar el funcionamiento continuo de sus instalaciones.",
    longDescription:
      "Con el auxilio técnico y atención de emergencias lo que queremos es brindar apoyo inmediato a los equipos industriales cuando se presentan fallas o emergencias, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El auxilio técnico y atención de emergencias se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "phone",
        title: "Atención prioritaria",
        description: "Canal de contacto para paradas críticas con priorización según impacto en producción.",
      },
      {
        icon: "truck",
        title: "Desplazamiento rápido",
        description: "Coordinación logística para acortar tiempos de llegada del técnico a su planta.",
      },
      {
        icon: "alertTriangle",
        title: "Protocolos de seguridad",
        description: "Trabajo bajo procedimientos seguros en equipos energizados o en condiciones de riesgo.",
      },
    ],
  },
  {
    id: 5,
    image: "https://www.emasa.pe/imagenes/repuestos-sistema-electrico-automotriz.jpg",
    title: "Venta e instalación de repuestos mecánicos, eléctricos y electrónicos",
    slug: "venta-e-instalacion-de-repuestos-mecanicos-electricos-y-electronicos",
    description:
      "Venta e instalación de repuestos mecánicos, eléctricos y electrónicos para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con la venta e instalación de repuestos mecánicos, eléctricos y electrónicos lo que queremos es proporcionar componentes de calidad para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. La venta e instalación de repuestos mecánicos, eléctricos y electrónicos se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "package",
        title: "Suministro de repuestos",
        description: "Identificación de referencias originales o equivalentes según fabricante y aplicación.",
      },
      {
        icon: "wrench",
        title: "Instalación calificada",
        description: "Montaje, torqueado y comisionado de componentes mecánicos, eléctricos y electrónicos.",
      },
      {
        icon: "clipboardList",
        title: "Trazabilidad",
        description: "Registro de series y lotes instalados para garantías y futuras auditorías de mantenimiento.",
      },
    ],
  },
  {
    id: 6,
    image: "https://teamdem.com/images/servicios/puesta-en-marcha-de-equipos-industriales.webp",
    title: "Instalación, montaje y puesta en marcha de equipos industriales",
    slug: "instalacion-montaje-y-puesta-en-marcha-de-equipos-industriales",
    description:
      "Instalación, montaje y puesta en marcha de equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con la instalación, montaje y puesta en marcha de equipos industriales lo que queremos es proporcionar componentes de calidad para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. La instalación, montaje y puesta en marcha de equipos industriales se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "factory",
        title: "Montaje en sitio",
        description: "Alineación, nivelación, anclaje y conexión mecánica según manual y normativa aplicable.",
      },
      {
        icon: "settings",
        title: "Puesta en marcha",
        description: "Parametrización, pruebas en vacío y en carga hasta validar desempeño nominal.",
      },
      {
        icon: "clipboardList",
        title: "Entrega documentada",
        description: "Checklist de arranque, registros de prueba y capacitación básica a operadores.",
      },
    ],
  },
  {
    id: 7,
    image: "https://gpooasis.com/wp-content/uploads/2020/11/Tipos-de-sistema-de-ventilacion.jpg",
    title: "Instalación de sistemas de ventilación y extracción de aire",
    slug: "instalacion-de-sistemas-de-ventilacion-y-extraccion-de-aire",
    description:
      "Instalación de sistemas de ventilación y extracción de aire para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con la instalación de sistemas de ventilación y extracción de aire lo que queremos es proporcionar componentes de calidad para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. La instalación de sistemas de ventilación y extracción de aire se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "fan",
        title: "Balance térmico y caudales",
        description: "Dimensionamiento y distribución de ductos para renovación de aire adecuada por ambiente.",
      },
      {
        icon: "layers",
        title: "Integración en obra",
        description: "Coordinación con estructuras, eléctricos y producción para minimizar interferencias.",
      },
      {
        icon: "activity",
        title: "Pruebas de funcionamiento",
        description: "Medición de presiones y caudales para verificar el diseño frente a condiciones reales.",
      },
    ],
  },
  {
    id: 8,
    image:
      "https://20963350.fs1.hubspotusercontent-na1.net/hubfs/20963350/Imported_Blog_Media/Capacitacion-industrial-igual-a-seguridad-para-el-personal-2.png",
    title: "Capacitación técnica industrial",
    slug: "capacitacion-tecnica-industrial",
    description:
      "Capacitación técnica industrial para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con la capacitación técnica industrial lo que queremos es proporcionar conocimientos y habilidades para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. La capacitación técnica industrial se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "bookOpen",
        title: "Contenidos a medida",
        description: "Módulos según su línea de proceso, equipos críticos y nivel del personal.",
      },
      {
        icon: "users",
        title: "Enfoque práctico",
        description: "Ejercicios en planta o taller para reforzar procedimientos seguros de operación.",
      },
      {
        icon: "clipboardList",
        title: "Material de apoyo",
        description: "Guías, checklists y referencias para sostener el aprendizaje después del curso.",
      },
    ],
  },
  {
    id: 9,
    image: "https://sepiia.run/wp-content/uploads/2025/02/tipos-de-procesos-automatizados-sepiia.webp",
    title: "Diseño e Implementación de proyectos de automatización",
    slug: "diseno-e-implementacion-de-proyectos-de-automatizacion",
    description:
      "Diseño e Implementación de proyectos de automatización para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con el diseño e implementación de proyectos de automatización lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El diseño e implementación de proyectos de automatización se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "cpu",
        title: "Arquitectura de control",
        description: "Selección de PLC, HMI, variadores y redes industriales según requisitos del proceso.",
      },
      {
        icon: "workflow",
        title: "Integración de señales",
        description: "Cableado, instrumentación y lógica para sincronizar etapas y alarmas con su operación.",
      },
      {
        icon: "settings",
        title: "Puesta a punto",
        description: "Depuración de secuencias, tiempos y seguridades hasta validar producción estable.",
      },
    ],
  },
  {
    id: 10,
    image: "https://aggity.com/wp-content/uploads/2025/11/balanceo-de-lineas.webp",
    title: "Modificaciones en línea de producción",
    slug: "modificaciones-en-linea-de-produccion",
    description:
      "Modificaciones en línea de producción para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con las modificaciones en línea de producción lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. Las modificaciones en línea de producción se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "gitBranch",
        title: "Reingeniería de layout",
        description: "Propuestas de redistribución de equipos y flujos para ganar throughput o ergonomía.",
      },
      {
        icon: "factory",
        title: "Ejecución coordinada",
        description: "Ventanas de parada acotadas y plan de rollback para reducir riesgo en producción.",
      },
      {
        icon: "clipboardList",
        title: "Validación post-cambio",
        description: "Pruebas de ritmo, calidad y seguridad antes del cierre formal del proyecto.",
      },
    ],
  },
  {
    id: 11,
    image: "https://manpan.com/wp-content/uploads/2024/10/camaras-conservacion-congelacion-panaderia-2.jpg",
    title: "Instalación de camaras de conservación y congelación",
    slug: "instalacion-de-camaras-de-conservacion-y-congelacion",
    description:
      "Instalación de camaras de conservación y congelación para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con la instalación de camaras de conservación y congelación lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. La instalación de camaras de conservación y congelación se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "snowflake",
        title: "Cadena de frío",
        description: "Montaje de equipos de refrigeración, aislamiento y sellado según temperatura objetivo.",
      },
      {
        icon: "gauge",
        title: "Control de temperatura",
        description: "Instrumentación y alarmas para mantener rangos seguros de conservación o congelación.",
      },
      {
        icon: "shield",
        title: "Cumplimiento HACCP",
        description: "Criterios orientados a buenas prácticas en instalaciones alimentarias cuando aplica.",
      },
    ],
  },
  {
    id: 12,
    image: "https://siocorp.pe/wp-content/uploads/2023/12/t-de-fuerza.png",
    title: "Diseño e instalación de tableros eléctricos industriales",
    slug: "diseno-e-instalacion-de-tableros-electricos-industriales",
    description:
      "Diseño e instalación de tableros eléctricos industriales para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con el diseño e instalación de tableros eléctricos industriales lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El diseño e instalación de tableros eléctricos industriales se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "layers",
        title: "Ingeniería de tablero",
        description: "Diagramas unifilares, selección de protecciones y seccionado según carga y norma.",
      },
      {
        icon: "bolt",
        title: "Montaje y conexionado",
        description: "Cableado ordenado, identificación de circuitos y pruebas de aislamiento.",
      },
      {
        icon: "clipboardList",
        title: "Entrega y señalética",
        description: "Planos as built, etiquetado de breakers y instructivos para mantenimiento eléctrico.",
      },
    ],
  },
  {
    id: 13,
    image: "https://www.iprecom.com/wp-content/uploads/2019/07/bomba-de-agua.jpg",
    title: "Mantenimiento de bombas de agua",
    slug: "mantenimiento-de-bombas-de-agua",
    description:
      "Mantenimiento de bombas de agua para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con el mantenimiento de bombas de agua lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El mantenimiento de bombas de agua se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "activity",
        title: "Diagnóstico hidráulico",
        description: "Revisión de presiones, caudales, cavitación y vibración en rodamientos y acoplamientos.",
      },
      {
        icon: "wrench",
        title: "Sello y rodamientos",
        description: "Cambio de sellos mecánicos, empaquetaduras y componentes de desgaste con alineación.",
      },
      {
        icon: "gauge",
        title: "Puesta a punto",
        description: "Ajuste de variadores, válvulas y protecciones para operación estable y eficiente.",
      },
    ],
  },
  {
    id: 14,
    image: "https://mantenimientoindustrialcrm.com/wp-content/uploads/2020/10/generadores-electricos.jpg",
    title: "Mantenimiento de grupos electrógenos",
    slug: "mantenimiento-de-grupos-electrogenos",
    description:
      "Mantenimiento de grupos electrógenos para equipos industriales para prevenir fallas y garantizar la continuidad operativa.",
    longDescription:
      "Con el mantenimiento de grupos electrógenos lo que queremos es proporcionar soluciones integrales para los equipos industriales, con el objetivo de restablecer su funcionamiento normal lo antes posible. Este tipo de servicio se realiza en respuesta a una falla o avería que ha interrumpido la operación del equipo. El mantenimiento de grupos electrógenos se caracteriza por ser reactiva, es decir, se realiza después de que el equipo ha fallado o ha presentado un problema.",
    features: [
      {
        icon: "zap",
        title: "Pruebas de carga",
        description: "Ensayos bajo demanda para verificar regulación de voltaje/frecuencia y respuesta del motor.",
      },
      {
        icon: "clipboardList",
        title: "Mantenimiento programado",
        description: "Filtros, lubricantes, refrigerante y baterías según horas y fabricante.",
      },
      {
        icon: "shield",
        title: "Arranque confiable",
        description: "Chequeo de transferencias automáticas y señales de arranque para emergencias.",
      },
    ],
  },
]

export function getServiceByIdParam(param: string): Service | undefined {
  const id = parseInt(param, 10)
  if (!Number.isFinite(id) || id < 1) return undefined
  return services.find((service) => service.id === id)
}

export function getServiceBySlugParam(param: string): Service | undefined {
  return services.find((service) => service.slug === param)
}

export const HOME_SERVICES_LIMIT = 4

export function getServicesForHome(): Service[] {
  return services.slice(0, HOME_SERVICES_LIMIT)
}

export default services

