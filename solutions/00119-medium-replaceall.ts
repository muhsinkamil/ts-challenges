// Question: https://github.com/type-challenges/type-challenges/tree/main/questions/00119-medium-replaceall

/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #medium #template-literal

  ### Question

  Implement `ReplaceAll<S, From, To>` which replace the all the substring `From` with `To` in the given string `S`

  For example

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > View on GitHub: https://tsch.js.org/119
*/

/* _____________ Your Code Here _____________ */

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer First}${From}${infer Last}`
  ? `${First}${To}${ReplaceAll<Last, From, To>}`
  : S;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type case1 = ReplaceAll<"foobar", "bar", "foo">;
type case2 = ReplaceAll<"foobar", "bag", "foo">;
type case3 = ReplaceAll<"t y p e s", " ", "">;
type case4 = ReplaceAll<"foobarbar", "", "foo">;
type case5 = ReplaceAll<"barfoo", "bar", "foo">;
type case6 = ReplaceAll<"foobarfoobar", "ob", "b">;
type case7 = ReplaceAll<"foboorfoboar", "bo", "b">;
type case8 = ReplaceAll<"", "", "">;

type cases = [
  Expect<Equal<ReplaceAll<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobar", "bag", "foo">, "foobar">>,
  Expect<Equal<ReplaceAll<"foobarbar", "bar", "foo">, "foofoofoo">>,
  Expect<Equal<ReplaceAll<"t y p e s", " ", "">, "types">>,
  Expect<Equal<ReplaceAll<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<ReplaceAll<"barfoo", "bar", "foo">, "foofoo">>,
  Expect<Equal<ReplaceAll<"foobarfoobar", "ob", "b">, "fobarfobar">>,
  Expect<Equal<ReplaceAll<"foboorfoboar", "bo", "b">, "foborfobar">>,
  Expect<Equal<ReplaceAll<"", "", "">, "">>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/119/answer
  > View solutions: https://tsch.js.org/119/solutions
  > More Challenges: https://tsch.js.org
*/
