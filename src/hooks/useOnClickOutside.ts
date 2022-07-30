// import React from 'react';
// import { useEventListener } from './useEventListener';

// export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
//   ref: React.RefObject<T>,
//   handler: (event: React.MouseEvent<Element, MouseEvent>) => void | (() => void),
//   mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
// ): void {
//   useEventListener(mouseEvent, (event) => {
//     const el = ref?.current;

//     if (!el || el.contains(event.target as Node)) {
//       return;
//     }

//     handler(event);
//   });
// }

import React, { RefObject, useEffect } from 'react';

type Handler = () => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler
): void {
  useEffect(() => {
    const handleClick = () => {
      if (ref.current && !ref.current.contains(e.target as Element)) {
        handler();
      }
    };

    document.addEventListener('click', handleClick, true);
  }, [ref]);
}

export default useOnClickOutside;
