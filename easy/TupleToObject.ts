type IdxOfTuple<Tuple extends readonly string[]> = Tuple extends readonly [
  unknown,
  ...infer Tail
]
  ? Tail extends string[]
    ? Tail["length"] | IdxOfTuple<Tail>
    : never
  : never;

type TupleToObject<Tuple extends readonly string[]> = {
  [key in Tuple[number]]: key;
};

type TupleToNarrowedObject<
  Tuple extends readonly string[],
  Idx extends IdxOfTuple<Tuple>
> = {
  [key in Tuple[Idx]]: key;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToNarrowedObject<typeof tuple, 0 | 2>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
type result2 = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const cool: result = {
  //   "model 3": "model 3",
  "model X": "model X",
  //   "model Y": "model Y",
  tesla: "tesla",
};
