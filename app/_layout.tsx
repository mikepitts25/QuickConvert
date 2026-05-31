import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AdBanner } from '../src/components/AdBanner';
import { AppThemeProvider, useAppTheme } from '../src/theme/theme-context';

function AppLayout() {
  const { colors, mode } = useAppTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="converter/[categoryId]"
          options={{
            headerShown: true,
            headerBackTitle: 'Back',
            headerStyle: { backgroundColor: colors.background },
            headerTintColor: colors.textPrimary,
          }}
        />
      </Stack>
      <AdBanner />
    </View>
  );
}

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <AppLayout />
    </AppThemeProvider>
  );
}
