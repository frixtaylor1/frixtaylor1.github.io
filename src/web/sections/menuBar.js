import { div } from "../../DomUtility/DomUtility.js";
import { t } from "../../translation/translation.js";
import menuBarLinkComponent from "./menuBarLink/menuBarLink.js";
import tooltip from "../globals/tooltip.js";
import { HOME_ROUTE_EDUCATION, HOME_ROUTE_EXPERIENCE, IT_BLOG_ROUTE, PROJECTS_ROUTE } from "../Router/Routes.js";

export default function menuBarComponent() {
  const buttonsText = t("menubar");
  return (
    div({ class: "frikadas" },
      menuBarLinkComponent(buttonsText.button1, HOME_ROUTE_EXPERIENCE),
      menuBarLinkComponent(buttonsText.button2, HOME_ROUTE_EDUCATION),
      tooltip(
        t("menubar.tooltip"), 
        menuBarLinkComponent(buttonsText.button3, PROJECTS_ROUTE, true)
      ),
      tooltip(
        t("menubar.tooltip"), 
        menuBarLinkComponent(buttonsText.button4, IT_BLOG_ROUTE, true)
      ),
    )
  );
}
