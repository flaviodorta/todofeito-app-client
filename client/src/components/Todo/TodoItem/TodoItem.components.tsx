import styled from 'styled-components';

interface Props {
  title: string;
  content: string;
  date: Date;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TitleAndContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h6`
  font-size: 1.2rem;
`;

export const Content = styled.p`
  font-size: 1rem;
`;

export const TodoItem = (props: Props): JSX.Element => {
  const { title, content, date } = props;

  return (
    <Container>
      <input type='radio' />
      <TitleAndContentContainer>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TitleAndContentContainer>
    </Container>
  );
};
