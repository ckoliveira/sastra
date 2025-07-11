import { getHTMLElement } from "../html.ts";
import { loadPosts, showPost } from "../posts.ts";

document.addEventListener("post-clicked", (e) => {
  const event = e as CustomEvent;

  showPost(event.detail.postID);
});

document.addEventListener("post-card-list-reloading-requested", (e) => {
  loadPosts();
})
