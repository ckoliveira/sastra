import "./events/posts-events.ts";
import "./events/post-menu-events.ts";
import "./post-menu.ts";
import "./left-panel-search.ts";
import "./right-panel-menu.ts";

import { loadPosts, placeTags } from "./posts.ts";
import { setStorage } from "./storage.ts";
import { placePostMenu } from "./post-menu.ts";
import {
  getCachedPostID,
  loadCachedPost,
  setPostCache,
} from "./cached-post.ts";

setStorage();
setPostCache();
loadPosts();
placeTags();

if (getCachedPostID()) {
  loadCachedPost();
} else {
  placePostMenu();
}
