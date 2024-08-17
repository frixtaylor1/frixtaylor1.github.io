import { div, p, span } from "../../DomUtility/DomUtility.js";
import { t } from "../../translation/translation.js";

export default function aboutMeComponent() {
    return ( 
        div({ class: "about-me" },
            span({ textContent: "About/me#~" }),
            p({innerHTML: t("aboutme.description") })
        )
    );
}
