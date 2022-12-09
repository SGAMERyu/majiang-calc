export const enum UserNameEnum {
  LI_YAN_SONG = "LI_YAN_SONG",
  LI_JUN_FENG = "LI_JUN_FENG",
  YU_TING_TING = "YU_TING_TING",
  QI_XI_YU = "QI_XI_YU",
}

export const USER_NAME_MAP: Record<string, any> = {
  [UserNameEnum.LI_YAN_SONG]: "松",
  [UserNameEnum.LI_JUN_FENG]: "峰",
  [UserNameEnum.YU_TING_TING]: "雀",
  [UserNameEnum.QI_XI_YU]: "宇",
};

export const USER_LIST = [
  UserNameEnum.LI_JUN_FENG,
  UserNameEnum.LI_YAN_SONG,
  UserNameEnum.YU_TING_TING,
  UserNameEnum.QI_XI_YU,
];

export const userScoreStorage = useStorage(
  "score",
  {
    [UserNameEnum.LI_YAN_SONG]: [],
    [UserNameEnum.LI_JUN_FENG]: [],
    [UserNameEnum.YU_TING_TING]: [],
    [UserNameEnum.QI_XI_YU]: [],
  },
  localStorage
);
