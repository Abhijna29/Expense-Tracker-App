import React from 'react';
import styled from 'styled-components';

function Button({ name, icon, onClick, bg, bPad, color, bRad, hcolor }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
      hcolor={hcolor}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: hcolor;
  }
`;

export default Button;
