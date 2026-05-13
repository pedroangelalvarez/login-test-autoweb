<script lang="ts">
    import { navigate } from "../router";
    import { authStore } from "../stores";

    function logout() {
        $authStore = { loggedIn: false, documento: '', tipoDocumento: 'dni' };
        navigate("/", { replace: true });
    }
</script>

<div class="container">
    <h1>Bienvenido a tu Cuenta Bancaria</h1>
    <p>
        Documento: {$authStore.tipoDocumento.toUpperCase()} - {$authStore.documento}
    </p>

    <h2>Resumen de cuenta</h2>
    <ul>
        <li>Saldo disponible: S/ 5,000.00</li>
        <li>Cuenta de ahorros: S/ 3,200.00</li>
        <li>Última transacción: Transferencia recibida +S/ 500</li>
    </ul>

    <button on:click={logout}>Cerrar sesión</button>
</div>

<style>
    .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
    }
    button {
        padding: 10px 20px;
        background: #dc3545;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
