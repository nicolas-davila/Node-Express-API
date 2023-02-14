import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Senac:123@senac.rldi1.mongodb.net/Senac");

let db = mongoose.connection;

export default db