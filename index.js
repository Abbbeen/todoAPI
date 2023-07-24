import express from "express";
import mongoose from "mongoose";
import Routes from "./src/Routes/todoRoute";
import bodyParser from "body-parser";




const app = express();
const PORT=4003;

// for connecting the database
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://127.0.0.1/TODOdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("the database is connected");
}).catch((err)=>{
    console.error('Error while connectiong to db', err);
});
// parsing the format

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// for routing
Routes(app);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});