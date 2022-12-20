interface User {
  uid: string;
  name: string;
  // 是否是庄家
  isBanker: boolean;
  // 所在风向
  wind?: WindEnum;
}

export const enum WindEnum {
  EAST = "east",
  SOUTH = "south",
  WEST = "west",
  NORTH = "north",
}

export const WIND_LIST = [
  WindEnum.EAST,
  WindEnum.SOUTH,
  WindEnum.WEST,
  WindEnum.NORTH,
];

export const WIND_MAP = {
  [WindEnum.EAST]: "东风圈",
  [WindEnum.SOUTH]: "南风圈",
  [WindEnum.WEST]: "西风圈",
  [WindEnum.NORTH]: "北风圈",
};

export const USER_MAP: User[] = [
  {
    uid: "LI_YAN_SONG",
    name: "松",
    isBanker: false,
  },
  {
    uid: "LI_JUN_FENG",
    name: "峰",
    isBanker: false,
  },
  {
    uid: "YU_TING_TING",
    name: "婷",
    isBanker: false,
  },
  {
    uid: "QI_XI_YU",
    name: "宇",
    isBanker: false,
  },
];
