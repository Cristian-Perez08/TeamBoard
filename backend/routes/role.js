import express from "express";
import role from "../controllers/role.js";  // importamos el controlador del rol
const router = express.Router();

router.post("/registerRole", role.registerRole);   // Creamos la ruta donde se va a registrar

export default router;