import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "meu_projeto",
};

// Função de inicialização do banco de dados
async function initializeDb() {
  const connection = await mysql.createConnection(dbConfig);
  
  // Criando a tabela de 'usuario'
  await connection.query(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
  
  // Criando a tabela de 'mercado'
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

// Rota de cadastro
app.post("/cadastro", async (req, res) => {
  const { username, email, password, tipo } = req.body;

  // Validação de dados
  if (!username || !email || !password || !tipo) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Inserção nas tabelas de acordo com o tipo
    if (tipo === "usuario") {
      // Inserir usuário na tabela 'usuario'
      await connection.query(
        `INSERT INTO usuario (username, email, password) VALUES (?, ?, ?)`,
        [username, email, password]
      );
    } else if (tipo === "mercado") {
      // Inserir mercado na tabela 'mercado'
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

// Rota de login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios!" });
  }

  try {
    const connection = await mysql.createConnection(dbConfig);
    
    // Verificar login de usuário
    let [rows] = await connection.query(
      `SELECT * FROM usuario WHERE email = ? AND password = ?`,
      [email, password]
    );

    if (rows.length > 0) {
      return res.status(200).json({ tipo: "usuario", nome: rows[0].username });
    }

    // Verificar login de mercado
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

// Inicializando o servidor e banco de dados
app.listen(PORT, async () => {
  await initializeDb();
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
