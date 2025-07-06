export function setStorage() {
  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify({}));
  }
}
export function getPosts() {
  const posts = localStorage.getItem("posts");
  if (!posts) {
    throw new Error("posts was not set in localStorage");
  }
  return JSON.parse(posts);
}
export function getPost(postID) {
  const posts = getPosts();
  if (!posts[postID]) {
    throw new Error(`post with id ${postID} was not found`);
  }
  return posts[postID];
}
export function insertPost(post) {
  const posts = getPosts();
  posts[post.id] = post;
  localStorage.setItem("posts", JSON.stringify(posts));
  return post;
}
