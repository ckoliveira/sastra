import { PostCard } from "./components/post-card.js";
import { PostHTML } from "./components/post.js";
import { getHTMLElement } from "./html.js";
import { MOCK_DATASET } from "./ochtaurae_dataset.js";
import { getPost, getPosts, upsertPost } from "./storage.js";
export function loadPosts() {
  const postCards = getHTMLElement(".post-card-list");
  const posts = Object.values(getPosts());
  posts.map((p) => PostCard(p)).forEach((p) => postCards.appendChild(p));
}
export function showPost(postID) {
  const post = getPost(postID);
  const postViewer = getHTMLElement(".post-viewer");
  postViewer.innerHTML = PostHTML(post);
}
export function insertMockPosts() {
  const mockPosts = MOCK_DATASET;
  mockPosts.forEach((mockPost) => upsertPost(mockPost));
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
