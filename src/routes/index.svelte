<script lang="ts">
  import { toCanvas } from "qrcode";
  let text = "";
  let json = false;
  let canvas: HTMLCanvasElement;
  let width = 200;
  let height = 200;

  $: if (canvas) {
    if (text) {
      let code = json ? JSON.parse(`"${text}"`) : text;
      toCanvas(canvas, code.trim(), { width });
    } else {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, width, height);
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillText("No Text", width / 2, height / 2);
    }
  }
</script>

<canvas bind:this={canvas} {width} {height} />
<p>
  <input type="text" bind:value={text} placeholder="enter qr code here" />
  <input type="checkbox" bind:value={json} /> JSON string
</p>

<style>
  p {
    text-align: center;
  }
  input[type="text"] {
    width: 45em;
  }
  canvas {
    border: 1px solid gray;
    display: block;
    margin: 2em auto;
  }
</style>
