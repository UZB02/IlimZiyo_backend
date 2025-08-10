import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paidAt: {
    type: Date,
    default: Date.now,
  },
  method: {
    type: String, // 'naqd', 'click', 'karta', 'bank', h.k.
    default: "naqd",
  },
  description: {
    type: String,
    default: "",
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model("Payment", paymentSchema);
