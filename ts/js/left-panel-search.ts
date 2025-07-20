import { dispatchEvent } from "./events/events.ts";
import { getHTMLElement } from "./html.ts";

const searchInputButton: HTMLElement = getHTMLElement("#search-input-button");

searchInputButton.onclick = function () {
  const filter: string = (getHTMLElement("#search-input") as HTMLInputElement)
    .value;

  dispatchEvent("post-card-list-reloading-requested", {
    detail: {
      postsFilter: filter,
    },
  });
};
