const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname  , "../session1/index.html" ));
})

for(let i=13;i<=20;i++){
    let str = '/web'+i;
    let str1= "./data"+str+".json";
    app.get(str,function(req,res){
        var li='';
        var data=fs.readFileSync(path.resolve(__dirname,str1));
        var dataArr=JSON.parse(data);
        for(var j=0;j<dataArr.length;j++){
            li+="<li>"+dataArr[j]+"</li>"; 
        }
        res.send("<ul>"+li+"</ul>");
        
    })
}
app.listen(1998, function(err){
    if(err) console.log(err);
    else console.log("server start success");
})