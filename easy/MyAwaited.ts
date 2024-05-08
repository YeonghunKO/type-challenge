(() => {
  type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
    ? U extends PromiseLike<any>
      ? MyAwaited<U>
      : U
    : never;

  type X = Promise<string>;
  type Y = Promise<{ field: number }>;
  type Z = Promise<Promise<string | number>>;
  type Z1 = Promise<Promise<Promise<string | boolean>>>;
  type T = { then: (onfulfilled: (arg: number) => any) => any };

  type Res = MyAwaited<T>;
})();
(() => {})();
