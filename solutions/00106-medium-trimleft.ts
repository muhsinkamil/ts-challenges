// Question: https://github.com/type-challenges/type-challenges/tree/main/questions/00106-medium-trimleft

/*
  106 - Trim Left
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `TrimLeft<T>` which takes an exact string type and returns a new string with the whitespace beginning removed.

  For example

  ```ts
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
  ```

  > View on GitHub: https://tsch.js.org/106
*/

/* _____________ Your Code Here _____________ */

type Spaces = " " | "\n" | "\t";

type TrimLeft<S extends string> = S extends `${Spaces}${infer Word}`
  ? TrimLeft<Word>
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type case1 = TrimLeft<"str">;
type case2 = TrimLeft<" str">;
type case3 = TrimLeft<"     str">;
type case4 = TrimLeft<"     str     ">;
type case5 = TrimLeft<"   \n\t foo bar ">;
type case6 = TrimLeft<"">;
type case7 = TrimLeft<" \n\t">;

type cases = [
  Expect<Equal<TrimLeft<"str">, "str">>,
  Expect<Equal<TrimLeft<" str">, "str">>,
  Expect<Equal<TrimLeft<"     str">, "str">>,
  Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
  Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
  Expect<Equal<TrimLeft<"">, "">>,
  Expect<Equal<TrimLeft<" \n\t">, "">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/106/answer
  > View solutions: https://tsch.js.org/106/solutions
  > More Challenges: https://tsch.js.org
*/
