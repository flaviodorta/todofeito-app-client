import React, { useRef } from 'react';
import { Props } from './ColorSelect.types';

import { Container } from './ColorSelect.styled';
import { Dropdown } from './Dropdown/Dropdown.component';
import { Option } from './Option/Option.component';

import { CircleSolidIcon as CircleIcon } from '../../../../shared/icons/CircleSolid';
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, todosActions } from '../../../../../redux/store';

export function ColorSelect<T>(props: Props<T>): JSX.Element {
  const { isSelectOpen } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  // const [colorSelected, setColorSelected] = useState('');

  const toggleSelect = () => {
    if (isSelectOpen) {
      dispatch(todosActions.toggleSelect(false));
    } else {
      dispatch(todosActions.toggleSelect(true));
    }
  };

  const selectRef = useRef(null);
  const closeSelect = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    if (isSelectOpen) {
      dispatch(todosActions.toggleSelect(false));
    }
  };

  useOnClickOutside(selectRef, (e: React.MouseEvent) => closeSelect(e), 'mousedown');

  const redRef = useRef(null);

  return (
    <Container ref={selectRef} onClick={toggleSelect} isFocus={isSelectOpen}>
      {isSelectOpen && (
        <Dropdown>
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
