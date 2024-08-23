import { button } from "../../../DomUtility/DomUtility.js";
import navigate from "../../Router/Router.js";

export default function menuBarLinkComponent(textContent, href, disabled = false) {
    return (
        button({ 
            class: "frikada", 
            textContent: textContent, 
            disabled: disabled,
            onclick: () => { navigate(href); } 
        })
    );
}
