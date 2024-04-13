type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// todo.title = "Hello"; // Error: cannot reassign a readonly property
// todo.description = "barFoo"; // Error: cannot reassign a readonly property

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

function ha() {
  return "";
}

function solution(params: never[]): GetReturnType<typeof ha> {
  return "solution";
}

solution([]);
