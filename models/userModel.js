
const config = require('../config/db');


const userSchema = new config.Schema({
    _id: {type: config.Schema.Types.ObjectId, auto: true},    
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    rate: {type: Number, enum :[1, 2 , 3, 4, 5], required: false},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    avatar : {type: String, required: false},
    role: {type: String, enum: ['user', 'expert'], required: true}
});
module.exports = config.model('User', userSchema);


    // role: {type: config.Schema.Types.ObjectId, ref: 'Role', required: true},
    // role: {type: roleSchema, required: true}
    // role : {type: Role, required: true}