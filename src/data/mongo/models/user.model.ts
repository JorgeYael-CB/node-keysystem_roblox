import mongoose, { Schema } from "mongoose";


const UserSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  rebirths: {
    type: Number,
    reuqired: true,
  },

  userRobloxId: {
    type: String,
    required: true,
  }

})


const UserModel = mongoose.model('user', UserSchema);