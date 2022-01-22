<script lang="ts">
  import debounce from "../debounce";

  import QRCode from "../components/QRCode.svelte";
  let code = "";
  let json = false;

  const handleChange = debounce((value: string) => {
    code = json ? JSON.parse(`"${value}"`) : value;
  }, 200);
</script>

<QRCode {code} />
<p>
  <input
    type="text"
    on:keyup={(e) => handleChange(e.currentTarget.value)}
    placeholder="Enter QR code here"
  />
</p>
<p>
  <label>
    <input type="checkbox" bind:value={json} /> JSON string
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
