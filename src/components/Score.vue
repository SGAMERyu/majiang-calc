<template>
  <div v-for="item in displayScore" :key="item.name" class="leading-32px">
    {{ USER_NAME_MAP[item.name] }}: {{ item.totalScore }}
  </div>
</template>

<script lang="ts" setup>
import { userScoreStorage, USER_NAME_MAP } from "~/logic/storage";

const displayScore = computed(() => {
  return Object.entries(userScoreStorage.value).reduce((acc, cur) => {
    const [name, scoreList] = cur;
    const totalScore = scoreList.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
    acc.push({ name, totalScore });
    return acc;
  }, [] as any);
});
</script>
