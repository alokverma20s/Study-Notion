import express from 'express'
const app = express();

import userRoutes from "./routes/User.js";
import profileRoutes  from "./routes/Profile.js";
import paymentRoutes  from "./routes/Payments.js";
import courseRoutes  from "./routes/Course.js";

import {connect}  from "./config/database.js";
import cookieParser  from "cookie-parser";
import cors from "cors";
import {cloudinaryConnect }  from "./config/cloudinary.js";
import fileUpload  from "express-fileupload";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"https://studynotion-alok.netlify.app",
		credentials:true,
	})
)

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);


//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

