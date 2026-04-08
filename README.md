# QuickConvert

A cross-platform mobile app for US expatriates, providing quick offline conversions between US and metric/EU/UK units.

Built with React Native, Expo, and TypeScript.

## Features

- **Temperature** - Fahrenheit to Celsius
- **Distance** - Miles, feet, inches, yards to metric equivalents
- **Weight** - Pounds and ounces to kilograms and grams
- **Volume** - Gallons, quarts, cups, fluid ounces, tablespoons, teaspoons to liters/milliliters
- **Speed** - MPH to km/h
- **Cooking** - Oven temperature presets + common measurement conversions
- **Clothing & Shoe Sizes** - US, EU, and UK size reference charts for men, women, and children
- **Area** - Square feet to square meters, acres to hectares

All conversions are bidirectional and work completely offline.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npx expo start
```

Then open the app on:
- iOS Simulator: Press `i`
- Android Emulator: Press `a`
- Expo Go on your phone: Scan the QR code

## Project Structure

```
app/                  # Expo Router screens
  (tabs)/             # Bottom tab navigator (Convert + Reference)
  converter/          # Converter screen per category
src/
  components/         # Reusable UI components
  data/               # Conversion factors, categories, size tables
  hooks/              # Custom React hooks
  types/              # TypeScript type definitions
  utils/              # Conversion and formatting logic
  theme/              # Colors, spacing, typography
```
