import { Stack } from 'expo-router';
import { useAppTheme } from '../../src/theme/theme-context';

export default function TabLayout() {
  const { colors } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="reference"
        options={{
          title: 'Clothing',
          headerBackTitle: 'Back',
        }}
      />
    </Stack>
  );
}
