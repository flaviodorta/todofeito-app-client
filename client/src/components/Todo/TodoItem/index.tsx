import styled from 'styled-components';
import { useToggle } from '../../../hooks/useToggle';
import { Checkbox } from './Checkbox';

interface Props {
  title: string;
  content: string;
  date: Date;
}

export const Container = styled.label`
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: flex-start;
`;

export const TitleAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h6`
  font-size: 1.6rem;
  width: 100%;
`;

export const Content = styled.p`
  font-size: 1.2rem;
  width: 100%;
`;

interface BoxProps {
  padding?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  padding: ${(props) => props.padding ?? 0};
`;

export const TodoItem = (props: Props): JSX.Element => {
  const { title, content, date } = props;

  const [checked, setChecked] = useToggle(false);
  return (
    <Container>
      <Checkbox checked={checked} onChange={setChecked} />
      <Box padding={'1rem'} flexDirection={'column'}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Box>
    </Container>
  );
};
