import "./events/posts-events.ts";
import { insertMockPosts, loadPosts, placeTags } from "./posts.ts";
import { setStorage } from "./storage.ts";

setStorage();
loadPosts();
placeTags();
