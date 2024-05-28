() => {
  type AppendToObject<
    Obj extends Record<string, any>,
    key extends string,
    value
  > = any;

  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
};
