import { loadPosts, showPost } from "../posts.js";
document.addEventListener("post-clicked", (e) => {
  const event = e;
  showPost(event.detail.postID);
});
document.addEventListener("post-card-list-reloading-requested", (e) => {
  loadPosts();
});
