import { RefObject, useState } from 'react';

type Response = [boolean, () => void, () => void];

export function useFocus<T extends HTMLElement>(
  elementRef: RefObject<T>
): Response {
  const [focus, setFocus] = useState<boolean>(false);

  const handleOnFocus = () => setFocus(true);
  const handleOnBlur = () => setFocus(false);

  return [focus, handleOnFocus, handleOnBlur];
}
