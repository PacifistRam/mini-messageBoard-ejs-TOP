const express = require('express');
const app = express();
const path = require('path');
const messageRouter = require("./routes/messageRouter")

const PORT = 8000;

// serving static assets
const assetsPath = path.join(__dirname,"public");
app.use(express.static(assetsPath));

// set views with ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true}));

app.use("/",messageRouter);




app.listen(PORT, () => {
    console.log(`App running on Port no: ${PORT}`);
})