require('dotenv').config();
const connectDB= require("./config/db/db");
const app= require("./config/app");

connectDB();


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})