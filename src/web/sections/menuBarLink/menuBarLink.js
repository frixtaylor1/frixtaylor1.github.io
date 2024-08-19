import { button } from "../../../DomUtility/DomUtility.js";
import navigate from "../../Router/Router.js";

export default function menuBarLinkComponent(textContent, href) {
    return (
        button({ 
            class: "frikada", 
            textContent: textContent, 
            onclick: () => { navigate(href); } 
        })
    );
}
