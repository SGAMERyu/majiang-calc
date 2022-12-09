<template>
  <div class="grid grid-cols-4 justify-center">
    <div
      class="flex flex-col items-center"
      v-for="(user, index) in USER_LIST"
      :key="index"
    >
      <div
        class="w-8 h-8 rounded-1/2 bg-green-300 flex items-center justify-center"
      >
        {{ USER_NAME_MAP[user] }}
      </div>
      <input
        type="number"
        class="w-full mt-8px text-14px"
        placeholder="请输入数字"
        v-model="userValue[user]"
      />
    </div>
  </div>
  <div class="flex justify-center w-full mt-16px">
    <button
      v-if="isZero"
      class="text-12px bg-green-400 text-white p-2 w-full box-border rounded-4px"
      @click="submitScore"
    >
      提交
    </button>
    <span v-else class="text-red-400 text-12px mt-8px"
      >相加不等于0计算失误</span
    >
  </div>
</template>

<script lang="ts" setup>
import {
  userScoreStorage,
  USER_LIST,
  USER_NAME_MAP,
  UserNameEnum,
} from "~/logic/storage";

const userValue = reactive({
  [UserNameEnum.LI_YAN_SONG]: "",
  [UserNameEnum.LI_JUN_FENG]: "",
  [UserNameEnum.YU_TING_TING]: "",
  [UserNameEnum.QI_XI_YU]: "",
});

const isZero = computed(() => {
  const total = Object.values(userValue).reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
  return total == 0;
});

function submitScore() {
  if (!isZero) return;
  Object.entries(userValue).forEach(([key, value]) => {
    (userScoreStorage.value as any)[key].push(value || 0);
  });
  resetUserValue();
}

function resetUserValue() {
  Object.keys(userValue).forEach((key) => {
    Reflect.set(userValue, key, "");
  });
}
</script>
