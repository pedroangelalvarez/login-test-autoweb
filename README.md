# Login Test Autoweb 🏦

Este proyecto es una aplicación web de demostración para practicar automatización de pruebas E2E utilizando el patrón **Screenplay**. Simula un portal bancario simple con una funcionalidad de Login y un Dashboard protegido.

El objetivo principal es servir como base para pruebas automatizadas con **Playwright** y **Cucumber**.

## 🔑 Credenciales de Prueba

Para acceder exitosamente a la aplicación (Happy Path), utiliza las siguientes credenciales:

| Campo             | Valor      |
|-------------------|------------|
| **Tipo Documento**| DNI        |
| **Nro Documento** | `12345678` |
| **Contraseña**    | `secret`   |

Cualquier otra combinación de credenciales resultará en un error de validación ("Credenciales inválidas").

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend**: Svelte + Vite
*   **Automation Framework**: Playwright
*   **BDD Framework**: Cucumber (Gherkin)
*   **Design Pattern**: Screenplay Pattern (Implementación manual minimalista)
*   **Lenguaje**: TypeScript

---

## 🚀 Ejecución de Pruebas

Asegúrate de tener las dependencias instaladas (`npm install`) y el servidor de desarrollo corriendo en una terminal separada si es necesario (el framework está configurado para ejecutarse contra `localhost:5173`).

### 1. Iniciar la aplicación
Antes de correr los tests, levanta la app web:
```bash
npm run dev
```

### 2. Ejecutar todos los tests
Ejecuta la suite completa de pruebas E2E:
```bash
npm run test:e2e
```

### 3. Ejecutar por Tags (Escenarios Específicos)
Puedes filtrar qué pruebas ejecutar utilizando los _Tags_ definidos en los archivos `.feature`.

**Solo el flujo exitoso (Happy Path):**
```bash
npm run test:e2e -- --tags "@happy_path"
```

**Solo el flujo de error (Unhappy Path):**
```bash
npm run test:e2e -- --tags "@unhappy_path"
```

**Excluir un escenario:**
```bash
npm run test:e2e -- --tags "not @unhappy_path"
```

---

## 📊 Reportes y Logs

El proyecto cuenta con un sistema de **Step Notifications** personalizado. Al ejecutar las pruebas, verás en la consola un desglose narrativo de las acciones que realiza el Actor, simulando el comportamiento de librerías como Serenity/JS.

**Ejemplo de salida en consola:**
```text
[Usuario] attempts to Navigate to http://localhost:5173
[Usuario] attempts to Login with dni, 12345678
[Usuario] attempts to Select value 'dni' from #tipoDocs
[Usuario] attempts to Enter value '12345678' into #docNumber
[Usuario] attempts to Click on button[type="submit"]
[Usuario] asks information about Text
```

## 📂 Estructura del Proyecto (Screenplay)

*   `tests/features/`: Archivos `.feature` con los escenarios en Gherkin.
*   `tests/steps/`: Definición de pasos (Step Definitions).
*   `tests/screenplay/`: Núcleo del patrón Screenplay.
    *   `Actor.ts`: La entidad que realiza las acciones.
    *   `tasks/`: Tareas de alto nivel (ej. `Login`).
    *   `interactions/`: Acciones de bajo nivel (ej. `Click`, `Enter`).
    *   `questions/`: Preguntas sobre el estado de la aplicación (Assertions).
    *   `ui/`: Page Objects (Selectores).
