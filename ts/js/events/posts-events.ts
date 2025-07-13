import { clearCachedPost } from "../cached-post.ts";
import { removeHTMLElement } from "../html.ts";
import {
  loadPosts,
  setClosePostButtonEvent,
  setEditPostButtonEvent,
  showPost,
} from "../posts.ts";
import { dispatchEvent } from "./events.ts";

document.addEventListener("post-clicked", (e) => {
  const event = e as CustomEvent;

  showPost(event.detail.postID);

  setClosePostButtonEvent();
  setEditPostButtonEvent();

  dispatchEvent("post-menu-closing-requested", {});
});

document.addEventListener("post-card-list-reloading-requested", (e) => {
  loadPosts();
});

document.addEventListener("post-closing-requested", (e) => {
  const event = e as CustomEvent;
  const postID: string = event.detail.postID;

  removeHTMLElement("#" + postID);

  clearCachedPost();
  dispatchEvent("post-menu-requested", {
    detail: {
      mode: "create",
    },
  });
});
