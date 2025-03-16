import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
