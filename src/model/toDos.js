
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    name: String,
    collections: { type: String, default: "todos" },
    createdAt: { type: Date, default: Date.now },
    done: {type: Boolean, required:false,default:false}
  });



module.exports = mongoose.model("ToDo", toDoSchema);