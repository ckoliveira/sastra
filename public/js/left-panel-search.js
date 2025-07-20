import { dispatchEvent } from "./events/events.js";
import { getHTMLElement } from "./html.js";
const searchInputButton = getHTMLElement("#search-input-button");
searchInputButton.onclick = function () {
  const filter = getHTMLElement("#search-input").value;
  dispatchEvent("post-card-list-reloading-requested", {
    detail: {
      postsFilter: filter,
    },
  });
};
