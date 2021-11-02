import role from "../models/role.js"; // importamos el modelo de rol

const registerRole = async (req, res) => {      // req es lo que llega y res es lo que devuelve
  if (!req.body.name || !req.body.description)      // valido eso dos datos sean falsos por el signo !
    return res.status(400).send("Incomplete data");     // si alguno no envio los datos le mostramos un error

  const existingRole = await role.findOne({ name: req.body.name }); //valida si hay algun rol igual al que insertan en mongo

  if (existingRole) return res.status(400).send("The role already exist");

  const roleSchema = new role({     // los datos que va a mandar
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });

  const result = await roleSchema.save(); // le confirmamos que lo puede guardar

  if (!result) return res.status(400).send("Failed to register role"); // validamos si se mando la respuesta y le damos una respuesta al cliente

  return res.status(200).send({ result }); // mostramos que se guardo correctamente
};

export default { registerRole };