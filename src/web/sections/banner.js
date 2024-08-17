import { div, h1 } from "../../DomUtility/DomUtility.js";

function banner() {
    return (
        div(
            h1({ class: "banner-title", textContent: "K.T Software Developer"})
        )
    );
}

export default function bannerComponent() {
    return banner();
}
