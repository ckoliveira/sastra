import { BlogPost } from "./components/blog-post.ts";
import { getHTMLElement } from "./html.ts";
import { runMockSeed } from "./mock-data.ts";
import { getPosts } from "./storage.ts";
import { PostCollection } from "./types.ts";

const posts: PostCollection = getPosts();

const postsContainer: HTMLElement = getHTMLElement("#posts-container");

postsContainer.innerHTML = "";

const blogUrlParams: URLSearchParams = new URLSearchParams(
  window.location.search,
);

const filter: string = decodeURIComponent(blogUrlParams.get("tag") || "");

postsContainer.innerHTML = Object.values(posts)
  .filter((p) => p.tags.includes(filter))
  .sort((a, b) => b.createdAt - a.createdAt)
  .map((p) => BlogPost(p))
  .join(" ");
