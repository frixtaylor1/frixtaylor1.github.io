import { div } from "../../DomUtility/DomUtility.js";
import bannerComponent from "../sections/banner.js";
import aboutMeComponent from "../sections/aboutMe.js";
import menuBarComponent from "../sections/menuBar.js";
import experienceSectionComponent from "../sections/experience.js";
import educationSectionComponent from "../sections/education.js";

export default function homeComponent() {
    return ( 
        div({style: 'width: 100%;'},
            bannerComponent(),
            aboutMeComponent(),
            menuBarComponent(),
            experienceSectionComponent(),
            educationSectionComponent()
        )
    );
}
