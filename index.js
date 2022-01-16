const express = require("express");
const app = express();
let port = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log("The server is listening on port" + PORT);
});