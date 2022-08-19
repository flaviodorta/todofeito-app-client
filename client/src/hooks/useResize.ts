import React, { useLayoutEffect, useState } from 'react';

type Side = {
  direction: 'top' | 'right' | 'bottom' | 'left';
  max: number;
  min: number;
};

type InitialValue = string;

type Return<T> = [
  { [key: string]: React.Dispatch<React.SetStateAction<T | null>> },
  string
];

export function useResize<T extends HTMLElement>(
  resizeableSide?: Side,
  initialValue?: InitialValue
): Return<T> {
  const [element, setElement] = useState<T | null>(null);
  const [top, setTop] = useState<T | null>(null);
  const [right, setRight] = useState<T | null>(null);
  const [bottom, setBottom] = useState<T | null>(null);
  const [left, setLeft] = useState<T | null>(null);

  let widthRem = '';
  let heightRem = '';

  const [widthRemFinal, setWidthRemFinal] = useState<string>(initialValue || '');
  const [heightRemFinal, setHeightRemFinal] = useState<string>(initialValue || '');

  const direction = resizeableSide?.direction;
  let max = resizeableSide?.max;
  let min = resizeableSide?.min;

  useLayoutEffect(() => {
    if (element && (top || right || bottom || left)) {
      const resizeableElement = element;
      const styles = window.getComputedStyle(resizeableElement);
      let width = parseInt(styles.width, 10);
      let height = parseInt(styles.height, 10);
      let x = 0;
      let y = 0;

      // Top resize
      const onMouseMoveTopResize = (event: MouseEvent) => {
        const dy = event.clientY - y;
        y = event.clientY;
        height = height - dy;
        heightRem = `${height / 10}rem`;

        // check to set width when has or not limit
        if (!resizeableSide) {
          resizeableElement.style.height = heightRem;
        } else if (resizeableSide && direction) {
          if (max && min) {
            if (height > min && height < max) {
              resizeableElement.style.height = heightRem;
            }
          } else if (max) {
            if (height < max) {
              resizeableElement.style.height = heightRem;
            }
          } else if (min) {
            if (height > min) {
              resizeableElement.style.height = heightRem;
            }
          }
        }
      };

      const onMouseUpTopResize = () => {
        document.removeEventListener('mousemove', onMouseMoveTopResize);
        setHeightRemFinal(heightRem);
      };

      const onMouseDownTopResize = (event: MouseEvent) => {
        y = event.clientY;

        resizeableElement.style.left = styles.left;
        resizeableElement.style.right = 'auto';

        document.addEventListener('mousemove', onMouseMoveTopResize);
        document.addEventListener('mouseup', onMouseUpTopResize);
      };

      // Right resize
      const onMouseMoveRightResize = (event: MouseEvent) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width + dx;
        widthRem = `${width / 10}rem`;

        // check to set width when has or not limit
        if (!resizeableSide) {
          resizeableElement.style.width = widthRem;
        } else if (resizeableSide && direction) {
          if (max && min) {
            if (width > min && width < max) {
              resizeableElement.style.width = widthRem;
            }
          } else if (max) {
            if (width < max) {
              resizeableElement.style.width = widthRem;
            }
          } else if (min) {
            if (width > min) {
              resizeableElement.style.width = widthRem;
            }
          }
        }
      };

      const onMouseUpRightResize = () => {
        document.removeEventListener('mousemove', onMouseMoveRightResize);
        setWidthRemFinal(widthRem);
      };

      const onMouseDownRightResize = (event: MouseEvent) => {
        x = event.clientX;

        resizeableElement.style.left = styles.left;
        resizeableElement.style.right = 'auto';

        document.addEventListener('mousemove', onMouseMoveRightResize);
        document.addEventListener('mouseup', onMouseUpRightResize);
      };

      // Bottom resize
      const onMouseMoveBottomResize = (event: MouseEvent) => {
        const dy = event.clientY - y;
        y = event.clientY;
        height = height + dy;
        // heightRem = `${height / 10}rem`;

        // check to set width when has or not limit
        if (!resizeableSide) {
          resizeableElement.style.height = heightRem;
        } else if (resizeableSide && direction) {
          if (max && min) {
            if (height > min && height < max) {
              resizeableElement.style.height = heightRem;
            }
          } else if (max) {
            if (height < max) {
              resizeableElement.style.height = heightRem;
            }
          } else if (min) {
            if (height > min) {
              resizeableElement.style.height = heightRem;
            }
          }
        }
      };

      const onMouseUpBottomResize = () => {
        document.removeEventListener('mousemove', onMouseMoveBottomResize);
        setHeightRemFinal(heightRem);
      };

      const onMouseDownBottomResize = (event: MouseEvent) => {
        y = event.clientY;

        resizeableElement.style.left = styles.left;
        resizeableElement.style.right = 'auto';

        document.addEventListener('mousemove', onMouseMoveBottomResize);
        document.addEventListener('mouseup', onMouseUpBottomResize);
      };

      // Left resize
      const onMouseMoveLeftResize = (event: MouseEvent) => {
        const dx = event.clientX - x;
        x = event.clientX;
        width = width - dx;
        widthRem = `${width / 10}rem`;

        // check to set width when has or not limit
        if (!resizeableSide) {
          resizeableElement.style.width = widthRem;
        } else if (resizeableSide && direction) {
          if (max && min) {
            if (width > min && width < max) {
              resizeableElement.style.width = widthRem;
            }
          } else if (max) {
            if (width < max) {
              resizeableElement.style.width = widthRem;
            }
          } else if (min) {
            if (width > min) {
              resizeableElement.style.width = widthRem;
            }
          }
        }
      };

      const onMouseUpLeftResize = () => {
        document.removeEventListener('mousemove', onMouseMoveLeftResize);
        setWidthRemFinal(widthRem);
      };

      const onMouseDownLeftResize = (event: MouseEvent) => {
        x = event.clientX;

        resizeableElement.style.left = styles.left;
        resizeableElement.style.right = 'auto';

        document.addEventListener('mousemove', onMouseMoveLeftResize);
        document.addEventListener('mouseup', onMouseUpLeftResize);
      };

      // add event listener to mouse down
      const resizerTop = top;
      resizerTop?.addEventListener('mousedown', onMouseDownTopResize);

      const resizerRight = right;
      resizerRight?.addEventListener('mousedown', onMouseDownRightResize);

      const resizerBottom = bottom;
      resizerBottom?.addEventListener('mousedown', onMouseDownBottomResize);

      const resizerLeft = left;
      resizerLeft?.addEventListener('mousedown', onMouseDownLeftResize);

      return () => {
        resizerTop?.removeEventListener('mousedown', onMouseDownTopResize);
        resizerRight?.removeEventListener('mousedown', onMouseDownRightResize);
        resizerBottom?.removeEventListener('mousedown', onMouseDownBottomResize);
        resizerLeft?.removeEventListener('mousedown', onMouseDownLeftResize);
      };
    }
  }, [element, top, right, bottom, left]);

  const setRefs = {
    element: setElement,
    top: setTop,
    right: setRight,
    bottom: setBottom,
    left: setLeft,
  };

  const sizeRemFinal = widthRemFinal ? widthRemFinal : heightRemFinal;

  return [setRefs, sizeRemFinal];
}
