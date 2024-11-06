import React, { useContext, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  //Incomes
  const addIncome = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((error) => {
        setError(error.response.data.message);
      });
    getIncome();
  };

  const getIncome = async () => {
    const response = await axios.get(`${BASE_URL}get-income`);
    setIncomes(response.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  //Expense
  const addExpense = async (expense) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpense();
  };

  const getExpense = async () => {
    const response = await axios.get(`${BASE_URL}get-expense`);
    setExpenses(response.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpense();
  };

  const totalExpense = () => {
    return expenses.reduce((acc, expense) => acc + expense.amount, 0);
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncome,
        incomes,
        deleteIncome,
        totalIncome,
        addExpense,
        getExpense,
        expenses,
        deleteExpense,
        totalExpense,
        transactionHistory,
        error,
        setError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
