(() => {
  type If<C extends boolean, T, F> = C extends true ? T : F;

  type Result = If<true, "a", "b">; // b
})();
