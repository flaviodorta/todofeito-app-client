import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 500px;
  width: 400px;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  z-index: 100;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white.one};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
  width: auto;
  letter-spacing: 0.3px;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.font};
  font-weight: 500;
  background: ${(props) => props.theme.colors.white.two};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.two};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 3rem 0 3rem;
`;

export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.2rem;
  width: 100%;
`;

export const FormLabel = styled.label`
  margin-bottom: 0.8rem;
  font-weight: 500;
  font-size: 1.5rem;
`;

export const FormTextInput = styled.input<{
  inputNameValue: string;
}>`
  width: 100%;
  padding: 0.5rem 1rem;
  height: 2.7rem;
  transition: all 0.125s ease;
  border-radius: 3px;
  outline: none;
  background-color: transparent;
  font-size: 1.4rem;

  border: 1px solid ${(props) => props.theme.colors.grey.two};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.grey.three};
    border-color: ${(props) => props.theme.colors.blue};
    box-shadow: 0 0 0 2.5px rgba(40, 67, 135, 0.2);
    /* ${(props) =>
      props.inputNameValue &&
      css`
        border-color: ${(props) => props.theme.colors.blue};
        box-shadow: 0 0 0 2.5px rgba(40, 67, 135, 0.2);
      `} */
  }
`;
