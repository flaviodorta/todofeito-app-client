import styled from 'styled-components';

export const AddProjectButtonModalContainer = styled.div`
  position: sticky;
  height: 600px;
  width: 500px;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white.one};
`;

export const AddProjectButtonModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.4rem;
  width: auto;
  letter-spacing: 0.3px;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.font};
  font-weight: 500;
  background: ${(props) => props.theme.colors.white.two};
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.two};
`;

export const AddProjectButtonModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 4rem;
`;

export const AddProjectButtonModalFormGroup = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 1rem;
  }

  input {
    width: 40rem;
    padding: 0.5rem 1rem;
    transition: all 0.125s ease;
    border: 1px solid ${(props) => props.theme.colors.grey.two};
    border-radius: 5px;
    user-select: none;

    &:focus {
      border-color: ${(props) => props.theme.colors.grey.three};
    }
  }
`;
