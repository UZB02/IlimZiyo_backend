import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import authRoutes from "./routes/authRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import columnRoutes from "./routes/columnRoutes.js";
import groupRouters from "./routes/groupRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import balanceRoutes from "./routes/balanceRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import salaryRoutes from "./routes/salaryRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check route (Render health check uchun kerak)
// app.get("/", (req, res) => {
//   res.send("✅ Server ishlayapti");
// });

// API routes
app.use("/api/columns", columnRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/groups", groupRouters);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/balance", balanceRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/salaries", salaryRoutes);

// MongoDB ulanish va serverni ishga tushirish
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ Server ${PORT} portda ishga tushdi`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB ulanish xatosi:", err.message);
    process.exit(1); // Xatolik bo‘lsa serverni to‘xtatish
  });
