<script lang="ts">
  import Button from "./Button.svelte";
  import { t } from "./i18n";
  interface Props {
    onConfirmation: (name: string) => void;
  }
  let { onConfirmation }: Props = $props();

  let value = $state("");
  const onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onConfirmation(value);
  };
</script>

<form {onsubmit}>
  <label for="name">
    {t("inputLabel")}
  </label>
  <input id="name" type="text" placeholder={t("inputPlaceholder")} bind:value />
  <span>{t("inputTip")}</span>
  <Button disabled={!value.trim()} />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  span {
    font-size: 0.8em;
    color: gray;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    display: flex;
    height: 2.5rem;
    border-radius: 0.375rem;
    border: 1px solid hsl(var(--border));
    background-color: hsl(var(--background));
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.875rem;
    outline: none;
    transition:
      border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    color: hsl(var(--foreground));
    font-weight: 500;
    max-width: 30rem;
    padding-left: 0.5rem;
  }

  input:focus {
    background-color: hsl(var(--background));
    border: 1px solid hsl(var(--border));
    color: hsl(var(--foreground));
  }

  input:-webkit-autofill {
    background-color: hsl(var(--background));
    border: 1px solid hsl(var(--border));
    color: hsl(var(--foreground));
  }

  input::placeholder {
    color: hsl(var(--muted-foreground));
  }

  input:focus-visible {
    outline: none;
    border-color: hsl(var(--ring) / 0.7);
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.1);
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
