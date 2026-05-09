# Category Icons Design

## Context

QuickConvert currently shows category icons as emoji strings in `src/data/categories.ts`, rendered as text in `src/components/CategoryCard.tsx`. The app already depends on `@expo/vector-icons` and uses Ionicons for tab icons, so native vector icons fit the current stack without adding image assets.

## Goal

Replace the emoji category icons with playful, app-native vector icons that feel intentional, stay crisp on iOS and Android, and preserve the existing pastel card grid.

## Approach

Use structured icon metadata on each category instead of raw emoji:

- `family`: the Expo vector icon family to render.
- `name`: the icon glyph name.
- `color`: the saturated accent color for the icon.
- `backgroundColor`: a soft badge color that works on the category card tint.

Render the metadata in `CategoryCard` through the matching `@expo/vector-icons` component. Keep card layout, labels, subtitles, navigation behavior, and conversion data unchanged.

## Icon Mapping

- Temperature: thermometer-style icon with a warm coral accent.
- Distance: ruler or route-style icon with a blue accent.
- Weight: scale or weight icon with a green accent.
- Volume: beaker or cup-measure icon with a violet accent.
- Speed: speedometer or fast-car icon with a pink/red accent.
- Cooking: frying-pan or chef/cooking icon with an orange-red accent.
- Clothing: t-shirt icon with an indigo accent.
- Area: set-square, resize, or shape icon with a teal accent.

## UI Details

Each category card gets a small circular icon badge above the category name. The badge should be visually playful but compact enough to avoid changing the grid density. The icon size should be stable across categories so the card content does not shift.

## Testing

- Run TypeScript checking to confirm the icon metadata types compile.
- Run or inspect the app screen after implementation to verify the grid renders without missing icons.
- Check that converter screen titles still make sense after replacing emoji metadata.

## Out of Scope

- Generated PNG assets.
- Changing category colors, card layout, or conversion behavior.
- Redesigning the reference tab or converter screens.
