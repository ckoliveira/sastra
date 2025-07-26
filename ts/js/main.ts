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
import { setTheme } from "./theme-configuration/theme-configuration.ts";
import { placeSastraHeader } from "./components/sastra-header.ts";

setStorage();
setPostCache();
loadPosts();
placeUsedTags();
placeSastraHeader();

if (getCachedPostID()) {
  loadCachedPost();
} else {
  placePostMenu();
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    setTheme();
  }
});

setTheme();
