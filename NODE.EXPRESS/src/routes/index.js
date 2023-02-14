import express from "express";
import Plataformas from "../routes/plataformasRoutes.js";
import jogos from "./jogosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aprendendo node"});
    })
    app.use(
        express.json(),
        jogos,
        Plataformas
    )
}

export default routes