(() => {
  type MyCapitalize<W extends string> = W extends `${infer First}${infer Last}`
    ? `${Uppercase<First>}${Last}`
    : W;
  type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'
})();
