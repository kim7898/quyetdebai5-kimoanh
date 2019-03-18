const express = require('express');
const mongoose = require('mongoose');
const bodyParser= require("body-parser")
const app = express();
const fs = require("fs");

const QuestionModel = require("./models/writer")
mongoose.connect("mongodb://localhost:27017/web20-quyetde" ,  {useNewUrlParser:true }, (err)=>{
  if(err) console.log(err)
  else console.log("connect to DB success");
  QuestionModel.find({},(err,docs)=>{
    if(err) console.log(err)
    else console.log(docs)
  })
})
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
   
	QuestionModel.find({},(err,questionList)=>{
		if(err) console.log(err)
		else res.send(questionList[Math.floor(Math.random()*questionList.length)]);
		
	})
} )
app.post("/addquestion", (req, res)=>{
    

  QuestionModel.create({ content : req.body.question 
   }, function (err) {
    if (err) return handleError(err);
    res.redirect("/ask")
    // saved!r
  });


    // const questionlist = JSON.parse(fs.readFileSync("./writer.json", 'utf8')) 
    // const question= {
    //     content:req.body.question,
    //     yes:0,
    //     no:0,
    //     id:questionlist.length,
    // };
    // questionlist.push(question);
    // fs.writeFileSync("./writer.json",JSON.stringify(questionlist));
    // res.redirect("/ask");


})



  app.get("/vote/:questionid/no" , (req, res)=>{ 
    const questionId = req.params.questionId

    QuestionModel.findOne({_id:questionId},(err,data) =>{
      console.log(data);
      if(data){
        data.no += 1;
        data.save((err,docs)=>{
          if(err) console.log(err)
          res.redirect(`/question/${questionId}`);
        })
      }
    })
  })
      app.get("/vote/:questionid/yes" , (req, res)=>{ 
        const questionId = req.params.questionId

        QuestionModel.findOne({_id:questionId},(err,data) =>{
          console.log(data);
          if(data){
            data.yes += 1;
            data.save((err,docs)=>{
              if(err) console.log(err)
              res.redirect(`/question/${questionId}`);
            })
          }
        })

  })
  app.get("/question/:questionid" , (req, res)=>{

    res.sendfile(__dirname+ "/views/vote.html");
  })
app.get("/detail/:questionid" ,  (req,res)=>{
    
  QuestionModel.findOne({_id:req.params.questionId },(err,data)=>{
		if(err) console.log(err)
		else res.send(data)
	})

 });


app.listen(8080, (err) => {
	if(err) console.log(err);
	else console.log("Success Server");
});