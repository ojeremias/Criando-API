CREATE TABLE aluno(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    matricula VARCHAR(20) unique,
    data_nascimento DATE,
    pontuacao INTEGER
);

CREATE TABLE atividade(
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    aluno_id INTEGER,
    nome VARCHAR(100),
    disciplina VARCHAR(100),
    nota DECIMAL(10,2),
    observacao VARCHAR(255),
    FOREIGN KEY (aluno_id) REFERENCES aluno(id)
);

INSERT INTO aluno VALUES
(NULL, "Ronaldinho Gaucho", "233vv4221", "2003-04-14", 10),
(NULL, "Tainara Silva", "233vv4222", "2003-9-10", 04),
(NULL, "Felipe Guttemberg", "233vv4553", "1998-12-04", 1),
(NULL, "Daniel silva", "233ff4552", "2000-10-14", 4)