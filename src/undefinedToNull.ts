type Nullable<T> = {
  [P in keyof T]: T[P] extends undefined ? null : T[P] extends object ? Nullable<T[P]> : T[P];
};

function undefinedToNull<T>(input: T): Nullable<T> {
  if (input === undefined) {
    return null as unknown as Nullable<T>;
  }

  if (Array.isArray(input)) {
    return input.map(item => undefinedToNull(item)) as unknown as Nullable<T>;
  } else if (typeof input === 'object' && input !== null) {
    const result: any = {};
    for (const key in input) {
      const value = (input as any)[key];
      result[key] = undefinedToNull(value);
    }

    return result as Nullable<T>;
  }

  return input as unknown as Nullable<T>;
}

// Exemplos de uso
console.log('A.',undefinedToNull({ a: undefined, b: 3 })); //* { a: null, b: 3 }
console.log('B.',undefinedToNull([undefined, undefined])); //* [null, null]
console.log('C.',undefinedToNull("string")); //* "string"
