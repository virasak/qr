<script lang="ts">
  import { toCanvas } from "qrcode";
  export let text = "";
  export let width = 200;
  export let height = 200;
  export let json = false;

  let canvas: HTMLCanvasElement;

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

<style>
  canvas {
    border: 1px solid rgb(104, 57, 57);
    display: block;
    margin: 2em auto;
  }
</style>
