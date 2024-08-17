import { p } from "../../DomUtility/DomUtility.js";
import sectionComponent from "./section/section.js";
export default function educationSectionComponent() {
    return sectionComponent("education", "Education", p({ innerText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iste quae officia maxime, saepe, ut qui dignissimos porro doloribus eligendi in, consequatur provident aliquid architecto nemo rerum consequuntur voluptate unde." }));
}
