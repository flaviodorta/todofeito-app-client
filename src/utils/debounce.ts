export function debounce<T>(cb: () => void, wait: number, immediate?: boolean) {
  let timeout: string | ReturnType<typeof setTimeout> = 'null';

  return function (this: T, ...args: []) {
    const context = this;

    console.log(context);

    const later = function () {
      if (!immediate) cb.apply(context, args);
    };

    const callNow = immediate && timeout === 'null';

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) cb.apply(context, args);
  };
}
