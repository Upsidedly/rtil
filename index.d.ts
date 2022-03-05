declare module 'rtil'

type integer = number

/**
 * Returns a random integer from the minimum to the maximum.
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {integer} Random number from min to max.
 */
declare function int(min: number, max: number): number
/**
 * Chooses a random element from an array.
 * @param {any[]} arr 
 * @returns {any} The random element of the array.
 */
declare function choice(arr: any[]): any