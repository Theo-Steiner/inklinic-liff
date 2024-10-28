<script lang="ts">
  import { t } from "./i18n";
  import liff from "@line/liff";
  import logo from "../public/inklinic.png?url";
  import Error from "./Error.svelte";

  import ConfirmationForm from "./ConfirmationForm.svelte";

  async function init() {
    return await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID,
    });
  }

  let error = $state();

  function close() {
    liff.closeWindow();
  }

  async function sendConfirmation(name: string) {
    const message = t("successMessage", { name });
    await sendMessage(message);
  }

  async function sendContactRequest() {
    const message = t("contactRequestMessage");
    await sendMessage(message);
  }

  async function sendMessage(text: string) {
    try {
      await liff.sendMessages([
        {
          type: "text",
          text,
        },
      ]);
      close();
    } catch (e) {
      error = e;
    }
  }

  let promise = init();
</script>

<main>
  <img src={logo} alt="inklinic" />
  {#if error}
    <Error />
  {:else}
    {#await promise}
      <p>...</p>
    {:then}
      <h3>{t("greeting")}</h3>
      <ConfirmationForm
        onConfirmation={sendConfirmation}
        onRequestContact={sendContactRequest}
      />
    {:catch}
      <Error />
    {/await}
  {/if}
</main>

<style>
  :global(body) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    max-width: 80vw;
  }

  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --primary: 222.2 47.4% 11.2%;
    --secondary: 210 40% 96.1%;
  }

  img {
    width: 40vw;
  }
</style>
