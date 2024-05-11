// models/User.js

import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: {
    photo: { type: String },
    name: { type: String },
    bio: { type: String },
    phone: { type: String },
    visibility: { type: String, enum: ['public', 'private'], default: 'public' }
  }
});

const User = model('User', userSchema);

export default User;
