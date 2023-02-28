const moogoose = require('../config/db');

const plantSchema = new moogoose.Schema({
    _id: {type: moogoose.Schema.Types.ObjectId, auto: true},
    specie: {type: String, required: true},
    description: {type: String, required: true},
    mainImage: {type: Array, required: true},
    images: {type: Array, required: true},  
    owner: {type: moogoose.Schema.Types.ObjectId, ref: 'User', required: true},
    renter: {type: moogoose.Schema.Types.ObjectId, ref: 'User', required: false},
    // discussions: [{type: moogoose.Schema.Types.ObjectId, ref: 'Discussion'}]
    
});

module.exports = moogoose.model('Plant', plantSchema);
