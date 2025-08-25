var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const changedHistorySchema = new Schema({ 

    createdAt: { 
        type: Date, 
        default: Date.now, 
    }, 
    netuid: { 
        type: Number,
        required: true, 
    },
    oldname: {
        type: String,
        required: true,
    },
    newname: {
        type: String,
        required: true,
    },
    oldstatus: { 
        type: String, 
        required: true, 
    }, 
    newstatus: { 
        type: String, 
        required: true, 
    },
    
}); 

ChangedHistory = mongoose.model('changedhistories', changedHistorySchema);

module.exports = ChangedHistory;