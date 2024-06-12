(() => {
  type Merge<T extends object, U> = {
    [Key in keyof T | keyof U]: Key extends keyof U
      ? U[Key]
      : Key extends keyof T
      ? T[Key]
      : never;
  };

  type Merge2<T extends object, U> = Omit<T, keyof U> & U;

  type foo = {
    name: string;
    age: string;
  };

  type coo = {
    age: number;
    sex: string;
  };

  type Result = Merge2<foo, coo>; // expected to be {name: string, age: number, sex: string}
})();
