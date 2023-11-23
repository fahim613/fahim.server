const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      
    }, 
    password: {
      type: String,
      required: [true, "Password is required"],
      
    },
    
    role: {
      type: String,
      enum: ["user", "seller", "admin"],
      default: "user",
    },

    firstname: {
      type: String,
       
    },
    lastname: {
      type: String,
 
    },
    phone: {
      type: String,
      
    },
 
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    //  only run if password is modified, otherwise it will change every time we save the user!
    return next();
  }
  const password = this.password;

  const hashedPassword = bcrypt.hashSync(password);

  this.password = hashedPassword;
  this.confirmPassword = undefined;

  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.confirmationToken = token;

  const date = new Date();

  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpires = date;

  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;