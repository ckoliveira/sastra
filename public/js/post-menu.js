import {
  POST_MENU_CLOSE_BUTTON,
  POST_MENU_SAVE_BUTTON,
} from "./components/post-menu.js";
import { getHTMLElement } from "./html.js";
export function setSavePostButtonEvent() {
  const savePostButton = getHTMLElement("#" + POST_MENU_SAVE_BUTTON);
}
export function setClosePostMenuButtonEvent() {
  const closePostMenuButton = getHTMLElement("#" + POST_MENU_CLOSE_BUTTON);
  closePostMenuButton.onclick = function () {
    document.dispatchEvent(new CustomEvent("post-menu-closing-requested"));
  };
}
