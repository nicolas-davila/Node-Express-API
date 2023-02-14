import Plataformas from "../models/Plataformas.js";

class plataformasController {
    static listarPlataformas = (req, res) => {
        Plataformas.find((err, jogos) => {
            res.status(200).json(jogos);
        })
    }

    static cadastrarPlataforma = (req, res) => {
        let plataforma = new Plataformas(req.body);

        plataforma.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar plataforma do jogo`});
            } else {
                res.status(201).send(plataforma.toJSON())
            }
        })
    }

    static atualizarPlataforma = (req, res) => {
        const id = req.params.id;

        Plataformas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'id da plataforma atualizada com sucesso!'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarPlataformaPorId = (req, res) => {
        const id = req.params.id;

        Plataformas.findById(id, (err, jogos) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id da plataforma não localizada`});
            } else {
                res.status(200).send(plataformas);
            }
        })
    }
    static excluirPlataforma = (req, res) => {
        const id = req.params.id;

        Plataformas.findByIdAndDelete(id,  (err) => {
            if(!err){
                res.status(200).send({message: 'Plataforma removida com sucesso!'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }
}

export default plataformasController