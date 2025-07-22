import { BlogPost } from "./components/blog-post.js";
import { getHTMLElement } from "./html.js";
import { getPosts } from "./storage.js";
import { setTheme } from "./theme-configuration/theme-configuration.js";
const posts = getPosts();
const postsContainer = getHTMLElement("#posts-container");
postsContainer.innerHTML = "";
const blogUrlParams = new URLSearchParams(window.location.search);
const filter = decodeURIComponent(blogUrlParams.get("tag") || "");
console.log(filter);
postsContainer.innerHTML = Object.values(posts)
  .filter((p) => p.tags.includes(filter))
  .sort((a, b) => b.createdAt - a.createdAt)
  .map((p) => BlogPost(p))
  .join(" ");
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    setTheme();
  }
});
setTheme();
