<script lang="ts">
  import { toCanvas } from "qrcode";
  export let code = "";
  export let size = 200;
  export let placeholder = "NO TEXT";

  let canvas: HTMLCanvasElement;

  $: if (canvas) {
    if (code) {
      toCanvas(canvas, code, { width: size });
    } else {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "#888";
      ctx.fillText(placeholder, size / 2, size / 2);
    }
  }
</script>

<canvas bind:this={canvas} width={size} height={size} />

<style>
  canvas {
    border: 1px solid #ccc;
    display: block;
    margin: 2em auto;
  }
</style>
