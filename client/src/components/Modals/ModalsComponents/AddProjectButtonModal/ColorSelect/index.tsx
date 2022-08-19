import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions, useAppSelector } from '../../../../../redux/store';
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside';

import { Container } from './styled';
import { Dropdown } from './Dropdown';
import { Option } from './Option';

import { CircleSolidIcon as CircleIcon } from '../../../../Icons';

interface Props {
  setSelectColorValue: (e: any) => void;
  onClick?: (e: React.MouseEvent) => void;
  backgroundRef: React.RefObject<HTMLDivElement>;
}

export function ColorSelect(props: Props): JSX.Element {
  const { isSelectOpen } = useAppSelector((state) => state.ui);
  const dispatch = useDispatch();

  // const [colorSelected, setColorSelected] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(
    selectRef,
    () => {
      if (isSelectOpen) {
        dispatch(uiActions.toggleSelect(false));
      }
    },
    'mousedown',
    props.backgroundRef
  );

  const toggleSelect = (e: React.SyntheticEvent) => {
    if (e.target === selectRef.current && isSelectOpen) {
      dispatch(uiActions.toggleSelect(false));
    }
    if (e.target === selectRef.current && !isSelectOpen) {
      dispatch(uiActions.toggleSelect(true));
    }
    if (e.target === dropdownRef.current) {
      dispatch(uiActions.toggleSelect(false));
    }
  };

  const redRef = useRef(null);

  return (
    <Container
      ref={selectRef}
      onClick={(e) => toggleSelect(e)}
      isFocus={isSelectOpen}
    >
      {isSelectOpen && (
        <Dropdown ref={dropdownRef}>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
          <Option ref={redRef} icon={<CircleIcon fill={'red'} />}>
            Red
          </Option>
        </Dropdown>
      )}
    </Container>
  );
}
