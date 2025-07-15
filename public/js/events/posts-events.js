import { clearCachedPost } from "../cached-post.js";
import { removeHTMLElement } from "../html.js";
import {
  loadPosts,
  setClosePostButtonEvent,
  setDeletePostButtonEvent,
  setEditPostButtonEvent,
  showPost,
} from "../posts.js";
import { deletePost } from "../storage.js";
import { dispatchEvent } from "./events.js";
document.addEventListener("post-clicked", (e) => {
  const event = e;
  showPost(event.detail.postID);
  setClosePostButtonEvent();
  setEditPostButtonEvent();
  setDeletePostButtonEvent();
  dispatchEvent("post-menu-closing-requested", {});
});
document.addEventListener("post-card-list-reloading-requested", (e) => {
  loadPosts();
});
document.addEventListener("post-closing-requested", (e) => {
  const event = e;
  const postID = event.detail.postID;
  removeHTMLElement("#" + postID);
  clearCachedPost();
  dispatchEvent("post-menu-requested", {
    detail: {
      mode: "create",
    },
  });
});
document.addEventListener("post-deletion-required", (e) => {
  const postID = e.detail.postID;
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
