import styled from 'styled-components';
import { breakpoints } from '../../../styles/theme/theme';

export const Container = styled.nav`
  height: 7.2rem;
  width: 100vw;
  background-color: ${props => props.theme.colors.primary.one};
  display: flex;
  padding: 12px 32px; 
`

