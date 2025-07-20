import "./events/posts-events.ts";
import "./events/post-menu-events.ts";
import "./events/right-panel-events.ts";
import "./post-menu.ts";
import "./left-panel-search.ts";
import "./right-panel-menu.ts";

import { loadPosts, placeUsedTags } from "./posts.ts";
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
placeUsedTags();

if (getCachedPostID()) {
  loadCachedPost();
} else {
  placePostMenu();
}
