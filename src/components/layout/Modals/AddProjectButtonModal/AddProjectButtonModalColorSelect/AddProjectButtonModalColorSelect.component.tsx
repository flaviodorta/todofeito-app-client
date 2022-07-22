import React, { useRef, useState } from 'react';
import { AddProjectButtonModalColorSelectProps } from './AddProjectButtonModalColorSelect.types';

import { AddProjectButtonModalColorSelectContainer } from './AddProjectButtonModalColorSelect.styled';
import { AddProjectButtonModalColorSelectDropdown } from './AddProjectButtonModalColorSelectDropdown/AddProjectButtonModalColorSelectDropdown.component';
import { AddProjectButtonModalColorSelectOption } from './AddProjectButtonModalColorSelectOption/AddProjectButtonModalColorSelectOption.component';

import { CircleSolidIcon as CircleIcon } from '../../../../shared/icons/CircleSolid';
import { useOnClickOutside } from '../../../../../hooks/useOnClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, todosActions } from '../../../../../store/store';
import { useToggle } from '../../../../../hooks/useToggle';

export function AddProjectButtonModalColorSelect(
  props: AddProjectButtonModalColorSelectProps
): JSX.Element {
  const { select } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const selectRef = useRef(null);
  const [colorSelected, setColorSelected] = useState('');

  React.useEffect(() => {
    console.log(select);
  });

  const closeSelect = () => {
    dispatch(todosActions.toggleSelect(false));
  };

  const openSelect = () => {
    dispatch(todosActions.toggleSelect(true));
  };

  useOnClickOutside(selectRef, closeSelect);

  const redRef = useRef(null);

  return (
    <AddProjectButtonModalColorSelectContainer
      ref={selectRef}
      onClick={openSelect}
      isFocus={select}
    >
      {select && (
        <AddProjectButtonModalColorSelectDropdown>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
          <AddProjectButtonModalColorSelectOption
            ref={redRef}
            icon={<CircleIcon fill={'red'} />}
          >
            Red
          </AddProjectButtonModalColorSelectOption>
        </AddProjectButtonModalColorSelectDropdown>
      )}
    </AddProjectButtonModalColorSelectContainer>
  );
}

/*
<AddProjectButtonModalColorSelectContainer
      onChange={(e) => setSelectColorValue(e.target.value)}
    >
      <option value='red'>Red</option>
      <option value='orange'>
        <CircleSolidIcon />
        Orange
      </option>
      <option value='yellow'>
        <CircleSolidIcon />
        Yellow
      </option>
      <option value='olive-green'>
        <div>
          <CircleSolidIcon />
          Olive Green
        </div>
      </option>
      <option value='lime-green'>
        <CircleSolidIcon />
        Lime Green
      </option>
      <option value='green'>
        <CircleSolidIcon />
        Green
      </option>
      <option value='mint-green'>
        <CircleSolidIcon />
        Mint Green
      </option>
      <option value='teal'>
        <CircleSolidIcon />
        Teal
      </option>
      <option value='sky-blue'>
        <CircleSolidIcon />
        Sky Blue
      </option>
      <option value='light-blue'>
        <CircleSolidIcon />
        Light Blue
      </option>
      <option value='blue'>
        <CircleSolidIcon />
        Blue
      </option>
      <option value='grape'>
        <CircleSolidIcon />
        Grape
      </option>
      <option value='violet'>
        <CircleSolidIcon />
        Violet
      </option>
      <option value='lavender'>
        <CircleSolidIcon />
        Lavender
      </option>
      <option value='magenta'>
        <CircleSolidIcon />
        Magenta
      </option>
      <option value='salmon'>
        <CircleSolidIcon />
        Salmon
      </option>
      <option value='charcoal'>
        <CircleSolidIcon />
        Charcoal
      </option>
      <option value='Grey'>
        <CircleSolidIcon />
        Taupe
      </option>
    </AddProjectButtonModalColorSelectContainer>
*/
