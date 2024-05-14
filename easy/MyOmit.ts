(() => {
  type MyOmit<T extends Object, K extends keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
  };

  type MyOmit2<T, K extends keyof T> = { [P in Exclude<keyof T, K>]: T[P] };
})();
