import { dispatchEvent } from "../events/events.ts";
import { Post } from "../types.ts";

export function PostCard(post: Post): HTMLElement {
  const postDIV: HTMLElement = document.createElement("article");

  postDIV.className = "post-card";
  postDIV.tabIndex = 1;
  postDIV.innerHTML = `
        <p class="post-card-title">${post.title}</p>
        <p class="post-card-body">${post.tags}</p>
        <p class="posts-card-id">ID: ${post.id}</p>`;

  postDIV.onclick = function () {
    dispatchEvent("post-clicked", {
      detail: {
        postID: post.id,
      },
    });
  };

  return postDIV;
}
