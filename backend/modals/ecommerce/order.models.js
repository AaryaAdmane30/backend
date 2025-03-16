import mongoose from "mongoose";

//  another mini model schemas
const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

//  main schema:
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      type: [orderItemsSchema], // array of orderItemsSchema
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"], // enum are the number of choices in [] array type
      default: "Pending ",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);

//  another mini model schema
export const OrderItems = mongoose.model("OrderItems", orderItemsSchema);
