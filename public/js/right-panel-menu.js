import { dispatchEvent } from "./events/events.js";
import { getHTMLElement } from "./html.js";
const newEntryButton = getHTMLElement("#new-entry-button");
newEntryButton.onclick = function () {
  dispatchEvent("post-menu-requested", {});
};
