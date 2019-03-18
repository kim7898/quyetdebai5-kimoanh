const mongoose = require("mongoose");
const model = mongoose.model;
const QuestionSchema = require("../schemas/writer");
const   QuestionModel = model("writer", QuestionSchema);
module.exports=QuestionModel