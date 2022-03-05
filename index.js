export function int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function choice(arr) {
    return arr[int(0, arr.length)]
}