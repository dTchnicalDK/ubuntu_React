import { upload } from "../utils/multureUtils.js";
import uploadToCloudinary from "../utils/cloudinaryUtils.js";
import { DocsModel } from "../docsModel/docsModel.js";
import { v2 as cloudinary } from "cloudinary";
import { extractPublicId } from "../utils/cloudinaryFileDelete.js";
import fs from "fs";

// homepage controller-------------------------------------------------
export function homepage(req, res) {
  res.send("welcome to home page");
}

//create docs controller---------------------------------------------
export async function createDoc(req, res) {
  try {
    const uploadedFileLocalPath = req.file?.path;
    //confirming file is uploaded to server and file path acquired
    if (!uploadedFileLocalPath) {
      return res.status(300).json({ msg: "select file to upload" });
    }
    //calling function to upload on cloudinary
    const cloudinaryUploadedObject = await uploadToCloudinary(
      uploadedFileLocalPath
    );
    const cloudinaryPubUrl = cloudinaryUploadedObject.url;
    // confirming file uploaded to cloudinary
    if (!cloudinaryPubUrl) {
      return res
        .status(500)
        .json({ msg: "sorry! could'nt get file cloudinary url" });
    }
    console.log("uploaded to cloudinary");
    //deleting uploaded file from local server after being uploaded on cloudinary
    try {
      fs.unlinkSync(uploadedFileLocalPath);
      console.log("local server file deleted");
    } catch (error) {
      console.log("error in deleting local server file:", error);
    }
    // -----------------------------------------
    //  if uploaded, creating object to upload on database....
    try {
      const docObject = {
        advNumber: req.body.advNumber,
        issueDate: req.body.issueDate,
        subject: req.body.subject,
        docFile: cloudinaryPubUrl,
      };
      const document = new DocsModel(docObject);
      const savedDoc = await document.save();
      console.log(`savedDoc: ${savedDoc}`);
      res.status(201).json({
        msg: "finally! data&file uploaded to server, cloudinary and saved the object to database",
      });
    } catch (error) {
      //function to extract public id so that file can be deleted
      const publicId = extractPublicId(cloudinaryPubUrl);
      //if any error then delete uploaded file from cloudinary
      await cloudinary.uploader
        .destroy(publicId)
        .then((res) => {
          console.log("cleaning unsuccessful file from cloudinary", res);
        })
        .catch((error) => {
          console.log("trying to delete unsuccessful file, error:", error);
        });
      res.status(500).json(`document creation error: ${error}`);
    }
  } catch (error) {
    res.status(500).json(`file upload error: ${error}`);
  }
}
