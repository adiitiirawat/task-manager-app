require('dotenv').config();
const mongoose = require('mongoose');

 const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // .then(()=>console.log("DB Connected successfully"))
        // .catch((error)=>console.log("ERROR WHILE CONNECTING TO DB",error));

    } 
    catch(error){
        console.log("OOPS! COULD NOT CONNECT TO DB",error);
        process.exit(1);
    }
}

export {dbConnect}