const Manager = require('../models/Manager');

exports.createManager = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const manager = new Manager({ name, email, password });
    await manager.save();
    res.status(201).json({ message: 'Gerente criado', id: manager._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.json(managers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};