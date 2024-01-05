class WCWebController {
  constructor(viewReference, modelReference) {
    this.#viewReference   = viewReference;
    this.#modelReference  = modelReference;

    this.enable();
  }

  enable() {
    this.#viewReference.addEventListener('wce-web-load-projects', () => { this.#onLoadProjects(); });
  }

  #onLoadProjects() {
    this.#viewReference.projectsData = this.#modelReference.getProjectsData();
  }

  #viewReference  = undefined;
  #modelReference = undefined;
};

export { WCWebController };