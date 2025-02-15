import mongoose from "mongoose";

function dbConnection(dbConnectionUri) {
  console.log(dbConnectionUri);

  mongoose
    .connect(`${dbConnectionUri}`)
    .then((res) => {
      console.log(`dbConnected: ${res}`);
    })
    .catch((err) => {
      console.log(`dbConnection error:${err}`);
    });
}

export default dbConnection;
