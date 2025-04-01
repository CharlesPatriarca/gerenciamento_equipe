const mongoose = require('mongoose');

// Conexão com MongoDB local (assumindo que está rodando em localhost:27017)
mongoose.connect('mongodb://localhost:27017/gerenciamento', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;