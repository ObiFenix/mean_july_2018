// Model for DB
const mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,
       minlength: 3
    },
    text: {
       type: String,
       required: true,
       minlength: 3,
       maxlength: 100
    }
 }, { timestamps: true });

 mongoose.model('Quote', QuoteSchema);
 const QuoteModel = mongoose.model('Quote');
 mongoose.Promise = global.Promise;

 // export Quote model for use in other files.
module.exports = QuoteModel;