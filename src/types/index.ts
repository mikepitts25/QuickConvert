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

export interface Category {
  id: string;
  name: string;
  icon: string;
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
