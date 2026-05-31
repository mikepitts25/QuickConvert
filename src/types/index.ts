export interface Unit {
  id: string;
  name: string;
  abbreviation: string;
  system: 'us' | 'metric' | 'uk' | 'eu';
}

export type ConversionFormula =
  | { type: 'factor'; factor: number }
  | { type: 'formula'; toMetric: (v: number) => number; fromMetric: (v: number) => number };

export interface ConversionPair {
  from: Unit;
  to: Unit;
  conversion: ConversionFormula;
}

export interface Preset {
  label: string;
  fromValue: number;
  fromUnitId: string;
}

export type CategoryIconName =
  | 'thermometer-lines'
  | 'map-marker-distance'
  | 'scale-balance'
  | 'cup-water'
  | 'speedometer'
  | 'chef-hat'
  | 'tshirt-crew'
  | 'set-square';

export interface CategoryIcon {
  family: 'materialCommunity';
  name: CategoryIconName;
  color: string;
  backgroundColor: string;
}

export interface Category {
  id: string;
  name: string;
  icon: CategoryIcon;
  color: string;
  pairs: ConversionPair[];
  presets?: Preset[];
}

export interface SizeLookupTable {
  id: string;
  name: string;
  columns: string[];
  rows: string[][];
}
