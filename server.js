const express = require('express');
const cors = require('cors');
const managerRoutes = require('./routes/managerRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
require('./config/database'); // Inicializa a conexão com MongoDB

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/managers', managerRoutes);
app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});