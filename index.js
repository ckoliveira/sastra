import chalk from 'chalk';
import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${process.cwd()}`, 'public', '/html/index.html'));
});

const url = chalk.bold.underline(`http://localhost:${port}`);

app.listen(port, () => {
  console.log(chalk.yellow(`\nRunning on ${url}`));
});