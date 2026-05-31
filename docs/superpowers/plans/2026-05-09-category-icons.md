# Category Icons Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the emoji category icons with playful native vector icon badges in the QuickConvert category grid.

**Architecture:** Store structured icon metadata on each `Category`, then render that metadata in `CategoryCard` with `MaterialCommunityIcons` from `@expo/vector-icons`. Converter navigation and conversion data remain unchanged; converter titles use category names instead of emoji-prefixed strings.

**Tech Stack:** Expo Router, React Native, TypeScript, `@expo/vector-icons`.

---

## File Structure

- Modify `src/types/index.ts` to replace the raw `icon: string` field with a typed `CategoryIcon` object.
- Modify `src/data/categories.ts` to assign Material Community icon names, icon colors, and badge colors per category.
- Modify `src/components/CategoryCard.tsx` to render a circular icon badge with `MaterialCommunityIcons`.
- Modify `app/converter/[categoryId].tsx` to remove emoji interpolation from screen titles.

### Task 1: Typed Category Icon Metadata

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/categories.ts`

- [ ] **Step 1: Add icon metadata types**

Update `src/types/index.ts` so category icons are structured:

```ts
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
```

Then change the `Category` interface field from `icon: string` to:

```ts
icon: CategoryIcon;
```

- [ ] **Step 2: Replace emoji data with icon metadata**

In `src/data/categories.ts`, replace each `icon: '...'` value:

```ts
icon: {
  family: 'materialCommunity',
  name: 'thermometer-lines',
  color: '#E11D48',
  backgroundColor: '#FFE4E6',
},
```

Use these mappings:

```ts
temperature -> thermometer-lines, #E11D48, #FFE4E6
distance -> map-marker-distance, #2563EB, #DBEAFE
weight -> scale-balance, #059669, #D1FAE5
volume -> cup-water, #7C3AED, #EDE9FE
speed -> speedometer, #DB2777, #FCE7F3
cooking -> chef-hat, #EA580C, #FFEDD5
clothing -> tshirt-crew, #4F46E5, #E0E7FF
area -> set-square, #0D9488, #CCFBF1
```

- [ ] **Step 3: Run TypeScript to catch data/type mistakes**

Run: `npx tsc --noEmit`

Expected: any existing TypeScript error points to remaining string icon usage that Task 2 or Task 3 must fix.

### Task 2: Render Icon Badges

**Files:**
- Modify: `src/components/CategoryCard.tsx`

- [ ] **Step 1: Import vector icons and View**

Change the React Native import to include `View`, and import Material Community Icons:

```ts
import { Pressable, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
```

- [ ] **Step 2: Render the badge**

Replace:

```tsx
<Text style={styles.icon}>{category.icon}</Text>
```

With:

```tsx
<View style={[styles.iconBadge, { backgroundColor: category.icon.backgroundColor }]}>
  <MaterialCommunityIcons
    name={category.icon.name}
    size={30}
    color={category.icon.color}
  />
</View>
```

- [ ] **Step 3: Replace icon text styles with badge styles**

Remove `styles.icon` and add:

```ts
iconBadge: {
  width: 48,
  height: 48,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: spacing.sm,
},
```

- [ ] **Step 4: Run TypeScript**

Run: `npx tsc --noEmit`

Expected: PASS with no TypeScript errors.

### Task 3: Converter Titles and Visual Check

**Files:**
- Modify: `app/converter/[categoryId].tsx`

- [ ] **Step 1: Remove emoji title interpolation**

Replace:

```ts
title: `${category.icon} ${category.name}`,
```

With:

```ts
title: category.name,
```

- [ ] **Step 2: Run TypeScript**

Run: `npx tsc --noEmit`

Expected: PASS with no TypeScript errors.

- [ ] **Step 3: Start Expo web**

Run: `npm run web`

Expected: Expo starts and prints a local web URL.

- [ ] **Step 4: Inspect the category grid**

Open the local Expo web URL in the browser. Confirm each category card shows a circular icon badge and no missing-icon placeholders.

Expected: Temperature, Distance, Weight, Volume, Speed, Cooking, Clothing, and Area each show a distinct native vector icon.
