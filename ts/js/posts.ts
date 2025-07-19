import { getCachedPostID, savePostIDToCache } from "./cached-post.ts";
import { PostCard } from "./components/post-card.ts";
import {
  CLOSE_POST_BUTTON,
  DELETE_POST_BUTTON,
  EDIT_POST_BUTTON,
  PostHTML,
} from "./components/post.ts";
import { dispatchEvent } from "./events/events.ts";
import { getHTMLElement } from "./html.ts";
import { getPost, getPosts, upsertPost } from "./storage.ts";
import { Post, PostCreationInput } from "./types.ts";

export function loadPosts(): void {
  const postCards: HTMLElement = getHTMLElement(".post-card-list");

  const posts: Post[] = Object.values(getPosts());

  postCards.innerHTML = "";

  posts
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((p) => PostCard(p))
    .forEach((p) => postCards.appendChild(p));
}

export function showPost(postID: string): void {
  const post: Post = getPost(postID);
  const postViewer: HTMLElement = getHTMLElement(".post-viewer");

  postViewer.innerHTML = PostHTML(post);

  savePostIDToCache(postID);
}

export function getUsedTags(): string[] {
  let tags: string[] = [];
  const posts: Post[] = Object.values(getPosts());

  posts.forEach((post) => (tags = tags.concat(post.tags)));

  return [...new Set(tags)].sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
}

export function placeTags(): void {
  const usedTagsSection: HTMLElement = getHTMLElement(".used-tags");
  const usedTags: string[] = getUsedTags();

  usedTagsSection.innerHTML = usedTags
    .map((tag) => `<a href="blog?tag=${tag}">::${tag}</a>`)
    .join("");
}

export function isPostEmpty(post: PostCreationInput): boolean {
  return post.body.trim() === "" && post.title.trim() === "";
}

export function setClosePostButtonEvent(): void {
  const closePostButton: HTMLElement = getHTMLElement("#" + CLOSE_POST_BUTTON);

  const postID: string = getCachedPostID();

  closePostButton.onclick = function () {
    dispatchEvent("post-closing-requested", {
      detail: {
        postID: postID,
      },
    });
  };
}

export function setEditPostButtonEvent(): void {
  const editPostButton: HTMLElement = getHTMLElement("#" + EDIT_POST_BUTTON);

  const postID: string = getCachedPostID();

  editPostButton.onclick = function () {
    dispatchEvent("post-menu-requested", {
      detail: {
        postID: postID,
        mode: "edit",
      },
    });
  };
}

export function setDeletePostButtonEvent(): void {
  const deletePostButton: HTMLElement = getHTMLElement(
    "#" + DELETE_POST_BUTTON,
  );

  const postID: string = getCachedPostID();

  deletePostButton.onclick = function () {
    dispatchEvent("post-deletion-required", {
      detail: {
        postID: postID,
      },
    });
  };
}
