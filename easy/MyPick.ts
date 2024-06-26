(() => {
  const obj = {
    a: 1,
    b: 2,
    c: "3",
  };
  type MyPick<T, K extends keyof T> = {
    [Key in keyof T as Key extends K ? Key : never]: T[Key];
  };

  type MyPick2<T, K extends keyof T> = {
    [key in K]: T[key];
  };

  const res: MyPick<typeof obj, "a" | "b"> = {
    a: 1,
    b: 33,
  };
})();
