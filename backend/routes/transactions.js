const {
  addExpense,
  getExpense,
  deleteExpense,
} = require('../controllers/expense');
const {
  addIncomes,
  getIncomes,
  deleteIncomes,
} = require('../controllers/income');

//Creating a new router instance
const router = require('express').Router();

router
  .post('/add-income', addIncomes)
  .get('/get-income', getIncomes)
  .delete('/delete-income/:id', deleteIncomes)
  .post('/add-expense', addExpense)
  .get('/get-expense', getExpense)
  .delete('/delete-expense/:id', deleteExpense);

module.exports = router;
