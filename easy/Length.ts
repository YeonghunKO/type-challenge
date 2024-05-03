type Length<T extends readonly any[]> = T extends { length: infer L }
  ? L
  : never;

type Length2<T extends readonly any[]> = T["length"];
