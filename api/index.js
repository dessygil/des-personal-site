const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require("mongoose")
const jobsRoute = require("./routes/jobs");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.set('strictQuery', false);

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => {
    console.log(err)
});

app.use("/", jobsRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log("Connected to port 5000");
});
