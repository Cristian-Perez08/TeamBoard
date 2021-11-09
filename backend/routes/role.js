import express from "express";
import role from "../controllers/role.js";  // importamos el controlador del rol
const router = express.Router();

router.post("/registerRole", role.registerRole);   // Creamos la ruta donde se va a registrar
router.get("/listRole", role.listRole);  // Creamos la ruta donde se va a llamar
router.get("/findRole/:_id", role.findRole); // indicamos que va a volver una variable id por eso ponemos :_id
router.put("/updateRole", role.updateRole); // actualizar el rol
router.delete("/deleteRole/:_id", role.deleteRole); // eliminar rol

export default router;