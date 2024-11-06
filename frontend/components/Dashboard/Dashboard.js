import React, { useEffect } from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../../styles/layouts';
import Chart from './Chart';
import { rupee } from '../../utils/icons';
import { useGlobalContext } from '../../context/GlobalContext';
import History from './History';

function Dashboard() {
  const {
    totalExpense,
    incomes,
    totalIncome,
    getIncome,
    expenses,
    getExpense,
  } = useGlobalContext();

  useEffect(() => {
    getIncome();
    getExpense();
  }, []);

  return (
    <DashboardStyled>
      <InnerLayout>
        <h3> All Transactions</h3>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h4>Total Income</h4>
                <p>
                  {rupee}
                  {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h4>Total Expenses</h4>
                <p>
                  {rupee}
                  {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h4>Total Balance</h4>
                <p>
                  {rupee}
                  {totalIncome() - totalExpense()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h4 className="salary-title">
              Min <span>Salary</span> Max{' '}
            </h4>
            <div className="salary-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>
            <h4 className="salary-title">
              Min <span>Expense</span> Max{' '}
            </h4>
            <div className="salary-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1/4;
      height: 270px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        margin-top: 1.5rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          padding: 0.6rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          p {
            font-size: 1.2rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2/4;

          p {
            color: var(--color-green);
            font-size: 1.5rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4/-1;
      h4 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1rem;
        span {
          font-size: 1.2rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
        }
      }
    }
  }
`;

export default Dashboard;
