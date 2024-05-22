(() => {
  type AppendArgument<Fn extends Function, arg> = Fn extends (
    ...args: infer Args
  ) => infer R
    ? (...args: [...Args, arg]) => R
    : Fn;

  type Fn = (a: number, b: string) => number;

  type Result = AppendArgument<Fn, boolean>;

  const Fn: Result = (a: number, b: string, x: boolean) => 1;
  // expected be (a: number, b: string, x: boolean) => number
})();
