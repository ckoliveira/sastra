import { Post } from "../types";

export const CLOSE_POST_BUTTON: string = "close-post-button";

export function PostHTML(post: Post): string {
  const body: string = ` <article class="post" id=${post.id}>
      <section class="post-actions">
        <div>
          <button> edit </button>
          <button> delete </button>
        </div>
        <button id=${CLOSE_POST_BUTTON}> close </button>
      </section>
      <h1 class="post-title"> ${post.title}</h1>
      <p class="post-body">${post.body}</p>
      
      <p class="post-tags">
      ${post.tags
        .map((tag) => tag.trim())
        .map((tag) => `<a href="get-post=${tag}">::${tag}</a>`)
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
