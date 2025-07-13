import { dispatchEvent } from "./events/events.ts";
import { getHTMLElement } from "./html.ts";

const newEntryButton: HTMLElement = getHTMLElement("#new-entry-button");

newEntryButton.onclick = function () {
  dispatchEvent("post-menu-requested", {
    detail: {
      mode: "create",
    },
  });
};
