// Question: https://github.com/type-challenges/type-challenges/tree/main/questions/00043-easy-exclude

/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in Exclude<T, U>

  > Exclude from T those types that are assignable to U

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

// 💡 Instead of mapping, Union types kindof spreads to check with U and returns never / value
type MyExclude<T, U> = T extends U ? never : T;

type case1 = MyExclude<"a" | "b" | "c", "a">;
type case2 = MyExclude<"a" | "b" | "c", "a" | "b">;
type case3 = MyExclude<string | number | (() => void), Function>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<MyExclude<string | number | (() => void), Function>, string | number>
  >
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
