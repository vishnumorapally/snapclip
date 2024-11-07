const express = require("express")
require("dotenv").config()
const connectdb = require("./config/connectdb")
const router = require("./routes")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()



// Middlewares

app.use(express.json())
app.use("/",router)
app.use(cors({ origin: 'https://snapclip-1.onrender.com' }));
app.use(bodyParser.json());




app.get("/",(req,res)=>{
    res.send("server is good")
})


connectdb().then(()=>{
    console.log("mongo connected");
    
}).catch((err)=>{
    console.log(err);
    
})

app.listen(process.env.PORT,()=>{
    console.log("server running at",process.env.PORT)
})
