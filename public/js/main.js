import "./events/posts-events.js";
import "./events/post-menu-events.js";
import "./post-menu.js";
import "./right-panel-menu.js";
import { loadPosts, placeTags } from "./posts.js";
import { setStorage } from "./storage.js";
setStorage();
loadPosts();
placeTags();
