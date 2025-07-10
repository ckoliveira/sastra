import { POST_MENU_DIV, PostMenu } from "../components/post-menu.js";
import {
  doesElementExist,
  getHTMLElement,
  removeHTMLElement,
} from "../html.js";
import {
  getPostMenuInputs,
  setClosePostMenuButtonEvent,
  setSavePostButtonEvent,
} from "../post-menu.js";
import { upsertPost } from "../storage.js";
import { dispatchEvent } from "./events.js";
document.addEventListener("post-menu-requested", (e) => {
  if (!doesElementExist("#" + POST_MENU_DIV)) {
    const middlePanelDIV = getHTMLElement(".middle-panel");
    middlePanelDIV.innerHTML += PostMenu();
    setSavePostButtonEvent();
    setClosePostMenuButtonEvent();
  }
});
document.addEventListener("post-save-requested", (e) => {
  const postInfo = getPostMenuInputs();
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
