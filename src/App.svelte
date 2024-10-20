<script lang="ts">
  import liff from '@line/liff';

  import ConfirmationForm from './ConfirmationForm.svelte';

  async function init() {
    return await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID
    })
  }

  function close() {
    liff.closeWindow();
  }

  function sendMessage(name: string) {
    liff.sendMessages([
      {
        type: "text",
        text: `お名前: ${name}`
      }
    ])
  }
  
  let promise = init();
</script>

<main>
  <h1>inklinic</h1>
  {#await promise}
    <p>...</p>
  {:then}
    <ConfirmationForm onConfirmation={sendMessage} />
  {:catch e}
    <p>LIFF init failed.</p>
    <p><code>{`${e}`}</code></p>
  {/await}
</main>

<style>
  main {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
