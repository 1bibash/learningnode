const app =require("express")()
// alt const express =required("express")
//const app = express()

app.get("/",(req,res)=>{
    res.send("Hello from home page")
})

app.get("/about",(req,res)=>{
    // res.send("Hello from about page")
    res.json({
        "greetings" : "hello i am bibash"
    })
})
app.listen(2000,(req,res)=>{
    console.log("Nodejs has started at the port 2000")
})