(() => {
  type MyParameters<T extends (...args: any[]) => any> = T extends (
    ...args: infer Args
  ) => any
    ? Args
    : never;
  const foo = (arg1: string, arg2: number, arg4: "hahah"): void => {};

  type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
})();
