import "./storage.ts";
import { getPost, insertPost, setStorage } from "./storage.ts";
import { Post } from "./types.ts";

setStorage();

const post: Post = {
  id: "id",
  body: "body",
  title: "title",
  createdAt: "",
  updatedAt: "",
  tags: [],
};

const post2: Post = {
  id: "id",
  body: "body 22",
  title: "title",
  createdAt: "nowww",
  updatedAt: "",
  tags: [],
};

insertPost(post);
insertPost(post2);

console.log(getPost(post.id));
console.log(getPost(post2.id));
