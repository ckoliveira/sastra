import { BlogPost } from "./components/blog-post.js";
import { getHTMLElement } from "./html.js";
import { getPosts } from "./storage.js";
const posts = getPosts();
const postsContainer = getHTMLElement("#posts-container");
postsContainer.innerHTML = "";
postsContainer.innerHTML = Object.values(posts)
  .sort((a, b) => b.createdAt - a.createdAt)
  .map((p) => BlogPost(p))
  .join(" ");
