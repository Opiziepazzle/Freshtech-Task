const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
      },
    
      verificationToken: String,
      verificationTokenExpires: Date,
    
     
      resetOTP: {
        type: String
    },
     
    resetOTPExpires: {
        type: Date
    },
    
    
    googleId: {
        type: String,
        required: false
      },
      displayName: {
        type: String,
        required: false
      },
      firstName: {
        type: String,
        required: false
      },
      lastName: {
        type: String,
        required: false
      },
      image: {
        type: String,
        required: false
      },

});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Password match method
userSchema.methods.matchPassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
