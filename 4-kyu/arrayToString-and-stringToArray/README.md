# arrayToString and stringToArray

> "When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process" -- myjinxin2015 said

## Instructions

There is an array `arr`:

`[1,2,3,4,6,6,6,6,8,6,4,2]`

`arr` contains only integers (positive, negative or 0). The length of `arr >= 3`.

### Task 1:

Write a function `arrayToString`. Compress the array to a string:

`"1:4+1,6:4,8:4-2"`

**Explanation:**

- `1:4+1` $\rightarrow$ start number is 1, total 4 numbers, each number increases by 1
- `6:4` $\rightarrow$ number 6 repeats 4 times
- `8:4-2` $\rightarrow$ start number is 8, total 4 numbers, each number decreases by 2

**Note 1:** Only sequences of more than 2 numbers increasing, decreasing or staying the same should be compressed. Otherwise, output the original number. For example:
`arrayToString([2,1,6,12,5]) === "2,1,6,12,5"`

**Note 2:** If there are two sequences adjacent to each other, and the number at the junction can be used by both sequences, the left sequence is given priority for the use of this number, unless it affects the compression of the right sequence. Two examples:

- `arrayToString([1,2,3,4,3,2,1]) === "1:4+1,3:3-1"` (Should not compress to `"1:3+1,4:4-1"`)
- `arrayToString([1,2,3,4,3,2]) === "1:3+1,4:3-1"` (Should not compress to `"1:4+1,3,2"`)

**Note 3:** It should work for negative integers too:
`arrayToString([-1,-2,-3,-4,-3,-2]) === "-1:3-1,-4:3+1"`

### Task 2:

Write a function `stringToArray`. Decompress the string (like the result above) to an array (like the `arr` above). The inputs of the function will always be a valid string.

**Examples of `stringToArray`:**

- `stringToArray("1:4+1,6:4,8:4-2") === [1,2,3,4,6,6,6,6,8,6,4,2]`
- `stringToArray("2,1,6,12,5") === [2,1,6,12,5]`
- `stringToArray("1:4+1,3:3-1") === [1,2,3,4,3,2,1]`
- `stringToArray("1:3+1,4:3-1") === [1,2,3,4,3,2]`
- `stringToArray("-1:3-1,-4:3+1") === [-1,-2,-3,-4,-3,-2]`

## Initial Code

```typescript
export function arrayToString(arr: number[]): string {
	throw new Error("TODO: arrayToString");
}

export function stringToArray(str: string): number[] {
	throw new Error("TODO: stringToArray");
}
```
