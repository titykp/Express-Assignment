import express from "express";

const app = express();
const port = 4000;

app.get("/profiles", (req, res) => {
  const Profile = {
    data: {
      name: "John",
      age: 20,
    },
  };
  return res.status(200).json(Profile);
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
