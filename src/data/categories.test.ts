import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { getCategoryById } from './categories';

describe('conversion category data', () => {
  it('keeps temperature presets with the temperature category', () => {
    const temperature = getCategoryById('temperature');

    assert.ok(temperature);
    assert.deepEqual(
      temperature.presets?.map((preset) => preset.label),
      [
        'Freezing point',
        'Boiling point',
        '250°F',
        '300°F',
        '325°F',
        '350°F',
        '375°F',
        '400°F',
        '425°F',
        '450°F',
        '500°F',
      ],
    );
  });

  it('keeps cooking focused on volume conversions', () => {
    const cooking = getCategoryById('cooking');

    assert.ok(cooking);
    assert.equal(cooking.presets, undefined);
    assert.equal(
      cooking.pairs.some((pair) => pair.from.id === 'fahrenheit' || pair.to.id === 'celsius'),
      false,
    );
    assert.deepEqual(
      cooking.pairs.map((pair) => `${pair.from.id}-${pair.to.id}`),
      ['cups-milliliters', 'tbsp-milliliters', 'tsp-milliliters', 'floz-milliliters'],
    );
  });
});
