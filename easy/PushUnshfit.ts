(() => {
  type Push<T extends readonly unknown[], U> = [...T, U];
  type Result = Push<[1, 2], "3">; // [1, 2, '3']

  type Unshift<T extends readonly unknown[], U> = [U, ...T];
})();
