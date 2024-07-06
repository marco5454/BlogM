import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = process.env.PORT | 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/guides", (req, res) => {
  res.render("guides.ejs");
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is on ${PORT}`);
});
