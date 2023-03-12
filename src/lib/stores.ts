import { writable } from 'svelte/store'

const theme = writable('auto')

export { theme }