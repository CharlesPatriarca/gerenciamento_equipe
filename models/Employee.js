const mongoose = require('../config/database');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Manager' },
});

module.exports = mongoose.model('Employee', EmployeeSchema);