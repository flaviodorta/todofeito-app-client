import styled from 'styled-components';
import Textarea from 'react-expanding-textarea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.white.one};
  border-radius: 4px;
  width: 100%;
  min-height: 20rem;
  max-height: 30rem;
  font-size: 1.4rem;
  padding: 0 30px;
`;

export const Border = styled.div`
  border: 1px solid ${(props) => props.theme.colors.grey.one};
  border-radius: 4px;
  /* padding: 1.5rem; */
  margin-bottom: 1rem;
`;

export const Title = styled.input`
  border: none;
  outline: none;
  margin-bottom: 1rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;

  &::placeholder {
    color: #777;
  }
`;

export const Description = styled(Textarea)`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 59px;
  margin-bottom: 2.5rem;
  padding: 0 1.5rem 1.5rem 1.5rem;

  &::placeholder {
    color: #999;
  }

  &::-webkit-scrollbar {
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const OptionsLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OptionsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const OptionLabeled = styled.button<{ fill: string }>`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.grey.one};
  border-radius: 3px;
  padding: 0.6rem 0.4rem;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  font-size: 1.3rem;
  color: #222;
  position: relative;

  svg {
    margin-right: 4px;
    fill: ${(props) => props.fill};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.white.three};
  }
`;

export const DatePicker = styled.input`
  position: absolute;
  visibility: hidden;
`;

export const OptionIconed = styled.button`
  display: flex;
  justify-content: flex;
  align-items: center;
  padding: 0.65rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;

  svg {
    width: 16px;
    height: 16px;
    fill: #777;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  justify-content: flex-end;
`;

interface ButtonProps {
  bg: string;
  bgHover: string;
  color: string;
  bgActive: string;
}

export const Button = styled.button<ButtonProps>`
  font-weight: bold;
  border-radius: 4px;
  padding: 1rem 1rem;
  outline: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;

  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};

  &:hover {
    /* background-color: ${(props) => `darken(${props.bg}, 50%)`}; */
    /* background-color: darken(red, 50%); */
    /* filter: brightness(0.85); */
    /* opacity: 0.5; */
    background-color: ${(props) => props.bgHover};
  }

  &:active {
    background-color: ${(props) => props.bgActive};
  }

  &:disabled {
    background-color: #aac7f3;
    cursor: not-allowed;
  }
`;

export const AddTodo = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 200;
  padding: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;

  color: ${(props) => props.theme.colors.grey.three};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    fill: ${(props) => props.theme.colors.blue};
  }

  .icon-bg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    margin-bottom: 0.2rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white.one};
  }

  &:hover {
    color: ${(props) => props.theme.colors.blue};

    .icon-bg {
      background-color: ${(props) => props.theme.colors.blue};
    }

    svg {
      fill: white;
    }
  }
`;
