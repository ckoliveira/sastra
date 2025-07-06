import "./storage.js";
import { getPost, insertPost, setStorage } from "./storage.js";
setStorage();
const post = {
  id: "id",
  body: "body",
  title: "title",
  createdAt: "",
  updatedAt: "",
  tags: [],
};
const post2 = {
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
