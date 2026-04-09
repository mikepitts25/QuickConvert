import { Category, Unit } from '../types';
import { factors, temperatureConversion } from './conversions';
import { ovenPresets } from './presets';
import { colors } from '../theme/colors';

// --- Units ---

const fahrenheit: Unit = { id: 'fahrenheit', name: 'Fahrenheit', abbreviation: '°F', system: 'us' };
const celsius: Unit = { id: 'celsius', name: 'Celsius', abbreviation: '°C', system: 'metric' };

const miles: Unit = { id: 'miles', name: 'Miles', abbreviation: 'mi', system: 'us' };
const kilometers: Unit = { id: 'kilometers', name: 'Kilometers', abbreviation: 'km', system: 'metric' };
const feet: Unit = { id: 'feet', name: 'Feet', abbreviation: 'ft', system: 'us' };
const meters: Unit = { id: 'meters', name: 'Meters', abbreviation: 'm', system: 'metric' };
const inches: Unit = { id: 'inches', name: 'Inches', abbreviation: 'in', system: 'us' };
const centimeters: Unit = { id: 'centimeters', name: 'Centimeters', abbreviation: 'cm', system: 'metric' };
const yards: Unit = { id: 'yards', name: 'Yards', abbreviation: 'yd', system: 'us' };

const pounds: Unit = { id: 'pounds', name: 'Pounds', abbreviation: 'lb', system: 'us' };
const kilograms: Unit = { id: 'kilograms', name: 'Kilograms', abbreviation: 'kg', system: 'metric' };
const ounces: Unit = { id: 'ounces', name: 'Ounces', abbreviation: 'oz', system: 'us' };
const grams: Unit = { id: 'grams', name: 'Grams', abbreviation: 'g', system: 'metric' };

const gallons: Unit = { id: 'gallons', name: 'Gallons', abbreviation: 'gal', system: 'us' };
const liters: Unit = { id: 'liters', name: 'Liters', abbreviation: 'L', system: 'metric' };
const quarts: Unit = { id: 'quarts', name: 'Quarts', abbreviation: 'qt', system: 'us' };
const cups: Unit = { id: 'cups', name: 'Cups', abbreviation: 'cup', system: 'us' };
const milliliters: Unit = { id: 'milliliters', name: 'Milliliters', abbreviation: 'mL', system: 'metric' };
const fluidOunces: Unit = { id: 'floz', name: 'Fluid Ounces', abbreviation: 'fl oz', system: 'us' };
const tablespoons: Unit = { id: 'tbsp', name: 'Tablespoons', abbreviation: 'tbsp', system: 'us' };
const teaspoons: Unit = { id: 'tsp', name: 'Teaspoons', abbreviation: 'tsp', system: 'us' };

const mph: Unit = { id: 'mph', name: 'Miles per hour', abbreviation: 'mph', system: 'us' };
const kmh: Unit = { id: 'kmh', name: 'Kilometers per hour', abbreviation: 'km/h', system: 'metric' };

const sqFeet: Unit = { id: 'sqft', name: 'Square Feet', abbreviation: 'ft²', system: 'us' };
const sqMeters: Unit = { id: 'sqm', name: 'Square Meters', abbreviation: 'm²', system: 'metric' };
const acres: Unit = { id: 'acres', name: 'Acres', abbreviation: 'ac', system: 'us' };
const hectares: Unit = { id: 'hectares', name: 'Hectares', abbreviation: 'ha', system: 'metric' };

// --- Categories ---

export const categories: Category[] = [
  {
    id: 'temperature',
    name: 'Temperature',
    icon: '🌡️',
    color: colors.temperature,
    pairs: [
      { from: fahrenheit, to: celsius, conversion: temperatureConversion },
    ],
  },
  {
    id: 'distance',
    name: 'Distance',
    icon: '📏',
    color: colors.distance,
    pairs: [
      { from: miles, to: kilometers, conversion: factors.miles_km },
      { from: feet, to: meters, conversion: factors.feet_meters },
      { from: inches, to: centimeters, conversion: factors.inches_cm },
      { from: yards, to: meters, conversion: factors.yards_meters },
    ],
  },
  {
    id: 'weight',
    name: 'Weight',
    icon: '⚖️',
    color: colors.weight,
    pairs: [
      { from: pounds, to: kilograms, conversion: factors.pounds_kg },
      { from: ounces, to: grams, conversion: factors.ounces_grams },
    ],
  },
  {
    id: 'volume',
    name: 'Volume',
    icon: '🧪',
    color: colors.volume,
    pairs: [
      { from: gallons, to: liters, conversion: factors.gallons_liters },
      { from: quarts, to: liters, conversion: factors.quarts_liters },
      { from: cups, to: milliliters, conversion: factors.cups_ml },
      { from: fluidOunces, to: milliliters, conversion: factors.floz_ml },
      { from: tablespoons, to: milliliters, conversion: factors.tbsp_ml },
      { from: teaspoons, to: milliliters, conversion: factors.tsp_ml },
    ],
  },
  {
    id: 'speed',
    name: 'Speed',
    icon: '🚗',
    color: colors.speed,
    pairs: [
      { from: mph, to: kmh, conversion: factors.mph_kmh },
    ],
  },
  {
    id: 'cooking',
    name: 'Cooking',
    icon: '🍳',
    color: colors.cooking,
    presets: ovenPresets,
    pairs: [
      { from: fahrenheit, to: celsius, conversion: temperatureConversion },
      { from: cups, to: milliliters, conversion: factors.cups_ml },
      { from: tablespoons, to: milliliters, conversion: factors.tbsp_ml },
      { from: teaspoons, to: milliliters, conversion: factors.tsp_ml },
      { from: fluidOunces, to: milliliters, conversion: factors.floz_ml },
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing',
    icon: '👕',
    color: colors.clothing,
    pairs: [],
  },
  {
    id: 'area',
    name: 'Area',
    icon: '📐',
    color: colors.area,
    pairs: [
      { from: sqFeet, to: sqMeters, conversion: factors.sqft_sqm },
      { from: acres, to: hectares, conversion: factors.acres_hectares },
    ],
  },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
