import { showPost } from "./posts.js";
const CACHED_POST_STORAGE_NAME = "sastra:cached-post";
export function savePostIDToCache(postID) {
  localStorage.setItem(CACHED_POST_STORAGE_NAME, postID);
}
export function getCachedPostID() {
  const cachedPostID = localStorage.getItem(CACHED_POST_STORAGE_NAME);
  if (!cachedPostID) {
    throw new Error("cached-post was not set in localStorage");
  }
  return cachedPostID;
}
export function loadCachedPost() {
  showPost(getCachedPostID());
}
export function clearCachedPost() {
  localStorage.setItem(CACHED_POST_STORAGE_NAME, JSON.stringify(null));
}
