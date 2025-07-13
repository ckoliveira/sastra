import "./events/posts-events.ts";
import "./events/post-menu-events.ts";
import "./post-menu.ts";
import "./right-panel-menu.ts";

import { loadPosts, placeTags } from "./posts.ts";
import { setStorage } from "./storage.ts";
import { placePostMenu } from "./post-menu.ts";
import { getCachedPostID, loadCachedPost } from "./cached-post.ts";

setStorage();
loadPosts();
placeTags();

console.log(typeof localStorage.getItem("sastra:cached-post"));
if (getCachedPostID() !== "null") {
  loadCachedPost();
} else {
  placePostMenu();
}
