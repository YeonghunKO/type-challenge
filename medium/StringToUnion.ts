(() => {
  type StringToUnion<T extends string> =
    T extends `${infer Letter}${infer Rest}`
      ? Letter | StringToUnion<Rest>
      : never;
  type Test = "123";
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
})();
