const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");


// Config
    // Template Engine
    app.engine("handlebars", engine({
        defaultLayout: 'main',
        runtimeOptions: {
          allowProtoPropertiesByDefault: true, // Permite acesso às propriedades de protótipos
          allowProtoMethodsByDefault: true     // Permite acesso aos métodos de protótipos
        }
      })); //main é o layout padrão
    app.set("view engine", "handlebars");

    // Body Parser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

// Rotas
    app.get("/login", (req, res) => {
        res.render('login');
    });

    app.post("/logar", (req, res) => {
        let login = req.body.login;
        let senha = req.body.password;
        res.send(login + senha);
    });

    app.get("/solicitacao", (req, res) => {
        res.render('chamado');
    });

    app.post("/solicitar", (req, res) => {
        Post.create({
            nome: req.body.nome,
            matricula: req.body.matricula,
            setor: req.body.setor,
            tipo: req.body.tipo,
            prioridade: req.body.prioridade,
            descricao: req.body.descricao,
            status: false
        }).then(() => {
            res.redirect("/historico");
        }).catch((err) => {
            res.send("Erro: " + err);
        });
    });

    app.get("/historico", (req, res) => {
        Post.findAll({order: [['createdAt', 'DESC']]}).then(function(posts){
            res.render('historico', {posts: posts});
        })
    });

    app.get("/deletar/:id", (req, res) => { 
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.redirect("/historico");
        }).catch((err) => {
            res.send("Erro: " + err);
        });
    });
/* Rotas Dinamicas 
app.get("/ola/:nome/:cargo", (req, res) => { //: indica que é um parametro
    res.send("Ola, " + req.params.nome); // só se usa um send por rota
});
*/
/* Servidor */
app.listen(5500, () => { console.log("Server is running on port 5500"); });