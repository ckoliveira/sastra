import "./events/posts-events.ts";
import "./events/post-menu-events.ts";
import "./post-menu.ts";
import "./right-panel-menu.ts";

import { loadPosts, placeTags } from "./posts.ts";
import { setStorage } from "./storage.ts";
import { placePostMenu } from "./post-menu.ts";

setStorage();
loadPosts();
placeTags();
placePostMenu();
