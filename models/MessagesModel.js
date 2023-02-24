const config = require('../config/db');

const messageSchema = new config.Schema({
    _id: {type: config.Schema.Types.ObjectId, auto: true},
    sender: {type: config.Schema.Types.ObjectId, ref: 'User', required: true},
    receiver: {type: config.Schema.Types.ObjectId, ref: 'User', required: true},
    message: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now},
    isRead: {type: Boolean, required: true, default: false} 
});

module.exports = config.model('Message', messageSchema);
