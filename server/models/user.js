const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  attributes: {
    type: [
    {
      key: { type: String, required: true },
      value: { type: mongoose.Schema.Types.Mixed } 
    }
  ],
  default: []
}
})

module.exports = mongoose.model("User", userSchema)

 