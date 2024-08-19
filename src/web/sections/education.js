import { p, div, h3, h4 } from "../../DomUtility/DomUtility.js";
import { t } from "../../translation/translation.js";
import sectionComponent from "./section/section.js";

export default function educationSectionComponent() {
  const internalEducation = function(institution, titleName, rangeDates, description) {
    return (
      div({ class: "internal-section" },
        h3({ innerText: institution }),
        h3({ titleName: titleName }),
        h4({ innerText: rangeDates }),
        div({ class: "internal-edu-parr" },
          p({ innerHTML: description })
        )
      )
    );
  };

  const educationsComp = function() {
    const educationList = t("education.list");
    let internalEdus = [];

    educationList.forEach(education => {
      internalEdus.push(internalEducation(education.institution, education.titleName, education.period, education.description));
    });
    return [...internalEdus];
  };

  return (
    sectionComponent("education", t("education.title"),
      educationsComp()
    )
  );
}
