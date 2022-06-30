import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { useEventListener } from './useEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

type Response<T> = [Dispatch<SetStateAction<T | null>>, DOMRect];

const DOMRectNull = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as DOMRect;

export function useDimensions<T extends HTMLElement>(): Response<T> {
  const [dimensions, setDimensions] = useState<DOMRect>(DOMRectNull);
  const [ref, setRef] = useState<T | null>(null);

  const { x, y, width, height, top, right, bottom, left } = dimensions;

  const handleDimensions = useCallback(() => {
    if (ref) setDimensions(ref.getBoundingClientRect());
  }, [ref]);

  useLayoutEffect(() => {
    handleDimensions();
  }, [x, y, width, height, top, right, bottom, left]);

  useEventListener('resize', handleDimensions);

  return [setRef, dimensions];
}
