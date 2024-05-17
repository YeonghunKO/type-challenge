type Chainable<R = {}> = {
  option<K extends keyof any, V>(
    key: K extends keyof R ? never : K,
    value: V
  ): Chainable<Omit<R, K> & Record<K, V>>; // Omit없으면 같은 key가 pass되었을 경우 never가 뜸
  get(): R;
};

declare function PromiseAll<T extends any[]>(
  values: T
): {
  [Key in keyof T]: Awaited<T[Key]>;
};

declare const a: Chainable;
