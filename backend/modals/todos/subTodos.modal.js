import mongoose from "mongoose";

//  Making schema :

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
  // when we set Timestap : true  this will automatically add two properties which is "createdAt" - data at which the object is created and "updatedAT" - the data at which the object is updated
);

// "User" is stored in mongoDb as "users" collcetion like this  ex "db.users  "
export const User = mongoose.model("User", userSchema);
