import { div } from "../../../DomUtility/DomUtility.js";
import navigate from "../../Router/Router.js";

export default function menuBarLinkComponent(textContent, href) {
    return (
        div({ style: `text-decoration: none; cursor: pointer;`, onclick: () => { navigate(href); } },
            div({ class: "frikada", textContent: textContent })
        )
    );
}
