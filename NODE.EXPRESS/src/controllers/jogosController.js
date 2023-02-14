import Jogos from "../models/Jogos.js";

class JogosController {
    static listarJogos = (req, res) => {
        Jogos.find()
        .populate('plataforma')
        .exec((err, jogos) => {
            res.status(200).json(jogos)
        })
    }

    static cadastrarJogo = (req, res) => {
        let jogo = new Jogos(req.body);
        
        jogo.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar jogo`});
            } else {
                res.status(201).send(jogo.toJSON())
            }
        })
    }

    static atualizarJogo = (req, res) => {
        const id = req.params.id;

        Jogos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Jogo atualizado com sucesso!'});
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarJogoPorId = (req, res) => {
        const id = req.params.id;

        Jogos.findById(id)
        .populate('plataforma', 'nome')
        .exec((err, jogos) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do jogo não localizada`});
            } else {
                res.status(200).send(jogos);
            }
        })
    }    

    static excluirJogo = (req, res) => {
        const id = req.params.id;

        Jogos.findByIdAndDelete(id,  (err) => {
            if(!err){
                res.status(200).send({message: 'Jogo removido com sucesso!'});
            }else{
                res.status(500).send({message: err.message});
            }
        })
    }

    static listarJogosPorProdutora = (req, res) => {
        const produtora = req.query.produtora

        Jogos.find({'produtora': produtora}, {}, (err, jogos) => {
            res.status(200).send(jogos)
        })
    }

}

export default JogosController