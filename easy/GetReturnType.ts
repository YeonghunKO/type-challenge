(() => {
  type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

  function ha(params) {
    return "";
  }

  function solution(params: never[]): GetReturnType<typeof ha> {
    return "solution";
  }

  solution([]);
})();
