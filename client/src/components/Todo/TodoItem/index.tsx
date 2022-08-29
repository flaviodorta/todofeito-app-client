import styled from 'styled-components';
import { useToggle } from '../../../hooks/useToggle';
import { Checkbox } from './Checkbox';

interface Props {
  title: string;
  content: string;
  date: Date;
}

export const Container = styled.label`
  display: flex;
  justify-content: flex-start;
`;

export const TitleAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h6`
  font-size: 1.6rem;
`;

export const Content = styled.p`
  font-size: 1.2rem;
`;

export const Box = styled.div<{
  padding?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}>`
  display: flex;
  justify-content: center;
  align-items: center;

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
