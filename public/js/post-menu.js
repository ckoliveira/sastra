import {
  POST_BODY_INPUT,
  POST_MENU_CLOSE_BUTTON,
  POST_MENU_SAVE_BUTTON,
  POST_TAGS_INPUT,
  POST_TITLE_INPUT,
} from "./components/post-menu.js";
import { getHTMLElement } from "./html.js";
export function setSavePostButtonEvent() {
  const savePostButton = getHTMLElement("#" + POST_MENU_SAVE_BUTTON);
  savePostButton.onclick = function () {
    document.dispatchEvent(new CustomEvent("post-save-requested"));
  };
}
export function setClosePostMenuButtonEvent() {
  const closePostMenuButton = getHTMLElement("#" + POST_MENU_CLOSE_BUTTON);
  closePostMenuButton.onclick = function () {
    document.dispatchEvent(new CustomEvent("post-menu-closing-requested"));
  };
}
export function getPostMenuInputs() {
  return {
    title: getHTMLElement("#" + POST_TITLE_INPUT).value,
    body: getHTMLElement("#" + POST_BODY_INPUT).value,
    tags: getHTMLElement("#" + POST_TAGS_INPUT).value.split(","),
  };
}
