const express = require('express')
const app = express()

app.get("/api",(req,res)=>{
    console.log("getting")
    res.json({"users":["userone","usertwo","userThree"]})
})

app.listen(5000,()=>"listening at port 5000")