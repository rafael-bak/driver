const express = require("express");
const mongoose = require("mongoose");


const app = express();
mongoose.connect("mongodb+srv://omnistack:<ommistack>@cluster0-x1vi1.mongodb.net/omnistack?retryWrites=true",
    {
        useNewUrlParser: true
    }
),
    app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(3333);

//mongodb+srv://omnistack:<password>@cluster0-x1vi1.mongodb.net/test?retryWrites=true