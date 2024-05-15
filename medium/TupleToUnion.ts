(() => {
  const arr = [123, "456", true];

  // item안에 있는 원소의 타입이 어떤게 될지 모르니 모든 타입을 union으로 통합한것임
  type TupleToUnion<T extends any[]> = T extends Array<infer ITEM>
    ? ITEM // T[number]
    : never;

  type Result = TupleToUnion<typeof arr>;
})();
