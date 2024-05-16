type Chainable<R = {}> = {
  option<K extends keyof any, V>(
    key: K extends keyof R ? never : K,
    value: V
  ): Chainable<Omit<R, K> & Record<K, V>>; // Omit없으면 같은 key가 pass되었을 경우 never가 뜸
  get(): R;
};

declare const a: Chainable;
