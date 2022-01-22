<script lang="ts">
  import { toCanvas } from "qrcode";
  export let code = "";
  export let size = 200;

  let canvas: HTMLCanvasElement;

  $: if (canvas) {
    if (code) {
      toCanvas(canvas, code, { width: size });
    } else {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, size, size);
      ctx.font = "24px serif";
      ctx.textAlign = "center";
      ctx.fillText("No Text", size / 2, size / 2);
    }
  }
</script>

<canvas bind:this={canvas} width={size} height={size} />

<style>
  canvas {
    border: 1px solid rgb(104, 57, 57);
    display: block;
    margin: 2em auto;
  }
</style>
