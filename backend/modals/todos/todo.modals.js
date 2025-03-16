import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false, // off the user when doent provide any value set to false
    },

    creadedBy: {
      //  taking REference from User as they are going to input and create
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      //  Array of Subtodos
      {
        // coz these subTodos will be created by the User soo we will take there reference
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);
// when we set Timestap : true  this will automatically add two properties which is "createdAt" - data at which the object is created and "updatedAT" - the data at which the object is updated

export const Todo = mongoose.model("Todo", todoSchema);

//  Todo will stored a "todos" collection in mongoDb
