//user.js
//Handles the structs where user data is input

const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  additionalCustomizations: [String],
  emergencyQuiz: {
    disasters: [String],
    medicalEquipment: String,
    medicalCondition: String,
    hygieneNeeds: String,
    homeType: String,
    floodZone: String,
    vehicleAccess: String,
    accessibility: String,
    hasPets: String,
    petTypes: [String],
    petNeeds: String,
    householdSize: String,
    
},
})

module.exports = mongoose.model("User", userSchema)

 