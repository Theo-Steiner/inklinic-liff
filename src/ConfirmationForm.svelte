<script lang="ts">
interface Props {
  onConfirmation: (name: string) => void
}
let {onConfirmation}: Props = $props()

let value = $state('')
const onclick = () => {
  onConfirmation(value)
}
</script>

<label>
<input type="text" placeholder="お名前" bind:value/>
</label>
<button type="submit" { onclick }>ご予約の確認</button>
