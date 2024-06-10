const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://guptashivangi636:PrwPh7YRB8QYpsyd@jobcamapi.29yfned.mongodb.net/jobcamapi?retryWrites=true&w=majority&appName=jobcamapi").then(() => {
    console.log("database connected successfully!!")
}).catch((err) => {
    console.log("ERROR", err)
})