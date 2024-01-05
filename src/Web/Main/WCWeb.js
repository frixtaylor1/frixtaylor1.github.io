import { HTMLViewStateElement } from '../../WebComponents/SDK/StateElement/WCStateElement.js';
import { createElement, createEvent } from '../../WebComponents/SDK/Utility/WCUtils.js';

class WCSection extends HTMLElement {
  constructor(sectionContent) {
    super();
    sectionContent.forEach(child => this.appendChild(child));
    this.classList.add('section');
  }
};
customElements.define('x-section', WCSection);

class WCWeb extends HTMLElement {
  constructor() {
    super();
    this.#stateElement = new HTMLViewStateElement();
    this.#sections = [];
  }

  connectedCallback() {
    this.dispatchEvent(createEvent('wce-web-load-projects'));

    this.#loadProjects();
    this.#render();
    this.scroll = this.scroll.bind(this);

    window.addEventListener('scroll', this.scroll);
    this.appendChild(this.#stateElement);

    let style = createElement('style');
    style.textContent = `@import './src/Web/Style/sections.css';`;
    this.appendChild(style);
  }

  #loadProjects() {
    this.#sections = this.#projectsData.sections.map(section => {
      let sectionContent = null;
      if (section.hasOwnProperty('linkedIn')) {
        sectionContent = new WCSection([
          createElement('h2',   { class: 'section-title'      , textContent: section.title }),
          createElement('br'),
          createElement('h3',   { class: 'section-description', textContent: section.description }),
          createElement('br'),
          createElement('img',  { class: 'section-profile-image'  , src: section.image,  }),
          createElement('br'),
          createElement('h3',   { class: 'section-degree'         , textContent: section.degree }),
          createElement('a',    { class: 'section-linkedin'       , textContent: 'Ver perfil en LinkedIn', href: section.linkedIn, target: '_blank' }),
          createElement('br'),
          createElement('a',    { class: 'section-github'         , textContent: 'Ver proyectos en github', href: section.github,  target: '_blank' }),
          createElement('br'),
          createElement('p',    { class: 'scroll-down'            , textContent: 'Scroll Down' }),
        
        ]);
      } else {
        sectionContent = new WCSection([
          createElement('h1', { class: 'section-title'      , textContent: section.title }),
          createElement('br'),
          createElement('p',  { class: 'section-description', textContent: section.description }),
          createElement('br'),
          createElement('img', { class: 'section-description-image', src: section.image }),
          createElement('br'),
          createElement('p',  { class: 'section-language'   , textContent: section.language }),
          createElement('br'),
          createElement('a',  { class: 'section-github'     , textContent: 'Ver proyecto en github', href: section.github,  target: '_blank' }),
          createElement('br'),
        ]);
      }
      sectionContent.classList.add(section.class);
      return sectionContent;
    });

  }

  #render() {
    this.#sections.forEach(section => this.appendChild(section));
  }

  scroll() {
    window.addEventListener('scroll', () => {
      this.#sections.forEach(section => {
          const distance = section.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          if (distance < screenHeight / 2 && distance > -screenHeight / 2) {
              section.style.transform = 'translateX(0)';
          } else {
              section.style.transform = 'translateX(100vw)';
          }
      });
  });
}

  set projectsData(projectsData) {
    this.#projectsData = projectsData;
  }

  #stateElement;
  #sections;
  #projectsData = undefined;
};
customElements.define('x-web', WCWeb);

export { WCWeb };