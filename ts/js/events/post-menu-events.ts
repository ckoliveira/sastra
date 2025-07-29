import { getCachedPostID } from "../cached-post.ts";
import { POST_MENU_DIV, PostMenu } from "../components/post-menu.ts";
import { generatePostHistory } from "../history/history.ts";
import { addNewVersion } from "../history/version-manager.ts";
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
    const postViewerDIV: HTMLElement = getHTMLElement(".post-viewer");

    console.debug(
      `[post-menu-events.ts] Opening post menu in ${event.detail.mode} mode`,
    );

    postViewerDIV.innerHTML = "";

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
    let oldVersion: Post | null = null;

    /* If postInput has an id then we update the post and set a new value for updatedAt
       If it doesnt have an id then we create a new post
    */

    if (postInput.id) {
      oldVersion = getPost(postInput.id);

      id = oldVersion.id;
      createdAt = oldVersion.createdAt;
      updatedAt = Date.now();
    } else {
      id = crypto.randomUUID();
      createdAt = Date.now();
      updatedAt = Date.now();
    }

    const tags: string[] = !(
      postInput.tags.length === 1 && postInput.tags[0] === ""
    )
      ? postInput.tags
      : [];

    upsertPost({
      ...postInput,
      id: id,
      tags: tags,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });

    /* Generate history for post */
    oldVersion ? addNewVersion(oldVersion, id) : generatePostHistory(id);

    dispatchEvent("post-menu-closing-requested", {});
    dispatchEvent("used-tags-reloading-requested", {});
    dispatchEvent("post-card-list-reloading-requested", {
      detail: {
        postsFilter: "",
      },
    });

    dispatchEvent("new-post-created", {
      detail: {
        postID: id,
      },
    });

    dispatchEvent("post-clicked", {
      detail: {
        postID: id,
      },
    });
  }
});

document.addEventListener("post-menu-closing-requested", (e) => {
  if (doesElementExist("#" + POST_MENU_DIV)) {
    removeHTMLElement("#" + POST_MENU_DIV);

    if (getCachedPostID()) {
      dispatchEvent("post-clicked", {
        detail: {
          postID: getCachedPostID(),
        },
      });
    }
  }
});
