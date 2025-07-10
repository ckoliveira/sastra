import { getHTMLElement } from "./html.js";
const newEntryButton = getHTMLElement("#new-entry-button");
newEntryButton.onclick = function () {
  document.dispatchEvent(new CustomEvent("post-menu-requested"));
};
