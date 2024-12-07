import mongoose from "mongoose";

export function mongodbConnection(uri) {
  mongoose
    .connect(`${uri}`)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("dbconnction error", err);
    });
}
