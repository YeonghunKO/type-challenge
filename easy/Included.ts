(() => {
  type Includes<T extends readonly any[], U> = {
    [P in T[number]]: true;
  }[U] extends true
    ? true
    : false;

  type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
    T
  >() => T extends Y ? 1 : 2
    ? true
    : false;

  type Includes2<Value extends any[], Item> = IsEqual<
    Value[0],
    Item
  > extends true
    ? true
    : Value extends [Value[0], ...infer rest]
    ? Includes<rest, Item>
    : false;

  //   res
  type EqualWithFuncType<X> = (<T>() => T extends X ? 1 : 2) extends <
    T
  >() => T extends X ? 1 : 2
    ? "a"
    : "b";

  //   type some2 = ;

  //   const val: EqualWithFuncType<"f"> = <T>() => {
  //     return 'a';
  //   };

  // type some3 = some2

  // type res = Includes2<[1, 2, 3, 5, 6, 7, false], false>;
})();
