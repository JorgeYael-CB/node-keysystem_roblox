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
  },

  banned: {
    type: Boolean,
    default: false,
  },

  roles: {
    type: [String],
    default: ['USER'],
  },

  lastDateGame: {
    type: Date,
    default: new Date(),
  }

})


export const UserModel = mongoose.model('user', UserSchema);