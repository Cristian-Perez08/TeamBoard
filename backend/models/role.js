import mongoose from "mongoose"; // para que administre todo lo de mongoose

const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now }, // reguistra la fecha automaticamente
  dbStatus: Boolean,
}); // esto va a ser el nuevo esquema

const role = mongoose.model("roles", roleSchema); // crear un rol que se va a llevar lo que esta en roleSchema

export default role;