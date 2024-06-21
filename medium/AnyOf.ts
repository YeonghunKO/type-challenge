() => {
  /**
   * if anyof the element is truthy, it returns true
   */

  type AnyOf<T extends any[]> = T[number] extends
    | 0
    | ""
    | []
    | false
    | Record<string, never>
    | undefined
    | null
    ? false
    : true;

  type Sample1 = AnyOf<[0, "2", false, [], {}, null]>; // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}, null]>; // expected to be false.
};
