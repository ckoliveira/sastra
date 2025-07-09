import { showPost } from "../posts.js";
document.addEventListener("post-clicked", (e) => {
  const event = e;
  showPost(event.detail.postID);
});
