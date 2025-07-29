import { clearCachedPost } from "../cached-post.js";
import { removePostHistory } from "../history/history.js";
import { removeHTMLElement } from "../html.js";
import {
  loadPosts,
  setClosePostButtonEvent,
  setDeletePostButtonEvent,
  setEditPostButtonEvent,
  setSeePostButtonEvent,
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
  setSeePostButtonEvent();
  dispatchEvent("post-menu-closing-requested", {});
});
document.addEventListener("post-card-list-reloading-requested", (e) => {
  const event = e;
  loadPosts(event.detail.postsFilter);
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
  removePostHistory(postID);
  removeHTMLElement("#" + postID);
  clearCachedPost();
  dispatchEvent("post-card-list-reloading-requested", {
    detail: {
      postsFilter: "",
    },
  });
  dispatchEvent("used-tags-reloading-requested", {});
  dispatchEvent("post-menu-requested", {
    detail: {
      mode: "create",
    },
  });
});
