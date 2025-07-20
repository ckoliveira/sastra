import { clearCachedPost } from "../cached-post.ts";
import { removeHTMLElement } from "../html.ts";
import {
  loadPosts,
  setClosePostButtonEvent,
  setDeletePostButtonEvent,
  setEditPostButtonEvent,
  showPost,
} from "../posts.ts";
import { deletePost } from "../storage.ts";
import { dispatchEvent } from "./events.ts";

document.addEventListener("post-clicked", (e) => {
  const event = e as CustomEvent;

  showPost(event.detail.postID);

  setClosePostButtonEvent();
  setEditPostButtonEvent();
  setDeletePostButtonEvent();

  dispatchEvent("post-menu-closing-requested", {});
});

document.addEventListener("post-card-list-reloading-requested", (e) => {
  const event = e as CustomEvent;

  loadPosts(event.detail.postsFilter);
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

document.addEventListener("post-deletion-required", (e) => {
  const postID: string = (e as CustomEvent).detail.postID;

  deletePost(postID);
  removeHTMLElement("#" + postID);
  clearCachedPost();

  dispatchEvent("post-card-list-reloading-requested", {});
  dispatchEvent("post-menu-requested", {
    detail: {
      mode: "create",
    },
  });
});
