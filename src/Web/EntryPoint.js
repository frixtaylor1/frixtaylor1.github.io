import { WCWeb }            from './Main/WCWeb.js';
import { WCWebModel }       from './Main/WCWebModel.js';
import { WCWebController }  from './Main/WCWebController.js';

function main() {
  const web = new WCWeb();
  new WCWebController(web, new WCWebModel())

  document.body.appendChild(web);
}

window.addEventListener('load', () => { main(); });