(() => {
  const arr = [123, "456", true];
  type TupleToUnion<T extends any[]> = T extends Array<infer ITEM>
    ? ITEM // T[number]
    : never;

  type Result = TupleToUnion<typeof arr>;
})();
