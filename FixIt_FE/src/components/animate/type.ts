type TEaseType =
  | 'linear'
  | 'easeIn'
  | 'easeOut'
  | 'easeInOut'
  | 'circIn'
  | 'circOut'
  | 'circInOut'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'anticipate'
  | number[];

export type TVariantsType = {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: TEaseType;
  easeOut?: TEaseType;
};

export type TTranHoverType = {
  duration?: number;
  ease?: TEaseType;
};

export type TTranEnterType = {
  durationIn?: number;
  easeIn?: TEaseType;
};

export type TTranExitType = {
  durationOut?: number;
  easeOut?: TEaseType;
};
