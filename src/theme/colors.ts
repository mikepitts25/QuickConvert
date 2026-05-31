export const lightColors = {
  background: '#F8F9FA',
  surface: '#FFFFFF',
  primary: '#2563EB',
  textPrimary: '#1A1A2E',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  inputBackground: '#F3F4F6',

  // Category tints
  temperature: '#FEF3C7',
  distance: '#DBEAFE',
  weight: '#D1FAE5',
  volume: '#EDE9FE',
  speed: '#FCE7F3',
  cooking: '#FEE2E2',
  clothing: '#E0E7FF',
  area: '#CCFBF1',
};

export const darkColors: typeof lightColors = {
  background: '#111827',
  surface: '#1F2937',
  primary: '#60A5FA',
  textPrimary: '#F9FAFB',
  textSecondary: '#CBD5E1',
  border: '#374151',
  inputBackground: '#111827',

  // Category tints
  temperature: '#4A3714',
  distance: '#173A68',
  weight: '#164B36',
  volume: '#37275F',
  speed: '#5A2143',
  cooking: '#5C2626',
  clothing: '#2E3268',
  area: '#174E49',
};

export const colors = lightColors;

export type AppColors = typeof lightColors;
