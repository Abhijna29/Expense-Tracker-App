import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import ExpenseForm from './ExpenseForm';
import Items from '../Items';

function Expense() {
  const { getExpense, expenses, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getExpense();
  }, []);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h3 className="total-expense">
          Total Expense: <span>${totalExpense()}</span>
        </h3>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <Items
                  key={_id}
                  id={_id}
                  title={title}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  description={description}
                  indicatorColor="red"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: hidden;
  .total-expense {
    display: flex;
    justify-content: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    span {
      color: red;
    }
  }
  .expense-content {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`;

export default Expense;
