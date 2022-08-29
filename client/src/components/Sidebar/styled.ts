import styled from 'styled-components';
import { breakpoints } from '../../styles/theme/theme';
import { motion } from 'framer-motion';

interface ContainerProps {
  shouldShowSidebar: boolean;
  initialWidth: string;
  resizeabledWidth: string;
}

export const Container = styled(motion.aside)<ContainerProps>`
  position: fixed;
  left: 0;
  min-height: 100vh;
  padding: 8rem 0 7rem 5.5rem;
  z-index: 200;
  user-select: none;

  @media screen and (max-width: ${breakpoints.md}) {
  }

  background-color: ${(props) => props.theme.colors.white.two};
  width: ${(props) =>
    props.resizeabledWidth ? props.resizeabledWidth : props.initialWidth};
`;

export const OptionsList = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }

    &:nth-child(4) {
      margin-bottom: 2rem;
    }
  }
`;

export const Resizer = styled.div`
  position: absolute;
  cursor: col-resize;
  height: 100%;
  top: 0;
  right: 0;
  width: 5px;
  z-index: 3;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey.one};
  }
`;
