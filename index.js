const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())
const obj = [
  {
    name: "youssef",
    age: 24,
  },
  {
    name: "ahmed",
    age: 25,
  },
];
app.get("/", (req, res) => {
  res.status(200).send(obj);
});
app.post("/demo/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  if (name==undefined || age==undefined) {
    res.status(418).send({ message: "missing name or age" });
  }
  res.send({
    name: name,
    age: age
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
