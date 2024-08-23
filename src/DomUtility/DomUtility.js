export class TagElement extends HTMLElement {
  state = {};
  constructor(tagName) {
    super();
    if (tagName) {
      this.innerHTML = `<${tagName}></${tagName}>`;
    }
  }
  static getObjectFromDataset(element, key) {
    const data = element.dataset[key];
    return data ? JSON.parse(data) : null;
  }
}
export class CustomEventListener {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
  name;
  callback;
}
export function createElement(tagName, params = {}, ...children) {
  const { innerText, textContent, innerHTML, href, state, customEvent, dataset, disabled, ...attributes } = params;
  const element = document.createElement(tagName);
  _setState(element, state);
  _setTextContent(element, textContent, innerText, innerHTML);
  _setHref(element, href);
  _setCustomEvent(element, customEvent);
  _appendChilds(element, children);
  _setAttributes(element, attributes);
  _setDataset(element, dataset);
  _setDisabled(element, disabled);
  _setEvent(element, attributes);  
  return element;
}
function _setState(element, newState) {
  if (newState) {
    element.state = newState;
  }
}
function _setTextContent(element, textContent, innerText, innerHTML) {
  if (innerText) {
    element.innerText = innerText;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  if (innerHTML) {
    element.innerHTML = innerHTML;
  }
}
function _setHref(element, href) {
  if (href && (element instanceof HTMLAnchorElement || element instanceof HTMLLinkElement)) {
    element.href = href;
  }
}
function _setCustomEvent(element, customEventListener) {
  if (customEventListener) {
    element.addEventListener(customEventListener.name, customEventListener.callback);
  }
}
function _appendChilds(element, children) {
  if (!children || children.length === 0) {
    return;
  }
  children.forEach(child => {
    if (child instanceof HTMLElement || child instanceof TagElement) {
      element.appendChild(child);
    } else if (Array.isArray(child)) {
      child.forEach(childElement => {
        if (childElement instanceof HTMLElement || childElement instanceof TagElement) {
          element.appendChild(childElement);
        }
      });
    }
  });
}
function _setAttributes(element, attributes = {}) {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}
function _setEvent(element, event = {}) {
  for (const [key, value] of Object.entries(event)) {
    if (key.startsWith('on')) {
      element[key] = value;
    }
  }
}
function _setDataset(element, dataset = {}) {
  for (const [key, value] of Object.entries(dataset)) {
    const datasetKey = key.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
    element.dataset[datasetKey] = JSON.stringify(value);
  }
}
function _setDisabled(element, disabled = null) {
  if (disabled) {
    element.disabled = disabled;
  }
}
/**
 * Use examle:
 * - this function define the state...
 *   const state = reactiveState({count: 0}, ['count-display']);
 * - use the state...
 * p({ id: 'count-display', innerText: state.count })
 * 
 * @param {Object} initialState
 * @param {Array} idsElementBinding - binds the state with the elements
 *
 * @returns state
 */
export function reactiveState(initialState, idsElementBinding = []) {
  return new Proxy(initialState, {
    set(target, key, value) {
      target[key] = value;

      idsElementBinding.forEach(idElement => {
        const element = document.getElementById(idElement);
        if (element) {
          element.innerHTML = value;
        }
      });

      return true;
    }
  });
} 
export function createEvent(eventName, detail, node) {
  if (node) {
    return node.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
  } 

  return document.body.dispatchEvent(new CustomEvent(eventName, { detail: detail }));
}
function proxyCreateElement(tagElement, paramsOrChild, ...children) {
  if (typeof paramsOrChild !== 'object' || Array.isArray(paramsOrChild) || paramsOrChild instanceof HTMLElement || paramsOrChild instanceof TagElement) {
    return createElement(tagElement, {}, paramsOrChild, ...children);
  } else {
    return createElement(tagElement, paramsOrChild, ...children);
  }
}
const WE = proxyCreateElement;
export function div(params, ...children) {
  return WE('div', params, ...children);
}
export function a(params, ...children) {
  return WE('a', params, ...children);
}
export function section(params, ...children) {
  return WE('section', params, ...children);
}
export function button(params, ...children) {
  return WE('button', params, ...children);
}
export function span(params, ...children) {
  return WE('span', params, ...children);
}
export function p(params, ...children) {
  return WE('p', params, ...children);
}
export function h1(params, ...children) {
  return WE('h1', params, ...children);
}
export function h2(params, ...children) {
  return WE('h2', params, ...children);
}
export function h3(params, ...children) {
  return WE('h3', params, ...children);
}
export function h4(params, ...children) {
  return WE('h4', params, ...children);
}
export function h5(params, ...children) {
  return WE('h5', params, ...children);
}
export function ul(params, ...children) {
  return WE('ul', params, ...children);
}
export function ol(params, ...children) {
  return WE('ol', params, ...children);
}
export function li(params, ...children) {
  return WE('li', params, ...children);
}
export function dl(params, ...children) {
  return WE('dl', params, ...children);
}
export function dt(params, ...children) {
  return WE('dt', params, ...children);
}
export function dd(params, ...children) {
  return WE('dd', params, ...children);
}
export function table(params, ...children) {
  return WE('table', params, ...children);
}
export function tr(params, ...children) {
  return WE('tr', params, ...children);
}
export function th(params, ...children) {
  return WE('th', params, ...children);
}
export function td(params, ...children) {
  return WE('td', params, ...children);
}
export function fieldset(params, ...children) {
  return WE('fieldset', params, ...children);
}
export function legend(params, ...children) {
  return WE('legend', params, ...children);
}
export function label(params, ...children) {
  return WE('label', params, ...children);
}
export function form(params, ...children) {
  return WE('form', params, ...children);
}
export function input(params, ...children) {
  return WE('input', params, ...children);
}
export function img(params, ...children) {
  return WE('img', params, ...children);
}
