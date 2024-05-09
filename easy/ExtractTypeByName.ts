(() => {
  interface Person {
    name: string;
    age: number;
    address: unknown;
    favorite: string;
    friends?: Person[];
  }

  interface Gongname extends Person {
    name: "공남이";
    address: "암흑";
    age: 5;
    favorite: "큰형";
  }

  interface Zzakdole extends Person {
    name: "짝돌이";
    address: "암흑";
    age: 5;
    favorite: "큰형";
    friends?: Person[];
  }

  type ExtractTypebyName<
    Obj extends Person,
    Name extends Obj["name"] = string
  > = Obj extends { name: Name } ? Obj : never;

  type Friends = Gongname | Zzakdole;

  type ChosenOne = ExtractTypebyName<Friends, "짝돌이">;

  let chosen: ChosenOne = {
    address: "암흑",
    age: 5,
    favorite: "큰형",
    name: "짝돌이",
  };
})();
