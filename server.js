const express = require("express");
const cors = require("cors");
const connection = require("./db_config");
const { request } = require("http");

const porta = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/usuario/Cadastrar", (request, response) => {

  let params = [
    request.body.nome,
    request.body.email,
    request.body.senha,
    request.body.cpf_num,
  ];

  let query =
    "INSERT INTO users (nome, email, senha, cpf_num) VALUES (?,?,?,?)";

  connection.query(query, params, (err, results) => {
    if (results) {
      response.status(201).json({
        sucess: true,
        message: "Bombou",
        data: results,
      });
    } else {
      response.status(400).json({
        sucess: false,
        message: "Deu RED ❌",
        data: err,
      });
    }
  });
});

app.get("/usuario/Listar", (request, response) => {
  let query = "SELECT * FROM users";


  connection.query(query, (err, results) => {
    if(results){
      response.status(200).json({
        sucess: true,
        message: "Bombou",
        data: results,
      });
    } else {
      response.status(400).json({
        sucess: false,
        message: "Deu RED ❌",
        data: err,
      });
    }

  })
});

app.put ("/usuario/editar/:id", (request, response) => {
  let params = [
    request.body.nome,
    request.body.email,
    request.body.senha,
    request.body.cpf_num,
    request.params.id
  ];

  let query = "UPDATE users SET nome = ?, email = ?, senha = ?, cpf_num = ? WHERE id = ?";

  connection.query(query, params, (err, results) => {
    if (results) {
      response.status(201).json({
        sucess: true,
        message: "Bombou",
        data: results,
      });
    } else {
      response.status(400).json({
        sucess: false,
        message: "Deu RED ❌",
        data: err,
      });
    }
  });
});


app.delete("/usuario/deletar/:id", (request, response) =>{ 

  let params = [
    request.params.id
  ];

  let query = "DELETE FROM users WHERE id = ?";

  connection.query(query, params, (err, results) => {
    if (results) {
      response.status(201).json({
        sucess: true,
        message: "Bombou",
        data: results,
      });
    } else {
      response.status(400).json({
        sucess: false,
        message: "Deu RED ❌",
        data: err,
      });
    }
  })

})


app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});