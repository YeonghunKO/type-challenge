() => {
  /**
   * if anyof the element is truthy, it returns true
   */
  type AnyOf<T> = any;
  type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
};
