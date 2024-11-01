const db = require('../db/database');

// Obter todas as partidas
exports.getMatches = (req, res) => {
  db.all('SELECT * FROM consultations', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao obter partidas' });
    } else {
      res.json(rows);
    }
  });
};

// Criar uma nova partida
exports.createMatch = (req, res) => {
  const { adversario, date, campeonato, userId } = req.body;
  db.run('INSERT INTO consultations (adversario, date, campeonato, userId) VALUES (?, ?, ?, ?)', 
    [adversario, date, campeonato, userId], function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao criar partida' });
      } else {
        res.status(201).json({ message: 'Partida criada com sucesso', id: this.lastID });
      }
    }
  );
};

// Atualizar partida
exports.updateMatch = (req, res) => {
  const { id } = req.params;
  const { adversario, date, campeonato } = req.body;

  db.run('UPDATE consultations SET adversario = ?, date = ?, campeonato = ? WHERE id = ?', 
    [adversario, date, campeonato, id], function (err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar partida' });
      } else {
        res.status(200).json({ message: 'Partida atualizada com sucesso' });
      }
    }
  );
};

// Deletar partida
exports.deleteMatch = (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM consultations WHERE id = ?', [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Erro ao deletar partida' });
    } else {
      res.status(200).json({ message: 'Partida deletada com sucesso' });
    }
  });
};
