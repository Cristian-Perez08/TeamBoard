// importar librerias
// const mongoose = requiere("mongoose"); // forma vieja
import mongoose from "mongoose";

const dbConnection =  async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection whit MongoDB: ok");
  } catch (e) {
      console.log("Error connecting to MongoDB: \n" + e);
  }
};

export default { dbConnection };
