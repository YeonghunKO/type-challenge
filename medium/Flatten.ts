(() => {
  type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
    ? First extends unknown[]
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>]
    : [];

  type Flatten2<T> = T extends []
    ? []
    : T extends [infer First, ...infer Rest]
    ? [...Flatten2<First>, ...Flatten2<Rest>]
    : [T];

  type res = Flatten<[1, [2, [3, 4, [5, 6]]]]>;
})();
