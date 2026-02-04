import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please provide a username'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false,
    },
    profileImage: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

// Hash password before saving it, for security purposes
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return;
    //return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  //return next();
});

// Compare the password method for authenticity
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
