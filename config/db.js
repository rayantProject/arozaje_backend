const mongoose = require('mongoose');
require('dotenv').config();

const dburi = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/`;


mongoose.connect(dburi)
.then(() => {console.log("Connected to MongoDB")})
.catch((err) => {console.log("Error connecting to MongoDB", err)})

module.exports = mongoose;
