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
import { isPostEmpty } from "../posts.js";
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
  if (isPostEmpty(postInfo)) {
    console.warn("post with empyt body and title cant be made");
    const invalidPostWarnLabel = getHTMLElement("#invalid-post-warning");
    invalidPostWarnLabel.style.animation = "showWarning 4.5s linear";
    invalidPostWarnLabel.addEventListener(
      "animationend",
      () => {
        invalidPostWarnLabel.style.animation = "";
      },
      { once: true },
    );
  } else {
    upsertPost({
      ...postInfo,
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    dispatchEvent("post-menu-closing-requested", {});
    dispatchEvent("post-card-list-reloading-requested", {});
  }
});
document.addEventListener("post-menu-closing-requested", (e) => {
  removeHTMLElement("#" + POST_MENU_DIV);
});
