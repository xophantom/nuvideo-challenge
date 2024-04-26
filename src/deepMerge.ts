type DeepMerge<T extends object, U extends object> = {
  [P in keyof T | keyof U]: P extends keyof U
    ? P extends keyof T
      ? T[P] extends object
        ? U[P] extends object
          ? DeepMerge<T[P], U[P]>
          : U[P]
        : U[P]
      : U[P]
    : P extends keyof T
    ? T[P]
    : never;
};

function isObject(item: any): item is Record<string, any> {
  return (item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date) && !(item instanceof RegExp));
}

function deepMerge<T extends Record<string, any>, U extends Record<string, any>>(obj1: T, obj2: U): DeepMerge<T, U> {
  const result: any = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      result[key] = obj1[key];
    }
  }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (isObject(result[key]) && isObject(obj2[key])) {
        result[key] = deepMerge(result[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    }
  }

  return result as DeepMerge<T, U>;
}

// Exemplos de uso
console.log(deepMerge({ foo: true }, { bar: false })); //* { foo: true, bar: false }
console.log(deepMerge({ foo: true, nested: { bar: 0 } }, { foo: false })); //* { foo: false, nested: { bar: 0 } }
console.log(deepMerge({ foo: true }, { foo: false })); //* { foo: false }
console.log(deepMerge({ array: [2, 4] }, { array: [1, 3] })); //* { array: [1, 3] }
