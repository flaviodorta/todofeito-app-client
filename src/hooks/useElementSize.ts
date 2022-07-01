import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { useEventListener } from './useEventListener';

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

export function useElementSize<T extends HTMLElement>(): Response<T> {
  const [size, setSize] = useState<DOMRect>(DOMRectNull);
  const [ref, setRef] = useState<T | null>(null);

  const { x, y, width, height, top, right, bottom, left } = size;

  const handleSize = useCallback(() => {
    if (ref) setSize(ref.getBoundingClientRect());
  }, [ref]);

  useLayoutEffect(() => {
    handleSize();
  }, [ref]);

  useEventListener('resize', handleSize);

  return [setRef, size];
}
