// user.model.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  companyId: String
}, {
  timestamps: true
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
