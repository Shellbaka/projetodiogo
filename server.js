import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração de conexão com o banco de dados MySQL
const dbConfig = {
  host: "localhost", // Altere se necessário
  user: "root", // Substitua pelo seu usuário MySQL
  password: "root", // Substitua pela sua senha MySQL
  database: "meu_projeto", // Substitua pelo nome do seu banco de dados
};

// Função para inicializar a tabela de usuários
async function initializeDb() {
  const connection = await mysql.createConnection(dbConfig);
  await connection.query(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
  console.log("Tabela 'usuario' criada/verificada com sucesso!");
  connection.end();
}

// Rota para cadastro de usuários
app.post("/cadastro", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.query(
      `INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
    connection.end();
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ error: "Erro ao cadastrar o usuário." });
  }
});

// Rota para login de usuários
app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query(
      `SELECT * FROM usuario WHERE email = ? AND password = ?`,
      [email, password]
    );
    connection.end();

    if (rows.length > 0) {
      res.status(200).json({ message: "Login bem-sucedido!" });
    } else {
      res.status(401).json({ error: "Email ou senha inválidos!" });
    }
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Iniciar o servidor
app.listen(PORT, async () => {
  await initializeDb();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
