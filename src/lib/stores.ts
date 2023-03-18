import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable(browser ? window.localStorage.getItem('theme') ?? 'auto' : 'auto');

theme.subscribe((setTheme) => { if (browser) window.localStorage.setItem('theme', setTheme) });