import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 4.8rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary.two};
  display: flex;
  padding: 1.2rem 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.colors.white};
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  li:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const NavLink = styled(Link)`
  width: 100%;
  height: 100%;
  background-color: red;
`;
