import { useRef } from 'react';
import { Props } from './ColorSelect.types';

import { Container } from './ColorSelect.styled';
import { Dropdown } from './Dropdown/Dropdown.component';
import { Option } from './Option/Option.component';

import { CircleSolidIcon as CircleIcon } from '../../../../Icons/CircleSolid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, globalActions } from '../../../../../redux/store';
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside';

export function ColorSelect(props: Props): JSX.Element {
  const { isSelectOpen } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  // const [colorSelected, setColorSelected] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(
    selectRef,
    () => {
      if (isSelectOpen) {
        dispatch(globalActions.toggleSelect(false));
      }
    },
    'mousedown',
    props.backgroundRef
  );

  const toggleSelect = (e: React.SyntheticEvent) => {
    if (e.target === selectRef.current && isSelectOpen) {
      dispatch(globalActions.toggleSelect(false));
    }
    if (e.target === selectRef.current && !isSelectOpen) {
      dispatch(globalActions.toggleSelect(true));
    }
    if (e.target === dropdownRef.current) {
      dispatch(globalActions.toggleSelect(false));
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
