import { KeyboardEvent, RefObject, useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// window event based
function useOnKeyPress<K extends keyof WindowEventMap>(
  key: string,
  handler: (event: WindowEventMap[K] | KeyboardEvent) => void,
  element?: undefined,
  options?: boolean | AddEventListenerOptions
): void;

// element event based
function useOnKeyPress<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement
>(
  key: string,
  handler: (event: HTMLElementEventMap[K] | KeyboardEvent) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void;

// document event based
function useOnKeyPress<K extends keyof DocumentEventMap>(
  key: string,
  handler: (event: DocumentEventMap[K] | KeyboardEvent) => void,
  element: RefObject<Document>,
  options?: boolean | AddEventListenerOptions
): void;

function useOnKeyPress<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  T extends HTMLElement | void = void
>(
  key: string,
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event | KeyboardEvent
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
) {
  // create a ref that store handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    //create event listener that calls handler function
    const eventListener: typeof handler = (event) => {
      console.log(key);
      if ((event as KeyboardEvent).key === key) {
        return savedHandler.current(event);
      }
    };

    targetElement.addEventListener('keypress', eventListener, options);

    return () => {
      targetElement.removeEventListener('keypress', eventListener, options);
    };
  });
}

export { useOnKeyPress };
