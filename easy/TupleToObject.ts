// const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

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

type Idx = IdxOfTuple<["model 3", "model X", "model Y"]>;
type Idx2<Arr extends readonly any[]> = Arr["length"] | "hahah";

const arr: Idx2<["s"]> = "hahah";

type TupleToNarrowedObject<
  Tuple extends readonly string[],
  Idx extends IdxOfTuple<Tuple>
> = {
  [key in Tuple[Idx]]: key;
};

/**
 * IdxOfTuple<[0,0,0]>
  = 2 | IdxOfTuple<[0,0]>
  = 2 | 1 | IdxOfTuple<[0]>
  = 2 | 1 | 0 | IdxOfTuple<[]> --> never가 리턴됨

  ==> 최종 리턴 값 = 2 | 1 | 0

 * 
 */
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
type result = TupleToNarrowedObject<typeof tuple, 14>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

type result2 = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const cool: result = {
  //   "model 3": "model 3",
  "model X": "model X",
  //   "model Y": "model Y",
  tesla: "tesla",
};
