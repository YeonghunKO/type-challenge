() => {
  type Whitespace = "\n" | " " | "\t";
  type TrimLeft<S> = S extends `${Whitespace}${infer U}` ? TrimLeft<U> : S;
  type Trim<S extends string> = S extends
    | `${Whitespace}${infer T}`
    | `${infer T}${Whitespace}`
    ? Trim<T>
    : S;

  type res = Trim<" hello ">;
};
