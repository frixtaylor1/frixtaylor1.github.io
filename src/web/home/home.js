import { div, reactiveState, createEvent, button } from "../../DomUtility/DomUtility.js";
import { getLang } from "../../translation/translation.js";
import bannerComponent from "../sections/banner.js";
import aboutMeComponent from "../sections/aboutMe.js";
import menuBarComponent from "../sections/menuBar.js";
import experienceSectionComponent from "../sections/experience.js";
import educationSectionComponent from "../sections/education.js";

export default function homeComponent() {
  const langState = reactiveState({ lang: getLang() }, ['lang-button']);

  const switchLangComponent = function() {
    return (
      button({
        id: 'lang-button', textContent: langState.lang, onclick: () => {
          switch (langState.lang) {
            case 'ES': langState.lang = 'EN'; break;
            case 'EN': langState.lang = 'ES'; break;
          }
          createEvent('x-ce-change-lang', { message: "Hello, World!" });
        }
      })
    );
  };

  const switchStyleComponent = function() {
    // TODO:
    // - analizar el tema del usuario, si es dark actualizar a dark el tema de la app.  
    // - si el usuario desea cambiar el tema a light puede hacerlo.
    throw new Error("MUST IMPLEMENT!");
  };

  return (
    div({ style: 'width: 100%;' },
      // switchLangComponent(),
      // switchStyleComponent(),
      bannerComponent(),
      aboutMeComponent(),
      menuBarComponent(),
      experienceSectionComponent(),
      educationSectionComponent()
    )
  );
}
