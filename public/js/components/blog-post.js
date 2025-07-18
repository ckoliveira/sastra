export const BlogPost = (post) => /*HTML*/ `
    <article class="blog-post">
        <div class="blog-post-wrapper">
            <header class="blog-post-header">
                <section class="blog-post-timestamps">
                    <p>Created At: <time datetime="${post.createdAt}">${new Date(post.createdAt).toLocaleString()}</time></p>
                    <p>Last Updated At: <time datetime="${post.updatedAt}">${new Date(post.updatedAt).toLocaleString()}</time></p>
                </section>
                <h1 class="blog-post-title">${post.title}</h1>
            </header>
            <p class="blog-post-body">${post.body}</p>
        </div>

        ${
          !(post.tags.length === 1 && post.tags[0] === "")
            ? `<footer class="blog-post-tags">
                        <p> Descriptors: </p>
                        <div>
                            ${post.tags
                              .map((tag) => tag.trim())
                              .map(
                                (tag) =>
                                  `<a href="get-post=${tag}">::${tag}</a>`,
                              )
                              .join(", ")}
                        </div>
                    </footer>`
            : ""
        }
    </article>
`;
