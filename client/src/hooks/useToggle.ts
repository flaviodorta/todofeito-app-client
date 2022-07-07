import { useCallback, useState } from 'react';

type Response = [boolean, () => void];

export function useToggle(
  initialState: boolean | (() => boolean) = false
): Response {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
}
