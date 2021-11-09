import express from "express"; // Importar el servidor
import cors from "cors"; // importamos el que valida que esta permitido y que no en el backend
import db from "./db/db.js"; // importar la base de datos
import dotenv from "dotenv"; // el que va a entender el archivo .env
import role from "./routes/role.js";  // importamos la ruta
dotenv.config(); // se configure automaticamente y ejecute .env

const app = express(); // indicamos que es nuestro servidor backend

app.use(express.json()); // nuestro servidor solo se va a comunicar por json
app.use(cors());
app.use("/api/role", role); // el nombre y la ruta donde esta el rol

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
); // PUERTO EN EL CUAL SE VA A EJECUTAR EL SERVIDOR

db.dbConnection(); // llamamos la base de datos