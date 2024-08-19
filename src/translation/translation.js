const CONTENT = {
  "ES": {
    "menubar": {
      "button1": "🗄️ Experiencia",
      "button2": "👨‍🎓 Mi Educación",
      "button3": "📚 Proyectos",
      "button4": "💻 IT Blog"
    },
    "aboutme": {
      "title": "Acerca/de/mi#~",
      "description": "Mi nombre es Kevin Daniel Taylor soy Full Stack Developer con experiencia en el desarrollo de aplicaciones web. Me apasiona aprender nuevas tecnologías y aplicar mis conocimientos para ayudar a otros a alcanzar sus objetivos. En el año 2023 me gradué como Analista de Sistemas en el ISFT N° 151 y estoy comprometido a mantenerme actualizado en mi campo.<br> Soy un profesional comprometido con la calidad y la excelencia en todo lo que hago. Disfruto trabajando en equipo y tengo habilidades de comunicación efectiva y colaboración."
    },
    "experience": {
      "title": "Experiencia",
      "list": [
        {
          "position": "Software Developer",
          "period": "2023 - Actual",
          "company": "EnvioPack",
          "description": "<li>Actualmente trabajo como Desarrollador Fullstack en Envíopack, contribuyendo a la internacionalización de una plataforma basada en Symfony, con mayor foco en PHP Vanilla debido a problemas con la versión del framework; utilizo MySQL para la gestión de bases de datos, Redis para el almacenamiento en caché y Nginx como servidor web.</li> <li>Soy el desarrollador principal para tareas importantes de backend y responsable de desplegar tareas de Jira en el servidor de QA alojado en instancias AWS EC2, proceso que actualmente se realiza manualmente.Además, estoy involucrado en el desarrollo de una solución de integración continua para pruebas automatizadas.</li>  <li>Participo en la transición de Angular.js a React, integrando APIs para servicios postales internacionales(FedEx, Almex, por ejemplo), internacionalizando la plataforma e implementando nuevas funcionalidades solicitadas por los equipos de Producto y Soporte</li>"
        },
        {
          "position": "C++ Developer",
          "period": "2021 - 2022",
          "company": "EcoDev",
          "description": "<li>Desarrollo de Api para terceros en C/C++ hasta versión 14.</li> <li>Participación en todo el proceso de desarrollo de software con la metodología de desarrollo de software en  cascada, de forma tal que era capaz de participar en la toma de requerimientos, en el diseño y  en la implementación de los requerimientos solicitados.</li> <li>Desarrollo de API interna para automatizar procesos relacionados a la gestión interna de la organización realizada con httplib single header file, build con CMake.</li <li>En el proyecto se requería conocimientos de S.O. profundos como IPC(Inter-Process Communication), Threads, Input/Output, Concurrency, etc.</li>"
        }
      ]
    },
    "education": {
      "title": "Educación",
      "list": [
        {
          "institution": "ISFT N° 151",
          "titleName": "Analista de Sistemas",
          "period": "2019 - 2023",
          "description": "Formación profunda en procesos de Soft. Eng. Además, formación en Teoría General de la Administración, como en Teoría General de Sistemas. La formación estuvo orientada para tener amplios conocimientos en todo el proceso de desarrollo de software industrial.<br> En la misma se vieron diferentes lenguajes de programación con énfasis en C/C++ y JavaScript.<br> También una sólida formación en la Ing. de Requerimientos."
        },
        {
          "institution": "ESS N° 46",
          "titleName": "Bachiller en Ciencias de la Comunicación",
          "period": "2011 - 2017",
          "description": "Formación en Investigación y Análisis de Medios; Comunicación Institucional y Medios, etc."
        }
      ]
    }
  },
  "EN": {

  }
};

export function getLang() {
  if (navigator.language.startsWith('es')) {
    return 'ES';
  }
  return 'EN';
}

function translate(obj) {
  const objKey = obj.split('.');

  let result = CONTENT[getLang()];
  for (const key of objKey) {
    if (key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }

  return result;
}

export const t = translate;
