type TupleToObject<Tuple extends readonly string[]> = {
  [key in Tuple[number]]: key;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

const cool: result = {
  "model 3": "model 3",
  "model X": "model X",
  "model Y": "model Y",
  tesla: "tesla",
};
