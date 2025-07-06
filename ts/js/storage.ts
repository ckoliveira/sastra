import { Post, PostCollection } from "./types.ts";

export function setStorage(): void {
  if (!localStorage.getItem("posts")) {
    localStorage.setItem("posts", JSON.stringify({}));
  }
}

export function getPosts(): PostCollection {
  const posts: string | null = localStorage.getItem("posts");

  if (!posts) {
    throw new Error("posts was not set in localStorage");
  }

  return JSON.parse(posts);
}

export function getPost(postID: string): Post {
  const posts: PostCollection = getPosts();

  if (!posts[postID]) {
    throw new Error(`post with id ${postID} was not found`);
  }

  return posts[postID];
}

function postExists(postID: string): boolean {
    return Object.keys(getPosts()).includes(postID)
}

export function upsertPost(post: Post): Post {
  const posts: PostCollection = getPosts();

  posts[post.id] = post;

  localStorage.setItem("posts", JSON.stringify(posts));
  
  return getPost(post.id);
}
