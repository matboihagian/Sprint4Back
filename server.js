const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const matchesRoute = require('./routes/matchesRoutes'); // Atualizado para MatchesRoutes

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

// Usar a rota de partidas
app.use('/api', matchesRoute); // Atualizado para usar matchesRoute

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
