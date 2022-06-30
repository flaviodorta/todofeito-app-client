import { useCallback, useLayoutEffect, useState } from 'react';

export function useDimensions<T extends HTMLElement>(): [
  setRef: (node: T | null) => void,
  dimensions: DOMRect | {}
] {
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
