import { BlogPost } from "./components/blog-post.ts";
import { getHTMLElement } from "./html.ts";
import { getPosts } from "./storage.ts";
import { Post, PostCollection } from "./types.ts";

const posts: PostCollection = getPosts();

const postsContainer: HTMLElement = getHTMLElement("#posts-container");

postsContainer.innerHTML = "";

postsContainer.innerHTML = Object.values(posts)
  .sort((a, b) => b.createdAt - a.createdAt)
  .map((p) => BlogPost(p))
  .join(" ");
