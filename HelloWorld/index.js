const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    console.log("Hello GitHub!")
    res.write("Hello GitHub!");
})

app.listen(8000,()=>{
    console.log("Server running on port 8000")
})