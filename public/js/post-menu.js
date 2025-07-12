import {
  POST_BODY_INPUT,
  POST_MENU_CLOSE_BUTTON,
  POST_MENU_SAVE_BUTTON,
  POST_TAGS_INPUT,
  POST_TITLE_INPUT,
} from "./components/post-menu.js";
import { dispatchEvent } from "./events/events.js";
import { getHTMLElement } from "./html.js";
export function setSavePostButtonEvent() {
  const savePostButton = getHTMLElement("#" + POST_MENU_SAVE_BUTTON);
  savePostButton.onclick = function () {
    dispatchEvent("post-save-requested", {});
  };
}
export function setClosePostMenuButtonEvent() {
  const closePostMenuButton = getHTMLElement("#" + POST_MENU_CLOSE_BUTTON);
  closePostMenuButton.onclick = function () {
    dispatchEvent("post-menu-closing-requested", {});
  };
}
export function getPostMenuInputs() {
  return {
    title: getHTMLElement("#" + POST_TITLE_INPUT).value,
    body: getHTMLElement("#" + POST_BODY_INPUT).value,
    tags: getHTMLElement("#" + POST_TAGS_INPUT).value.split(","),
  };
}
export function placePostMenu() {
  dispatchEvent("post-menu-requested", {});
}
