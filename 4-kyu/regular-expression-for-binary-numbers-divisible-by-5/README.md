# Regular expression for binary numbers divisible by 5

## Instructions

Define a regular expression which tests if a given string representing a binary number is divisible by 5.

### Examples:

```csharp
// 5 divisible by 5
Regex.IsMatch("101", DivisibleByFive) == true

// 135 divisible by 5
Regex.IsMatch("10000111", DivisibleByFive) == true

// 666 not divisible by 5
Regex.IsMatch("0000001010011010", DivisibleByFive) == false
```

### Note:

This can be solved by creating a Finite State Machine that evaluates if a string representing a number in binary base is divisible by given number.

- The detailed explanation for dividing by 3 is [here](https://math.stackexchange.com/questions/140283/why-does-this-fsm-accept-binary-numbers-divisible-by-three).
- The FSM diagram for dividing by 5 is [here](https://aswitalski.github.io/img/FSM-binary-divisible-by-five.png).

## Initial Code

```typescript
export const divisibleByFive = /^0|(101(0)*)$/; // partial solution
```
