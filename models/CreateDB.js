const Database = require('better-sqlite3');

const db = new Database('../chamados.db', { verbose: console.log });

/*
    Criação das tabelas necessárias para o projeto
*/

// Tabela de solicitações
const tabelaChamados = `
  CREATE TABLE IF NOT EXISTS chamados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    matricula TEXT NOT NULL,
    setor TEXT NOT NULL,
    tipo TEXT NOT NULL,
    prioridade TEXT NOT NULL,
    descricao TEXT NOT NULL,
    status BOOL NOT NULL,
    createdAt DATETIME DEFAULT (datetime('now', 'localtime')),
    updatedAt DATETIME DEFAULT (datetime('now', 'localtime'))
  );
`;

db.exec(tabelaChamados);

// Tabela de usuários de teste
const tabelaUsuarios = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  );
`;

db.exec(tabelaUsuarios);

// Inserção de usuários de teste
const insertUsers = `
  INSERT INTO users (nome, email, username, password) VALUES
  ('Admin', 'Admin', 'admin', 'admin'),
  ('User', 'User', 'user', 'user');
`;

db.exec(insertUsers);

db.close();

