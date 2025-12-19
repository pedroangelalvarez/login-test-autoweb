import { mount } from 'svelte';
import App from './components/App.svelte';
import { authStore } from './stores';

const app = mount(App, {
  target: document.getElementById('app')!
});

// Redirección inicial si ya está logueado (persistencia simple con localStorage opcional)
if (localStorage.getItem('auth')) {
  authStore.set(JSON.parse(localStorage.getItem('auth')!));
}

export default app;