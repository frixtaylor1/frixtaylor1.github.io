import { ERROR_ROUTE, ROUTES, HOME_ROUTE } from "./Routes.js";
import { div } from "../../DomUtility/DomUtility.js";

export default function navigate(path) {
  const root = document.getElementById('root');
  const route = ROUTES.find((routeFound) => routeFound.path === path);
  if (!root) {
    throw new Error("There is not root element in the SPA");
  }
  if (route && (route.component || path.includes('#'))) {
    if (path.includes('#')) {
      const sectionId = path.split('#')[1];
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, route.path, window.location.origin + route.path);
      }
    }
    else {
      window.history.pushState({}, route.path, window.location.origin + route.path);
      if (root.firstChild) {
        root.removeChild(root.firstChild);
      }
      if (route.component) {
        root.appendChild(route.component);
      }
    }
  }

  else {
    navigate(ERROR_ROUTE);
  }
}

export function drawRoot() {
  document.body.appendChild(div({ id: "root" }));
  window.onpopstate = () => {
    navigate(window.location.pathname);
  };
  navigate(window.location.pathname || HOME_ROUTE);
}
