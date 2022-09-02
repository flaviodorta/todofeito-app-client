import './styles.css';
import { motion, Variants } from 'framer-motion';
import { useToggle } from '../../../../hooks/useToggle';
import { useEffect } from 'react';

const checkboxVariants: Variants = {
  clicked: {
    scale: [1, 1.05, 1.1, 1.15, 1.2, 1.15, 1.1, 1.05, 1, 0.9, 0.85, 0.8],
    opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.6, 0.4, 0],
    transition: {
      duration: 0.45,
      type: 'spring',
      stiffness: 350,
    },
  },
};

interface Props {
  isChecked: () => void;
}

export function Checkbox(props: Props): JSX.Element {
  const [clicked, setClicked] = useToggle(false);

  useEffect(() => {
    if (clicked) {
      setClicked();
    }
  });

  return (
    <motion.label
      className='custom-checkbox'
      tab-index='0'
      aria-label='checkbox'
      variants={checkboxVariants}
      initial={false}
      animate={clicked ? 'clicked' : false}
      onClick={setClicked}
    >
      <input type='checkbox' onChange={props.isChecked} />
      <span className='checkmark' aria-hidden='true' />
    </motion.label>
  );
}
