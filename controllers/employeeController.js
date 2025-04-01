const Employee = require('../models/Employee');

exports.createEmployee = async (req, res) => {
  const { name, email, managerId } = req.body;
  try {
    const employee = new Employee({ name, email, managerId });
    await employee.save();
    res.status(201).json({ message: 'Funcionário criado', id: employee._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate('managerId', 'name email');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};