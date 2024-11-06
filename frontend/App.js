import React, { useState } from 'react';
import styled from 'styled-components';
import bg from './img/bg.jpg';
import { MainLayout } from './styles/layouts';
import Navigation from './components/navigations';
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income';
import Expense from './components/Expense/Expenses';
import { useGlobalContext } from './context/GlobalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Income />;
      case 3:
        return <Expense />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: hidden;
    &::- webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
