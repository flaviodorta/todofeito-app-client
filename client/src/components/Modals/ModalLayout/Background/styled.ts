import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
  hasBackground?: boolean;
}

export const Container = styled(motion.div)<ContainerProps>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.hasBackground ? 'rgba(0, 0, 0, 0.55)' : 'transparent'};
  z-index: 99;
`;
