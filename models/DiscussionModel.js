const config = require('../config/db');
const Message = require('./MessagesModel'); 

const discussionSchema = new config.Schema({
    _id: {type: config.Schema.Types.ObjectId, auto: true},
    plant : {type: config.Schema.Types.ObjectId, ref: 'Plant', required: true},
    // messages : [{type: config.Schema.Types.ObjectId, ref: 'Message'}]
    message: [Message.schema]
});

module.exports = config.model('Discussion', discussionSchema);
