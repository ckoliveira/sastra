import { getCachedPostID, savePostIDToCache } from "./cached-post.js";
import { PostCard } from "./components/post-card.js";
import {
  CLOSE_POST_BUTTON,
  EDIT_POST_BUTTON,
  PostHTML,
} from "./components/post.js";
import { dispatchEvent } from "./events/events.js";
import { getHTMLElement } from "./html.js";
import { getPost, getPosts } from "./storage.js";
export function loadPosts() {
  const postCards = getHTMLElement(".post-card-list");
  const posts = Object.values(getPosts());
  postCards.innerHTML = "";
  posts
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => PostCard(p))
    .forEach((p) => postCards.appendChild(p));
}
export function showPost(postID) {
  const post = getPost(postID);
  const postViewer = getHTMLElement(".post-viewer");
  postViewer.innerHTML = PostHTML(post);
  savePostIDToCache(postID);
}
export function getUsedTags() {
  let tags = [];
  const posts = Object.values(getPosts());
  posts.forEach((post) => (tags = tags.concat(post.tags)));
  return [...new Set(tags)];
}
export function placeTags() {
  const usedTagsSection = getHTMLElement(".used-tags");
  const usedTags = getUsedTags();
  usedTagsSection.innerHTML = usedTags
    .map((tag) => `<a href="#">::${tag}</a>`)
    .join("");
}
export function isPostEmpty(post) {
  return post.body.trim() === "" && post.title.trim() === "";
}
export function setClosePostButtonEvent() {
  const closePostButton = getHTMLElement("#" + CLOSE_POST_BUTTON);
  const postID = getCachedPostID();
  closePostButton.onclick = function () {
    dispatchEvent("post-closing-requested", {
      detail: {
        postID: postID,
      },
    });
  };
}
export function setEditPostButtonEvent() {
  const editPostButton = getHTMLElement("#" + EDIT_POST_BUTTON);
  const postID = getCachedPostID();
  editPostButton.onclick = function () {
    dispatchEvent("post-menu-requested", {
      detail: {
        postID: postID,
        mode: "edit",
      },
    });
  };
}
