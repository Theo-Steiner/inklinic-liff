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


<div>
<label>
お名前
<input type="text" placeholder="お客様のお名前" bind:value/>
</label>
<button type="submit" { onclick }>ご予約の確認</button>
</div>

<style>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
