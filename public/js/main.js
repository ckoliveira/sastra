import "./events/posts-events.js";
import "./events/post-menu-events.js";
import "./events/right-panel-events.js";
import "./post-menu.js";
import "./left-panel-search.js";
import "./right-panel-menu.js";
import { loadPosts, placeUsedTags } from "./posts.js";
import { setStorage } from "./storage.js";
import { placePostMenu } from "./post-menu.js";
import {
  getCachedPostID,
  loadCachedPost,
  setPostCache,
} from "./cached-post.js";
import { setTheme } from "./theme-configuration/theme-configuration.js";
import { placeSastraHeader } from "./components/sastra-header.js";
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
