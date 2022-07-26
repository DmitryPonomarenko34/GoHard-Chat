// Core
import styled, { css } from 'styled-components';

// Types
type styleProps = {
    isRuLayout?: boolean
}

export const Container = styled.section`
`;

export const KeyboardWrapper = styled.div<styleProps>`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  ${(props) => props.isRuLayout && css`
      grid-template-columns: repeat(11, 1fr);
    `
}
`;

export const KeyboardWrapperSmall = styled.div<styleProps>`
  display: grid;
  grid-template-columns: repeat(9, 1fr);

  ${(props) => props.isRuLayout && css`
      grid-template-columns: repeat(11, 1fr);
    `
}
`;

export const KeyboardWrapperLast = styled.div<styleProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 50% repeat(2, 1fr);
`;

export const KeyboardElem = styled.button`
  display: grid;
  place-items: center;
  padding: 3px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  background-color: #ccc;
  border: 4px solid #000;
  color: #000;

    &:hover {
      border-color: #fff;
    }
`;
