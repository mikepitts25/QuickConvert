import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { temperaturePresets } from '../data/presets';
import { getPresetChipFlexBasis, getPresetGridColumns } from './preset-grid';

describe('preset grid layout', () => {
  it('uses three columns for temperature presets so they are not a scroll row', () => {
    assert.equal(getPresetGridColumns(temperaturePresets), 3);
    assert.equal(getPresetChipFlexBasis(temperaturePresets), '31.5%');
  });
});
