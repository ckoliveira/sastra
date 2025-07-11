export function PostHTML(post) {
  const body = ` <article class="post">
      <section class="post-actions">
        <div>
          <button> edit </button>
          <button> delete </button>
        </div>
        <button> close </button>
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
