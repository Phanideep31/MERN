import app from "./app.js";
import cloudinary from "cloudinary";
import dbConnection from "./database/dbConnection.js"; // ✅ correct
 // ✅ Import your DB connection

// ✅ Connect to MongoDB
dbConnection();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Start server AFTER DB is connected
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
