const mongoose=require('mongoose');
const Todo=new mongoose.Schema({
    task:{
        type:String,
        require:true,
        trim:true,
        maxlength:30,
    }

},{timestamps: true});

module.exports = new mongoose.model("Todo",Todo);