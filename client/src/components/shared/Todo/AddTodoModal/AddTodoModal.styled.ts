import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -50%);
  padding: 30px;
  background-color: ${(props) => props.theme.colors.white.one};
  border-radius: 4px;
  width: 50rem;
  min-height: 20rem;
  max-height: 30rem;
  z-index: 100;
`;

export const Title = styled.input`
  border: none;
  outline: none;
  margin-bottom: 2rem;

  &::placeholder {
    color: #777;
  }
`;

export const Description = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 59px;
  margin-bottom: 5rem;

  &::placeholder {
    color: #999;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
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

export const Button = styled.button<{
  bg: string;
  bgHover: string;
  color: string;
  bgActive: string;
}>`
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
