import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());

// Configuração para processar JSON no corpo da requisição
app.use(express.json());

// Função para abrir o banco de dados
async function openDb() {
  return open({
    filename: "./Banco.db",
    driver: sqlite3.Database,
  });
}

// Criar a tabela (se ainda não existir)
async function createTable() {
  const db = await openDb();
  await db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      email VARCHAR,
      password VARCHAR
    )
  `);
  console.log("Tabela criada/verificada com sucesso!");
}

// Endpoint para cadastro
app.post("/cadastro", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const db = await openDb();
    await db.run(
      `INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  try {
    const db = await openDb();
    const user = await db.get(
      `SELECT * FROM usuario WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (user) {
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
  await createTable();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
