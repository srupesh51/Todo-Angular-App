const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    fullName: String,
    todoText: String,
    todoDesc: String
});
module.exports =  mongoose.model('Todo', Schema);