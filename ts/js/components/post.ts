import { Post } from "../types.ts";
import { ImageButton } from "./image-button.ts";

export const CLOSE_POST_BUTTON: string = "close-post-button";
export const EDIT_POST_BUTTON: string = "edit-post-button";
export const DELETE_POST_BUTTON: string = "delete-post-button";
export const SEE_POST_BUTTON: string = "see-post-button";

export function PostHTML(post: Post): string {
  const body: string =
    /*html*/
    ` <article class="post" id=${post.id}>
      <header>
        <section class="post-actions">
          <div>
            ${ImageButton("icons/eye-icon.png", SEE_POST_BUTTON, "See Post")}
            ${ImageButton("icons/pencil-icon.png", EDIT_POST_BUTTON, "Edit Post")}
            ${ImageButton("icons/trash-icon.png", DELETE_POST_BUTTON, "Delete Post")}
          </div>
          ${ImageButton("icons/close-icon.png", CLOSE_POST_BUTTON, "Close Post")}
        </section>
        <h1 class="post-title"> ${post.title}</h1>
      </header>
      
      <p class="post-body">${post.body}</p>
      
      <p class="post-tags">
      ${post.tags
        .map((tag) => tag.trim())
        .map((tag) => `<a href="blog?tag=${tag}">::${tag}</a>`)
        .join(", ")}
      </p>

      <section class="post-timestamps">
        <p>Created At: <time datetime="${post.createdAt}">${new Date(post.createdAt).toLocaleString()}</time></p>
        <p>Updated At: <time datetime="${post.updatedAt}">${new Date(post.updatedAt).toLocaleString()}</time></p>
      </section>
    </article>
  `;

  return body;
}
