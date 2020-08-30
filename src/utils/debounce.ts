
export function debounce(fn: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...arg: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...arg);
    }, wait);
  };
}
