<script lang="ts">
    import Login from "./Login.svelte";
    import Dashboard from "./Dashboard.svelte";
    import { authStore } from "../stores";
    import { currentPath, navigate } from "../router";
    import { onMount } from "svelte";

    // Redirect logic
    $: if ($authStore.loggedIn) {
        if ($currentPath === "/" || $currentPath === "/login") {
            navigate("/dashboard", { replace: true });
        }
    } else {
        if ($currentPath !== "/") {
            navigate("/", { replace: true });
        }
    }
</script>

{#if $authStore.loggedIn}
    {#if $currentPath === "/dashboard"}
        <Dashboard />
    {/if}
{:else if $currentPath === "/"}
    <Login />
{/if}
