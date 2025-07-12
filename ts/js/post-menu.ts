import {
  POST_BODY_INPUT,
  POST_MENU_CLOSE_BUTTON,
  POST_MENU_SAVE_BUTTON,
  POST_TAGS_INPUT,
  POST_TITLE_INPUT,
} from "./components/post-menu.ts";
import { dispatchEvent } from "./events/events.ts";
import { getHTMLElement } from "./html.ts";
import { PostMenuInput } from "./types.ts";

export function setSavePostButtonEvent(): void {
  const savePostButton: HTMLElement = getHTMLElement(
    "#" + POST_MENU_SAVE_BUTTON,
  );

  savePostButton.onclick = function () {
    dispatchEvent("post-save-requested", {});
  };
}

export function setClosePostMenuButtonEvent(): void {
  const closePostMenuButton: HTMLElement = getHTMLElement(
    "#" + POST_MENU_CLOSE_BUTTON,
  );

  closePostMenuButton.onclick = function () {
    dispatchEvent("post-menu-closing-requested", {});
  };
}

export function getPostMenuInputs(): PostMenuInput {
  return {
    title: (getHTMLElement("#" + POST_TITLE_INPUT) as HTMLInputElement).value,
    body: (getHTMLElement("#" + POST_BODY_INPUT) as HTMLInputElement).value,
    tags: (
      getHTMLElement("#" + POST_TAGS_INPUT) as HTMLInputElement
    ).value.split(","),
  };
}

export function placePostMenu(): void {
  dispatchEvent("post-menu-requested", {});
}
