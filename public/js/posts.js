import { PostCard } from "./components/post-card.js";
import { PostHTML } from "./components/post.js";
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
export function savePostIDToCache(postID) {
  localStorage.setItem("sastra:cached-post", postID);
}
export function getCachedPostID() {
  const cachedPostID = localStorage.getItem("sastra:cached-post");
  if (!cachedPostID) {
    throw new Error("cached-post was not set in localStorage");
  }
  return cachedPostID;
}
export function loadCachedPost() {
  showPost(getCachedPostID());
}
