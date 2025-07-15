import { dispatchEvent } from "./events/events.js";
const CACHED_POST_STORAGE_NAME = "sastra:cached-post";
export function setPostCache() {
  if (!localStorage.getItem(CACHED_POST_STORAGE_NAME)) {
    localStorage.setItem(CACHED_POST_STORAGE_NAME, "");
  }
}
export function savePostIDToCache(postID) {
  localStorage.setItem(CACHED_POST_STORAGE_NAME, postID);
  console.debug(`[cached-post.ts] Post Cache was set to ${getCachedPostID()}`);
}
export function getCachedPostID() {
  const cachedPostID = localStorage.getItem(CACHED_POST_STORAGE_NAME);
  if (cachedPostID === null) {
    throw new Error("cached-post was not set in localStorage");
  }
  return cachedPostID;
}
export function loadCachedPost() {
  dispatchEvent("post-clicked", {
    detail: {
      postID: getCachedPostID(),
    },
  });
}
export function clearCachedPost() {
  console.debug("[cached-post.ts] Post Cache was cleared");
  localStorage.setItem(CACHED_POST_STORAGE_NAME, "");
}
