() => {
  type KebabCase<S> = S extends `${infer S1}${infer S2}`
    ? S2 extends Uncapitalize<S2>
      ? `${Uncapitalize<S1>}${KebabCase<S2>}`
      : `${Uncapitalize<S1>}-${KebabCase<S2>}`
    : S;

  /**
   * FooBarBaz
   * S1 = F / S2 = ooBarBaz => f + KebabCase<ooBarBaz>
   * S1 = o / S2 = oBarBaz => o + KebabCase<oBarBaz>
   * S1 = o / S2 = BarBaz => o- + KebabCase<BarBaz>
   * S1 = B / S2 = arBaz => b + KebabCase<arBaz>
   * .
   * .
   * .
   * S1 = z / S2 = '' => z
   *
   *
   *
   */

  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";

  type DoNothing = KebabCase<"Do-nothing">;
  const doNothing: DoNothing = "do-nothing";
};
