import { useAppTheme } from '../../../context/ThemeAppContext';
import { Container } from './Navbar.styles';

export function Navbar() {
  const { toggleMode, mode } = useAppTheme();

  console.log(mode);

  return (
    <Container>
      <button onClick={toggleMode}>Toggle {mode}</button>
    </Container>
  );
}
