const express = require("express");
const mongoose = require("mongoose");

const app = express();
const todoRoutes = require("./routes/todoRoutes");
let PORT = process.env.PORT || 3030;

mongoose
    .connect(
        "mongodb+srv://YuChing:811204@todolist.yublz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
.then(() => {
    console.log("Connect to mongodb")
})
.catch((err) => {
    console.log(err);
});

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port" + PORT);
});