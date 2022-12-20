<template>
  <div class="flex items-center justify-center mt-150px">
    <div class="w-120px h-120px bg-green-50 relative rotate-45">
      <div class="seat-item -top-7 -left-7"></div>
      <div class="seat-item -top-7 -right-7"></div>
      <div class="seat-item -bottom-7 -left-7"></div>
      <div class="seat-item -bottom-7 -right-7"></div>

      <div class="wind-item -top-20 -left-20">东</div>
      <div class="wind-item -top-20 -right-20">南</div>
      <div class="wind-item -bottom-20 -right-20">西</div>
      <div class="wind-item -bottom-20 -left-20">北</div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.seat-item {
  --at-apply: absolute w-14 h-14 rounded-1/2 bg-transparent border border-red
    border-solid;
}

.wind-item {
  --at-apply: absolute w-14 h-14 flex items-center justify-center -rotate-45;
}
</style>
