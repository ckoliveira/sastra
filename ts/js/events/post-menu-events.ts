import { POST_MENU_DIV, PostMenu } from "../components/post-menu.ts";
import {
  doesElementExist,
  getHTMLElement,
  removeHTMLElement,
} from "../html.ts";
import {
  getPostMenuInputs,
  setClosePostMenuButtonEvent,
  setSavePostButtonEvent,
} from "../post-menu.ts";
import { upsertPost } from "../storage.ts";
import { PostMenuInput } from "../types.ts";
import { dispatchEvent } from "./events.ts";

document.addEventListener("post-menu-requested", (e) => {
  if (!doesElementExist("#" + POST_MENU_DIV)) {
    const middlePanelDIV: HTMLElement = getHTMLElement(".middle-panel");

    middlePanelDIV.innerHTML += PostMenu();

    setSavePostButtonEvent();
    setClosePostMenuButtonEvent();
  }
});

document.addEventListener("post-save-requested", (e) => {
  const postInfo: PostMenuInput = getPostMenuInputs();

  upsertPost({
    ...postInfo,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  dispatchEvent("post-menu-closing-requested", {});
  dispatchEvent("post-card-list-reloading-requested", {});
});

document.addEventListener("post-menu-closing-requested", (e) => {
  removeHTMLElement("#" + POST_MENU_DIV);
});
