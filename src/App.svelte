<script lang="ts">
  import liff from '@line/liff';
  import logo from '../public/inklinic.png?url'

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
    close()
  }
  
  let promise = init();
</script>

<main>
  <img src={logo} alt="inklinic" />
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

  img {
  width: 30vw;
  }
</style>
