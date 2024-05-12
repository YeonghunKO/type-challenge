(() => {
  type MyReadonly2<T, K extends keyof T = keyof T> = {
    [p in keyof T as p extends K ? never : p]: T[p];
  } & {
    readonly [p in K]: T[p];
  };
})();
