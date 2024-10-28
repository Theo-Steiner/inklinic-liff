<script lang="ts">
  const {
    label,
    ...props
  }: {
    disabled?: boolean;
    label: string;
    type: "submit" | "button";
    onclick?: () => void;
  } = $props();
</script>

<button {...props}>{label}</button>

<style>
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
    outline: none;
    background-color: hsl(var(--primary));
    color: white;
    border: 0.0375rem solid hsl(var(--border) / 0.8);
    transition: background-color 0.2s ease;
    height: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    max-width: 20rem;
  }

  button:hover {
    cursor: pointer;
    background-color: hsl(var(--primary) / 0.8);
    transition: background-color 0.2s ease;
  }

  button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px hsl(var(--foreground) / 0.5);
  }

  button:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  button:disabled:focus-visible {
    outline: none;
    box-shadow: none;
  }
</style>
