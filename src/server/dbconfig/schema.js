var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  restaurants: [{
    name: String,
    visits: Number
  }],
  addresses: [String]
})