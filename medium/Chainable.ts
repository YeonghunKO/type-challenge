(() => {
  // index.d.ts를 동시에 켜면 됨.
  const result1 = a
    .option("foo", 123)
    .option("bar", { value: "Hello World" })
    .option("name", "type-challenges")
    .get();

  type Expected1 = {
    foo: number;
    bar: {
      value: string;
    };
    name: string;
  };
})();
