import { writable } from 'svelte/store';

export const currentPath = writable(window.location.pathname);

export function navigate(path: string, { replace = false } = {}) {
    if (replace) {
        window.history.replaceState({}, '', path);
    } else {
        window.history.pushState({}, '', path);
    }
    currentPath.set(path);
}

window.addEventListener('popstate', () => {
    currentPath.set(window.location.pathname);
});
