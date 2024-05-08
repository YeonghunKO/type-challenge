// your answers
//answer1
type First<T extends any[]> = T extends [] ? never : T[0];

//answer2
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

//answer3
type First3<T extends any[]> = T extends [infer A, ...infer rest] ? A : never;
(() => {})();
