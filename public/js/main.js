import "./events/posts-events.js";
import "./events/post-menu-events.js";
import "./post-menu.js";
import "./left-panel-search.js";
import "./right-panel-menu.js";
import { loadPosts, placeTags } from "./posts.js";
import { setStorage } from "./storage.js";
import { placePostMenu } from "./post-menu.js";
import {
  getCachedPostID,
  loadCachedPost,
  setPostCache,
} from "./cached-post.js";
setStorage();
setPostCache();
loadPosts();
placeTags();
if (getCachedPostID()) {
  loadCachedPost();
} else {
  placePostMenu();
}
