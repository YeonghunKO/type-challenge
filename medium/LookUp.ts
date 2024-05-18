(() => {
  /**
type LookUp<T extends { type: string }, U extends string> = T['type'] extends U ? T : never.
but it does't work, I'll appreciate it if someone can help me with it.
Because T['type'] is not a naked type and thus doesn't get distributed. And "dog" | "cat" doesn't extend neither "dog" nor "cat"
*/
  type TypeTarget = {
    type: string;
    breeds: string;
    color?: string;
  };

  type LookUp2<
    T extends { type: string },
    U extends string
  > = T["type"] extends U ? T : never;

  type LookUp<
    Animal extends TypeTarget,
    Type extends Animal["type"]
  > = Animal extends { type: Type } ? Animal : never;

  interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
  }

  interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
  }

  type MyDogType = LookUp2<Cat | Dog, "dog">; // expected to be `Dog`
})();
