import role from "../models/role.js"; // importamos el modelo de rol

// insertar
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

// mostrar
const listRole = async (req, res) => {   // vamos a listar todos los roles creados
  const roleSchema = await role.find();  // traer todos los datos que tienen rol
  if(!roleSchema || roleSchema.length == 0) return res.status(400).send("Empity role list");  // valida si no hay datos
  return res.status(200).send({ roleSchema }); // muestra lo que tiene el rol
};

// actualizar
const updateRole = async (req, res) =>{
  if (!req.body.name || !req.body.description)   // valido eso dos datos sean falsos por el signo !
    return res.status(400).send("Incomplete data");     // si alguno no envio los datos le mostramos un error

    const existinRole = await role.findOne({ name: req.body.name, description: req.body.description }); // consulta si el nombre que se va a actualizar ya esta

    if (existinRole) return res.status(400).send("The role already exist");  // dice que el nombre ya esta

  const roleUpdate = await role.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description
  });  // actualiza el nombre y descripcion del id que seleccionemos

  return !roleUpdate
  ? res.status(400).send("Error editing role")
  : res.status(200).send({ roleUpdate }); // valida si hay un error en el actualizar
};

// eliminar
const deleteRole = async (req, res) =>{
  const roleDelete = await role.findByIdAndDelete({ _id: req.params["_id"] }); // va y elimina ese usuario
  return roleDelete ? res.status(400).send("Role no found") : res.status(200).send("Role deleted"); // valida si se elimina o no
};

// algo interno (para saber el rol cuando el usuario entra a la pag)
const findRole = async (req, res) => {
  const roleId = await role.findById({ _id: req.params["_id"] });  // voy a consultar 1 solo id en la db
  return !roleId ? res.status(400).send("No search results") : res.status(200).send({ roleId }); // valido si no esta basio y trago el parametro que tenga si tiene
};

export default { registerRole, listRole, findRole, updateRole, deleteRole };