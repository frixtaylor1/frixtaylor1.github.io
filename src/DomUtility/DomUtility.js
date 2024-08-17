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
  const { innerText, textContent, innerHTML, href, state, customEvent, dataset, ...attributes } = params;
  const element = document.createElement(tagName);

  _setState(element, state);
  _setTextContent(element, textContent, innerText, innerHTML);
  _setHref(element, href);
  _setCustomEvent(element, customEvent);
  _appendChilds(element, children);
  _setAttributes(element, attributes);
  _setDataset(element, dataset);
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
