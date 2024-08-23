import { div } from "../../DomUtility/DomUtility.js";

export default function tooltip(text, child) {
  return (
    div({ class: "tooltip-wrapper" },
      child,
      div({ class: "tooltiptext", innerText: text })
    )
  );
}
