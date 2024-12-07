import mongoose, { Schema } from "mongoose";

const docsSchema = new Schema({
  advNumber: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
    trim: true,
    uppercase: true,
    minLength: 3,
  },
  issueDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  docFile: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
    minLength: 5,
  },
});
export const DocsModel = mongoose.model("Document", docsSchema);
