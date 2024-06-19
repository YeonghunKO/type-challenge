() => {
  type Diff<T, U> = {
    [key in keyof (T & U) as key extends keyof (T | U) ? never : key]: (T &
      U)[key];
  };

  type Foo = {
    name: string;
    age: string;
  };
  type Bar = {
    name: string;
    age: string;
    gender: number;
  };
  type Coo = {
    name: string;
    gender: number;
  };

  type res = Diff<Foo, Bar>; // {gender:number}
  //   const a:res = {

  //   }
};
