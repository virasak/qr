<script lang="ts">
  import QrCode from "../components/qrcode.svelte";
  let text = "";
  let json = false;
</script>

<QrCode {text} {json} />
<p>
  <input type="text" bind:value={text} placeholder="Enter QR code here" />
  <input type="checkbox" bind:value={json} /> JSON string
</p>

<style>
  p {
    text-align: center;
  }
  input[type="text"] {
    padding: 0.5em 1em;
    width: 45em;
    max-width: 90%;
  }
</style>
