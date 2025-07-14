import { getCachedPostID } from "../cached-post.ts";
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
import { isPostEmpty } from "../posts.ts";
import { getPost, upsertPost } from "../storage.ts";
import { Post, PostCreationInput } from "../types.ts";
import { dispatchEvent } from "./events.ts";

document.addEventListener("post-menu-requested", (e) => {
  if (!doesElementExist("#" + POST_MENU_DIV)) {
    const event = e as CustomEvent;
    const middlePanelDIV: HTMLElement = getHTMLElement(".middle-panel");

    console.debug(
      `[post-menu-events.ts] Opening post menu in ${event.detail.mode} mode`,
    );

    if (event.detail.mode === "edit") {
      const post: Post = getPost(event.detail.postID);
      middlePanelDIV.innerHTML += PostMenu(post.title, post.body, post.tags);
    } else {
      middlePanelDIV.innerHTML += PostMenu();
    }

    setSavePostButtonEvent();
    setClosePostMenuButtonEvent();
  }
});

document.addEventListener("post-save-requested", (e) => {
  const postInput: PostCreationInput = getPostMenuInputs();

  if (isPostEmpty(postInput)) {
    console.warn("post with empyt body and title cant be made");

    const invalidPostWarnLabel: HTMLElement = getHTMLElement(
      "#invalid-post-warning",
    );

    invalidPostWarnLabel.style.animation = "showWarning 4.5s linear";
    invalidPostWarnLabel.addEventListener(
      "animationend",
      () => {
        invalidPostWarnLabel.style.animation = "";
      },
      { once: true },
    );
  } else {
    let id: string;
    let createdAt: number;
    let updatedAt: number;

    if (postInput.id) {
      const post: Post = getPost(postInput.id);

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
    dispatchEvent("post-clicked", {
      detail: {
        postID: getCachedPostID(),
      },
    });
  }
});

document.addEventListener("post-menu-closing-requested", (e) => {
  if (doesElementExist("#" + POST_MENU_DIV)) {
    removeHTMLElement("#" + POST_MENU_DIV);
  }
});
