import "./events/posts-events.js";
import { loadPosts, placeTags } from "./posts.js";
import { setStorage } from "./storage.js";
setStorage();
loadPosts();
placeTags();
