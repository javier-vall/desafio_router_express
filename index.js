const express = require("express");
const router = express.Router();

const apiRouter = require("./routes/api");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Routes
app.use("/api", apiRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
