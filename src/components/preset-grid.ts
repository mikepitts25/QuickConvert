import { Preset } from '../types';

export function getPresetGridColumns(presets: Preset[]) {
  return presets.length > 6 ? 3 : 2;
}

export function getPresetChipFlexBasis(presets: Preset[]) {
  return getPresetGridColumns(presets) === 3 ? '31.5%' : '48%';
}
