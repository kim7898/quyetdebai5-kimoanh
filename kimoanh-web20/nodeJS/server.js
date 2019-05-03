const express = require('express')
const app = express();
const path = require('path')
app.use("/public", express.static('public'));
app.get("/" , function(req, res){
    // console.log(req);
//     // res.send(""); có thể gửi html , gửi file
     res.sendFile(path.resolve(__dirname  , "../session1/index.html" ));

// });
// app.get("/style.css" ,function(req, res){
//     res.sendFile(__dirname  +"/session2/style.css" );
});
// app.get("/:name", function(req, res){
//     console.log(req.params.name)
// })
app.get("/query", function(req, res){
    console.log(req.query)
    res.send("<h1>" +req.query.name +"</h1>")
})
app.listen(1998 , function(err){
    if(err)
    console.log(err)
    else
    console.log("serrver start success!")
});
// http://localhost:1998 