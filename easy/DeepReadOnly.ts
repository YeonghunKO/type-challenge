(() => {
  type X = {
    a: () => 22;
    b: string;
    c: {
      d: boolean;
      e: {
        g: {
          h: {
            i: true;
            j: "string";
          };
          k: "hello";
        };
        l: [
          "hi",
          {
            m: ["hey"];
          }
        ];
      };
    };
  };

  type DeepReadonly<X> = keyof X extends never
    ? X
    : { readonly [Key in keyof X]: DeepReadonly<X[Key]> };

  type Todo = DeepReadonly<X>; // should be same as `Expected`
})();
