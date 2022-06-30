import { Dispatch, SetStateAction, useCallback, useLayoutEffect, useState } from 'react';

type Response<T> = [Dispatch<SetStateAction<T | null>>, DOMRect | {}];

export function useDimensions<T extends HTMLElement>(): Response<T> {
  const [dimensions, setDimensions] = useState<DOMRect | {}>({});
  const [ref, setRef] = useState<T | null>(null);

  const handleDimensions = useCallback(() => {
    if (ref) setDimensions(ref.getBoundingClientRect());
  }, [ref]);

  useLayoutEffect(() => {
    handleDimensions();
  }, [ref]);

  return [setRef, dimensions];
}
