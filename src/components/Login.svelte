<script lang="ts">
    import { navigate } from "../router";
    import { authStore } from "../stores"; // Lo crearemos después

    let tipoDocumento: "dni" | "ce" | "pass" = "dni";
    let documento: string = "";
    let password: string = "";
    let error: string = "";

    function handleLogin() {
        // Simulación de login exitoso (cámbialo por tu lógica real/API)
        if (documento === "12345678" && password === "secret") {
            $authStore = { loggedIn: true, documento, tipoDocumento };
            navigate("/dashboard", { replace: true });
        } else {
            error = "Credenciales inválidas";
        }
    }
</script>

<div class="background">
    <div class="login-card">
        <div class="card-header">
            <h1>Bienvenido</h1>
            <p>Inicia sesión para continuar</p>
        </div>

        {#if error}<div class="error-message">{error}</div>{/if}

        <form on:submit|preventDefault={handleLogin}>
            <div class="input-group">
                <label for="tipoDocs">Tipo de documento</label>
                <select id="tipoDocs" bind:value={tipoDocumento}>
                    <option value="dni">DNI</option>
                    <option value="ce">Carné de Extranjería</option>
                    <option value="pass">Pasaporte</option>
                </select>
            </div>

            <div class="input-group">
                <label for="docNumber">Número de documento</label>
                <input
                    id="docNumber"
                    type="text"
                    bind:value={documento}
                    required
                    placeholder=" "
                />
            </div>

            <div class="input-group">
                <label for="password">Contraseña</label>
                <input
                    id="password"
                    type="password"
                    bind:value={password}
                    required
                    placeholder=" "
                />
            </div>

            <button type="submit" class="btn-primary"> INICIAR SESIÓN </button>
        </form>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        font-family: "Roboto", sans-serif;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Overlay to improve text contrast if needed, mostly for aesthetics here */
    .background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(2px);
    }

    .login-card {
        position: relative;
        background: white;
        padding: 40px 30px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        width: 100%;
        max-width: 400px;
        box-sizing: border-box;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .card-header {
        text-align: center;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 24px;
        color: #333;
        margin: 0 0 8px 0;
        font-weight: 500;
    }

    p {
        color: #666;
        margin: 0;
        font-size: 14px;
    }

    .input-group {
        margin-bottom: 24px;
        position: relative;
    }

    label {
        display: block;
        margin-bottom: 8px;
        color: #666;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    input,
    select {
        width: 100%;
        padding: 12px 0;
        font-size: 16px;
        color: #333;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        background: transparent;
        transition: border-color 0.2s;
        box-sizing: border-box; /* Ensure padding doesn't affect width calculation */
    }

    input:focus,
    select:focus {
        border-bottom-color: #3f51b5;
    }

    select {
        padding-right: 20px; /* Space for the arrow */
        background: white; /* Ensure it covers the placeholder if any */
    }

    .btn-primary {
        width: 100%;
        padding: 12px;
        background-color: #3f51b5;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition:
            background-color 0.2s,
            box-shadow 0.2s;
        letter-spacing: 1px;
        margin-top: 10px;
    }

    .btn-primary:hover {
        background-color: #303f9f;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .btn-primary:active {
        background-color: #283593;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .error-message {
        background-color: #ffebee;
        color: #d32f2f;
        padding: 10px;
        border-radius: 4px;
        font-size: 14px;
        margin-bottom: 20px;
        text-align: center;
    }
</style>
