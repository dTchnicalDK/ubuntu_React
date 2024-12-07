import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const uploadToCloudinary = async (localFilePath) => {
  try {
    // Configuration
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });

    //upload to cloudinary method
    const uploadResponse = await cloudinary.uploader.upload(localFilePath);
    return uploadResponse;
    // console.log(`cloudinary upload result: ${uploadResponse}`);
  } catch (error) {
    console.log(`cloudinary upload error ${error}`);
  }
};
export default uploadToCloudinary;
