() => {
  type Flatten<T> = { [key in keyof T]: T[key] };

  type AppendToObject<
    T extends Record<string, any>,
    U extends string,
    V
  > = Flatten<T & { [key in U]: V }>;

  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
};
