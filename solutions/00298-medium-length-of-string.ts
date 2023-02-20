// Question: https://github.com/type-challenges/type-challenges/tree/main/questions/00298-medium-length-of-string

/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

type LengthOfString<
  S extends string,
  Acc extends string[] = []
> = S extends `${infer Head}${infer Tail}`
  ? LengthOfString<Tail, [...Acc, Head]>
  : Acc["length"];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type case1 = LengthOfString<"">;
type case2 = LengthOfString<"kumiko">;

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
