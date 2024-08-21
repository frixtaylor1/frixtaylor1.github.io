
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
    "menubar": {
      "button1": "🗄️ Experience",
      "button2": "👨‍🎓 My Education",
      "button3": "📚 Projects",
      "button4": "💻 IT Blog"
    },
    "aboutme": {
      "title": "About Me",
      "description": "My name is Kevin Daniel Taylor, and I am a Full Stack Developer with experience in web application development. I am passionate about learning new technologies and applying my knowledge to help others achieve their goals. In 2023, I graduated as a Systems Analyst from ISFT N° 151, and I am committed to staying current in my field.<br> I am a professional committed to quality and excellence in everything I do. I enjoy working in teams and have effective communication and collaboration skills."
    },
    "experience": {
      "title": "Experience",
      "list": [
        {
          "position": "Software Developer",
          "period": "2023 - Present",
          "company": "EnvioPack",
          "description": "<li>I currently work as a Fullstack Developer at Envíopack, contributing to the internationalization of a Symfony-based platform, with a greater focus on Vanilla PHP due to issues with the framework version; I use MySQL for database management, Redis for caching, and Nginx as the web server.</li> <li>I am the lead developer for major backend tasks and responsible for deploying Jira tasks on the QA server hosted on AWS EC2 instances, a process that is currently done manually. Additionally, I am involved in developing a continuous integration solution for automated testing.</li> <li>I participate in the transition from Angular.js to React, integrating APIs for international postal services (FedEx, Almex, for example), internationalizing the platform, and implementing new features requested by Product and Support teams.</li>"
        },
        {
          "position": "C++ Developer",
          "period": "2021 - 2022",
          "company": "EcoDev",
          "description": "<li>Developed APIs for third parties in C/C++ up to version 14.</li> <li>Participated in the entire software development process with the waterfall methodology, being able to take part in requirements gathering, design, and implementation of the requested requirements.</li> <li>Developed an internal API to automate processes related to internal management of the organization, using httplib single header file and built with CMake.</li> <li>The project required in-depth OS knowledge such as IPC (Inter-Process Communication), Threads, Input/Output, Concurrency, etc.</li>"
        }
      ]
    },
    "education": {
      "title": "Education",
      "list": [
        {
          "institution": "ISFT N° 151",
          "titleName": "Systems Analyst",
          "period": "2019 - 2023",
          "description": "In-depth training in Software Engineering processes. Additionally, training in General Theory of Administration and General Theory of Systems. The training was aimed at having comprehensive knowledge of the entire industrial software development process.<br> Different programming languages were studied with an emphasis on C/C++ and JavaScript.<br> Also, solid training in Requirements Engineering."
        },
        {
          "institution": "ESS N° 46",
          "titleName": "High School Diploma in Communication Sciences",
          "period": "2011 - 2017",
          "description": "Training in Media Research and Analysis; Institutional Communication and Media, etc."
        }
      ]
    }
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
