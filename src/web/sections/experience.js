import { p, div, h3, h4 } from "../../DomUtility/DomUtility.js";
import { t } from "../../translation/translation.js";
import sectionComponent from "./section/section.js";

export default function experienceSectionComponent() {
  const internalExp = function(positionName, companyName, rangeDates, innerHTML) {
    return (
      div({ class: "internal-section" },
        h3({ innerText: positionName }),
        h4({ innerText: companyName }),
        h4({ innerText: rangeDates }),
        div({ class: "internal-exp-parr" },
          p({ innerHTML: innerHTML })
        )
      )
    );
  };

  const experiencesComp = function() {
    const experiences = t("experience.list");
    let internalExps = [];
    experiences.forEach(experience => {
      internalExps.push(internalExp(experience.position, experience.company, experience.period, experience.description));
    });
    return internalExps;
  };

  return sectionComponent("experience", t("experience.title"), experiencesComp());
}
