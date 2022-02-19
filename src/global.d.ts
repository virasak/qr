/// <reference types="@sveltejs/kit" />

declare module 'qrcode' {
  export function toCanvas(canvas: HTMLCanvasElement, code: string, options: { width: number }): void
}