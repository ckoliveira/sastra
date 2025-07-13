import "./events/posts-events.js";
import "./events/post-menu-events.js";
import "./post-menu.js";
import "./right-panel-menu.js";
import { loadPosts, placeTags } from "./posts.js";
import { setStorage } from "./storage.js";
import { placePostMenu } from "./post-menu.js";
import { getCachedPostID, loadCachedPost } from "./cached-post.js";
setStorage();
loadPosts();
placeTags();
console.log(typeof localStorage.getItem("sastra:cached-post"));
if (getCachedPostID() !== "null") {
  loadCachedPost();
} else {
  placePostMenu();
}
