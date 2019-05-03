const mongoose = require("mongoose");
const schema =  mongoose.Schema;
const   QuestionSchema= new schema({
    content: {type:String, require: true  , default: " question"},
    yes : {type:Number , default:0 },
    no :  {type:Number , default:0 },
    
})
module.exports= QuestionSchema;