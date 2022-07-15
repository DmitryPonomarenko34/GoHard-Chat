// Core
import styled from 'styled-components';

// Types
type booleanProps = {
    long?: boolean;
    small?: boolean;
    smallEnd?: boolean;
    backspace?: boolean;
}

export const Container = styled.section`
  max-width: 550px;
  margin: 20px auto;
  padding: 0 15px;
`;

export const KeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(70, 1fr);
  grid-template-rows: repeat(5, 30px);
`;

export const KeyboardElem = styled.button<booleanProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  font-size: 14px;
  background-color: #ccc;
  color: #000;
  border: 4px solid #000;
  grid-column: ${(props) => {
        if (props.long) {
            return 'span 42';
        } else if (props.small) {
            return 'span 8';
        } else if (props.smallEnd) {
            return 'span 6';
        } else if (props.backspace) {
            return 'span 12';
        }

        return 'span 7';
    }};

    &:hover {
      border-color: #fff;
    }
`;
