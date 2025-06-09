const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const nodemon = require('nodemon');
const Tarefa = require('./models/Tarefa');

// Configurações

    // Handlebars

        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    // BodyParser

        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

// Rotas

    // GET

        app.get('/tarefas', (req, res) => {
            Tarefa.findAll({order: [['id', 'DESC']]}).then(tarefas => {
                const tarefasSimples = tarefas.map(t => t.toJSON());
                res.render('home', { tarefas: tarefasSimples });
            });
        });

    // POST
    
        app.post('/tarefas', (req, res) => {
            Tarefa.create({
                descricao: req.body.descricao,
                concluido: req.body.concluido
            })
            .then(() => {
                res.redirect('/tarefas')
            })
            .catch((erro) => {
                res.send('Deu erro: ' + erro)
            });
        });



app.listen(8080, () => {
    console.log('Rodando na porta 8080')
})