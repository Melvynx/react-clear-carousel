export const callAll = (...fns: Array<Function | undefined>) => (
  ...args: any
) => fns.forEach((fn: Function) => fn && fn(...args))
