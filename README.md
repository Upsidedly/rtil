# rtil
Two simple functions that make my programming easier

## Functions

### int
Returns a random integer from `min` to  `max`
### choice
Chooses a random element of the array provided.

## Example

```js
import { int, choice } from 'rtil'

// Returns random number from min to max

console.log(int(1, 10)) //=> 6
console.log(int(1, 10)) //=> 3
console.log(int(1, 10)) //=> 5

const stuff = ['cow', 'cat', 'duck', 'fish', 'dog']

// Returns random element of array

console.log(choice(stuff)) //=> 'duck'
console.log(choice(stuff)) //=> 'cow'
console.log(choice(stuff)) //=> 'dog'

```