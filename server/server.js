const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./env.local" });
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ msg: "This is example" });
});
app.listen(PORT, () => {
  console.log("Server is running...");
});

//routes testing
app.use("/user", require("./routes/useRouter"));

//connecting mongob

const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
