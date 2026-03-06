const express = require("express");
const cors = require("cors");
const connection = require("./db_config");

const porta = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.post("/usuario/Cadastrar", (request, response) => {
  let params = Array(
    request.body.name,
    request.body.email,
    request.body.senha,
    request.body.cpf_num
  );

  let query =
    "INSERT INTO users (nome, email, senha, cpf_num) VALUES (?,?,?,?)";

  connection.query(query, params, (err, results) => {
    if (results) {
      response.status(201).json({
        sucess: true,
        message: "Sucesso",
        data: results,
      });
    } else {
      response.status(400).json({
        sucess: false,
        message: "Erro",
        data: err,
      });
    }
  });
});

app.listen(porta, () => console.log(`Rodando na porta ${porta}`)); // verifica se a porta esta rodando
