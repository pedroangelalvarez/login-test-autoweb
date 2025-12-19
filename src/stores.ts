import { writable } from 'svelte/store';

export const authStore = writable({
  loggedIn: false,
  documento: '',
  tipoDocumento: 'dni' as 'dni' | 'ce' | 'pass'
});