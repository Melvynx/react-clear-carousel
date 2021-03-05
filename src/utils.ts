export const callAll = (...fns: Array<Function | undefined>) => (
  ...args: any
) => fns.forEach((fn: any) => fn && fn(...args))
