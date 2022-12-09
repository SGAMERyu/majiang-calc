<template>
  <main
    font-sans
    text="center gray-700 dark:gray-300"
    class="p-16px flex flex-col h-[100vh]"
  >
    <div class="flex-1">
      <Score />
      <div class="mt-32px">
        <User />
      </div>
    </div>
    <button class="bg-red-500 w-full h-32px px-8px text-white" @click="clear">
      清除
    </button>
  </main>
</template>

<script lang="ts" setup>
import { userScoreStorage } from "~/logic/storage";

function clear() {
  alert("确认清除缓存吗");
  Object.keys(userScoreStorage.value).forEach((key) => {
    Reflect.set(userScoreStorage.value, key, []);
  });
}
</script>
