import chalk from "chalk";
import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, "public", "/html/index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, "public", "/html/home.html"));
});

app.get("/todo", (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, "public", "/html/todo.html"));
});

app.get("/theme-configuration", (req, res) => {
  res.sendFile(
    path.join(`${process.cwd()}`, "public", "/html/theme-configuration.html"),
  );
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, "public", "/html/blog.html"));
});

app.get("/history", (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, "public", "/html/history.html"));
});

const url = chalk.bold.underline(`http://localhost:${port}`);

app.listen(port, () => {
  console.log(chalk.yellow(`\nRunning on ${url}`));
});
