<script lang="ts">
  import debounce from "../debounce";

  import QRCode from "../components/QRCode.svelte";
  let value = "";
  let json = false;
  let code;

  const handleChange = debounce((value, json) => {
    code = json ? JSON.parse(`"${value}"`) : value;
  }, 200);

  $: handleChange(value, json);
</script>

<QRCode {code} />
<p>
  <input type="text" bind:value placeholder="Enter QR code here" />
</p>
<p>
  <label>
    <input type="checkbox" bind:checked={json} /> JSON string
  </label>
</p>

<style>
  p {
    text-align: center;
  }
  label {
    white-space: nowrap;
  }
  input[type="text"] {
    padding: 0.5em 1em;
    width: 45em;
    max-width: 90%;
  }
</style>
