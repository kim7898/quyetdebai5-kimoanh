const express = require('express');
const bodyParser= require("body-parser")
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("/writer.json"));

app.get("/writer.json", function(req, res){
    res.sendFile(__dirname + '/writer.json');
 });
app.get("/ask", (req , res)=>{
   res.sendFile(__dirname +"/views/ask.html")
});
app.get("/", (req, res) => {
    res.sendfile(__dirname+ "/views/home.html");




    //-------------------------------------------//
    //     res.send('<nav>'+
    //     '<a href="/ask">' + 'Hỏi nhanh' + '</a>'+ ' ' + 
    //     '<a href="/">' + 'Đáp gọn' + '</a>' +
    // '</nav>' +
    // '<h1 style=" text-align:center">' + question + '</h1>' + 
    // '<button  style="background-color: red; margin-left: 100px ">' + 'Sai / Không / Trái' + '</button>' + 
    // '<button   style="background-color: blue ; margin-left: 800px">' + 'Đúng / Có / Phải' + '</button>' + 
    // '<br>' + '<br>' +
    // '<button  style="margin-left:605px">' + 'Kết quả vote' + '</button>' + 
    // '<button >' + 'Câu hỏi khác' + '</button>'
    // );
})
app.get("/randomquestion" , (req, res )=>{
    const questionlist = JSON.parse(fs.readFileSync("./writer.json","utf-8")
    )
    const question = questionlist[Math.floor(Math.random()*questionlist.length)];
    res.send(question)
} )
app.post("/addquestion", (req, res)=>{
    // req.on("data" , (data)=>{
    //     const stringData= data+"";
    //     console.log(stringData);
        

    
    // })

// var content = JSON.stringify(req.body)
// fs.writeFile('writer.json',content,'utf8',function (err) {
  
//     if(err)
//         console.log(err)
//     else 
//         console.log('Ghi file thanh cong!');}
// )
 

    const questionlist = JSON.parse(fs.readFileSync("./writer.json", 'utf8')) 
    const question= {
        content:req.body.question,
        yes:0,
        no:0,
        id:questionlist.length,
    };
    questionlist.push(question);
    fs.writeFileSync("./writer.json",JSON.stringify(questionlist));
    res.redirect("/ask");

})



  app.get("/vote/:questionid/no" , (req, res)=>{ 
     const questionlist = JSON.parse(fs.readFileSync("./writer.json", 'utf8')) 
    const questionid= req.params.questionid 
  
 questionlist[questionid].no=Number(questionlist[questionid].no)+1;
  question = questionlist[questionid]
  
   fs.writeFileSync('./writer.json', JSON.stringify(questionlist))  
   res.sendfile(__dirname+ "/views/vote.html");
  
   })
   app.get("/vote/:questionid/yes" , (req, res)=>{ 
    const questionlist = JSON.parse(fs.readFileSync("./writer.json", 'utf8')) 
   const questionid= req.params.questionid 
 
questionlist[questionid].yes=Number(questionlist[questionid].yes)+1;
question = questionlist[questionid]

 
  fs.writeFileSync('./writer.json', JSON.stringify(questionlist))  
  res.sendfile(__dirname+ "/views/vote.html");
 
  })
app.put("/vote" ,  (req,res)=>{
    

 var questionId = req.body.id;
var questionList = JSON.parse(fs.readFileSync("./writer.json"));
var question = questionList[questionId];
 res.send(question);

 });


app.listen(8080, (err) => {
	if(err) console.log(err);
	else console.log("Success Server");
});