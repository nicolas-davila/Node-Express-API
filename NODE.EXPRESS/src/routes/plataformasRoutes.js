import express from "express";
import PlataformaController from "../controllers/plataformasController.js";

const router = express.Router();

router
    .get("/plataformas", PlataformaController.listarPlataformas)
    .get("/plataformas:id", PlataformaController.listarPlataformaPorId)
    .post("/plataformas", PlataformaController.cadastrarPlataforma)
    .put("/plataformas/:id", PlataformaController.atualizarPlataforma)
    .delete("/plataformas/:id", PlataformaController.excluirPlataforma)

export default router