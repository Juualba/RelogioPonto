const express = require('express');
const app = express();
app.use(express.json());

const registroponto = require('./models/registroponto');
registroponto.sync();

// função para cadastrar itens no banco de dados
app.post("/registroponto", async (req, res) => {
    
    for (let index = 0; index < req.body.length; index++) {   
        await registroponto.create(req.body[index]).then(() => {
            console.log('cadastrou');
        }).catch((erro) => {
            return res.json({
                erro: false,
                mensagem: "salvo com sucesso."
            });
        });
    }

    return res.json({
        erro: false,
        mensagem: "salvo com sucesso."
    });;
});

app.listen(8080, () => {
    console.log('servidor iniciado');
});