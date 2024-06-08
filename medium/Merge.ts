(() => {
  type Merge<T, U> = any;
  type foo = {
    name: string;
    age: string;
  };
  type coo = {
    age: number;
    sex: string;
  };

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
})();
