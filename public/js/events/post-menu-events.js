import { POST_MENU_DIV, PostMenu } from "../components/post-menu.js";
import {
  doesElementExist,
  getHTMLElement,
  removeHTMLElement,
} from "../html.js";
import { getPostMenuInputs, setSavePostButtonEvent } from "../post-menu.js";
import { isPostEmpty } from "../posts.js";
import { getPost, upsertPost } from "../storage.js";
import { dispatchEvent } from "./events.js";
document.addEventListener("post-menu-requested", (e) => {
  if (!doesElementExist("#" + POST_MENU_DIV)) {
    const event = e;
    const middlePanelDIV = getHTMLElement(".middle-panel");
    console.debug(
      `[post-menu-events.ts] Opening post menu in ${event.detail.mode} mode`,
    );
    if (event.detail.mode === "edit") {
      const post = getPost(event.detail.postID);
      middlePanelDIV.innerHTML += PostMenu(post.title, post.body, post.tags);
    } else {
      middlePanelDIV.innerHTML += PostMenu();
    }
    setSavePostButtonEvent();
  }
});
document.addEventListener("post-save-requested", (e) => {
  const postInput = getPostMenuInputs();
  if (isPostEmpty(postInput)) {
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
    let id;
    let createdAt;
    let updatedAt;
    if (postInput.id) {
      const post = getPost(postInput.id);
      id = post.id;
      createdAt = post.createdAt;
      updatedAt = Date.now();
    } else {
      id = crypto.randomUUID();
      createdAt = Date.now();
      updatedAt = Date.now();
    }
    upsertPost({
      ...postInput,
      id: id,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    dispatchEvent("post-menu-closing-requested", {});
    dispatchEvent("post-card-list-reloading-requested", {});
  }
});
document.addEventListener("post-menu-closing-requested", (e) => {
  if (doesElementExist("#" + POST_MENU_DIV)) {
    removeHTMLElement("#" + POST_MENU_DIV);
  }
});
