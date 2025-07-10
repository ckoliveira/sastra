import "./events/posts-events.ts";
import "./events/post-menu-events.ts";
import "./post-menu.ts";
import "./right-panel-menu.ts";

import { insertMockPosts, loadPosts, placeTags } from "./posts.ts";
import { setStorage } from "./storage.ts";

setStorage();
loadPosts();
placeTags();
