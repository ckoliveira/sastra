import { PostCard } from "./components/post-card.ts";
import { PostHTML } from "./components/post.ts";
import { getHTMLElement } from "./html.ts";
import { getPost, getPosts, upsertPost } from "./storage.ts";
import { Post } from "./types.ts";

export function loadPosts(): void {
  const postCards: HTMLElement = getHTMLElement(".post-card-list");

  const posts: Post[] = Object.values(getPosts());

  postCards.innerHTML = "";
  
  posts.sort((a, b) => b.createdAt - a.createdAt)
       .map((p) => PostCard(p))
       .forEach((p) => postCards.appendChild(p));
}

export function showPost(postID: string): void {
  const post: Post = getPost(postID);
  const postViewer: HTMLElement = getHTMLElement(".post-viewer");

  postViewer.innerHTML = PostHTML(post);
}

export function getUsedTags(): string[] {
  let tags: string[] = [];
  const posts: Post[] = Object.values(getPosts());
  
  posts.forEach(post => tags = tags.concat(post.tags));

  return [...new Set(tags)];
}

export function placeTags(): void {
  const usedTagsSection: HTMLElement = getHTMLElement(".used-tags");
  const usedTags: string[] = getUsedTags();

  usedTagsSection.innerHTML = usedTags.map(tag => `<a href="#">::${tag}</a>`).join("");
}