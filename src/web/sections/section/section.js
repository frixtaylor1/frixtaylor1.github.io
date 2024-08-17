import { div, h2, section } from "../../../DomUtility/DomUtility.js";
export default function sectionComponent(id, title, child) {
    return ( 
        section({ id: id, class: "section-component" }, 
            div({style:'width: 100%;'},
                h2({ innerText: title }),
                child
            ),
        )
    );
}
