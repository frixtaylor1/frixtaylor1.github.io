import { div, p, button } from "../../DomUtility/DomUtility.js";
export default function notFoundPageComponent() {
  const errorNotFoundComponent = function() {
    return (
      div({ style: "display: flex; justify-content: space-around; width: 100%;" },
        p({ innerHTML: "<span>404 NOT FOUND!</span> return <button><a href='/'>home</a></button>" }),
      )
    );
  };
  return errorNotFoundComponent();
}
