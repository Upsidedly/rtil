/**
 * Returns a random number from the minimum to the maximum.
 * @param {number} min Minimum value
 * @param {number} max Maximum value
 * @returns {number} Random number from min to max.
 */
export function int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Chooses a random element from an array.
 * @param {any[]} arr 
 * @returns {any} The random element of the array.
 */
export function choice(arr) {
    return arr[int(0, arr.length)]
}