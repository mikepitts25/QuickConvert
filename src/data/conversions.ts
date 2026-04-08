import { ConversionFormula } from '../types';

// Factor-based: toMetric = value * factor, fromMetric = value / factor
export const factors: Record<string, ConversionFormula> = {
  miles_km: { type: 'factor', factor: 1.60934 },
  feet_meters: { type: 'factor', factor: 0.3048 },
  inches_cm: { type: 'factor', factor: 2.54 },
  yards_meters: { type: 'factor', factor: 0.9144 },
  pounds_kg: { type: 'factor', factor: 0.453592 },
  ounces_grams: { type: 'factor', factor: 28.3495 },
  gallons_liters: { type: 'factor', factor: 3.78541 },
  quarts_liters: { type: 'factor', factor: 0.946353 },
  cups_ml: { type: 'factor', factor: 236.588 },
  floz_ml: { type: 'factor', factor: 29.5735 },
  tbsp_ml: { type: 'factor', factor: 14.7868 },
  tsp_ml: { type: 'factor', factor: 4.92892 },
  mph_kmh: { type: 'factor', factor: 1.60934 },
  sqft_sqm: { type: 'factor', factor: 0.092903 },
  acres_hectares: { type: 'factor', factor: 0.404686 },
};

export const temperatureConversion: ConversionFormula = {
  type: 'formula',
  toMetric: (f: number) => (f - 32) * (5 / 9),
  fromMetric: (c: number) => c * (9 / 5) + 32,
};
