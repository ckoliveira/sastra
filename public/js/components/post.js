export const PostHTML = (post) => `
  <article class="post">
    <h1 class="post-title"> ${post.title}</h1>
    <section class="post-menu"></section>
    <p class="post-body">${post.body}</p>
    <p class="post-tags">${post.tags.map((tag) => `<a href="/get-post=${tag}">::${tag}</a>`).join(", ")}</p>

    <section class="post-timestamps">
      <p>Created At: <time datetime="${post.createdAt}">${post.createdAt}</time></p>
      <p>Updated At: <time datetime="${post.updatedAt}">${post.updatedAt}</time></p>
    </section>
  </article>
`;
