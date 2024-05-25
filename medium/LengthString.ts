() => {
  type LengthOfString<
    S extends string,
    A extends string[] = []
  > = S extends `${infer First}${infer Second}`
    ? LengthOfString<Second, [First, ...A]>
    : A["length"]; // A라고해보면 어떻게 A에 쌓이는지 보임.

  type res = LengthOfString<"Sound!Euphonium">;
  // type res = LengthOfString<"kumiko">
  // type res = LengthOfString<"reina">
  // type res = LengthOfString<"Sound! Euphonium">
};
