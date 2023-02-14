import mongoose from "mongoose";

const plataformaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        país: {type: String}
    }
)

const Plataformas = mongoose.model('plataformas', plataformaSchema);

export default Plataformas