import React from 'react';
import { useEventListener } from './useEventListener';

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
  exceptionRef?: React.RefObject<T>
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;
    const exceptionEl = exceptionRef?.current;

    if (
      !el ||
      el.contains(event.target as Node) ||
      (exceptionEl && event.target === exceptionEl)
    ) {
      return;
    }

    handler();
  });
}
