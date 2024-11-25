import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Configuração do banco de dados
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root", // Altere para sua senha do MySQL
  database: "meu_projeto", // Nome do seu banco de dados
};

// Função para inicializar o banco de dados (criar tabelas se não existirem)
async function initializeDb() {
  const connection = await mysql.createConnection(dbConfig);
  
  // Criando a tabela 'usuario' se não existir
  await connection.query(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
  
  // Criando a tabela 'mercado' se não existir
  await connection.query(`
    CREATE TABLE IF NOT EXISTS mercado (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      senha VARCHAR(255) NOT NULL
    );
  `);
  
  console.log("Tabelas 'usuario' e 'mercado' criadas/verificadas com sucesso!");
  connection.end();
}

// Rota para cadastro de usuários e mercados
app.post("/cadastro", async (req, res) => {
  const { username, email, password, tipo } = req.body;

  if (!username || !email || !password || !tipo) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Cadastro de 'usuario'
    if (tipo === "usuario") {
      await connection.query(
        `INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)`,
        [username, email, password]
      );
    }
    // Cadastro de 'mercado'
    else if (tipo === "mercado") {
      await connection.query(
        `INSERT INTO mercado (nome, email, senha) VALUES (?, ?, ?)`,
        [username, email, password]
      );
    } else {
      return res.status(400).json({ error: "Tipo de conta inválido!" });
    }
    connection.end();
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    res.status(500).json({ error: "Erro ao cadastrar." });
  }
});

// Rota para login de usuários e mercados
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Verificando login de usuário
    let [rows] = await connection.query(
      `SELECT * FROM usuario WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({ tipo: "usuario", nome: rows[0].username });
    }

    // Verificando login de mercado
    [rows] = await connection.query(
      `SELECT * FROM mercado WHERE email = ? AND senha = ?`,
      [email, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({ tipo: "mercado", nome: rows[0].nome });
    }

    res.status(401).json({ error: "Email ou senha inválidos!" });
    connection.end();
  } catch (error) {
    console.error("Erro ao realizar login:", error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
});

// Inicializando o servidor e o banco de dados
app.listen(PORT, async () => {
  await initializeDb();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
