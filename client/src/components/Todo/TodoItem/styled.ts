import styled from 'styled-components';
import { GripVerticalSolidIcon } from '../../Icons';

export const Wrapper = styled.div`
  padding: 0 30px;
`;

export const Container = styled.div`
  width: 100%;
  height: 90px;
  gap: 10px;
  display: flex;
  align-items: flex-start;
  padding: 20px 20px 0 0;
  margin: 0 auto;
  position: relative;
  border-bottom: solid 1px ${(props) => props.theme.colors.grey.one};
`;

export const IconContainer = styled.div`
  display: flex;
  width: 25px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  position: absolute;
  left: -35px;
  transform: translateY(-3px);
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.grey.one};
  }
`;

export const GripIcon = styled(GripVerticalSolidIcon)`
  fill: ${(props) => props.theme.colors.grey.three};
  width: 14px;
  height: 16px;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FlexRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 16px;
`;

export const Description = styled.div`
  font-size: 12px;
  color: #555;
`;

export const Date = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.colors.red};
`;

export const Project = styled.div`
  font-size: 12px;
`;

export const Options = styled.div`
  display: flex;
  gap: 2px;
  position: absolute;
  right: 0;
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
    width: 14px;
    height: 14px;
    fill: ${(props) => props.theme.colors.grey.three};
  }

  &:hover {
    background-color: #ddd;
  }
`;
