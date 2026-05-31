import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppTheme } from '../theme/theme-context';

interface Props {
  onPress: () => void;
}

export function SwapButton({ onPress }: Props) {
  const { colors } = useAppTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
        pressed && styles.pressed,
      ]}
    >
      <Ionicons name="swap-vertical" size={28} color={colors.primary} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    padding: 12,
    borderRadius: 24,
    borderWidth: 1,
    marginVertical: 8,
  },
  pressed: {
    opacity: 0.6,
  },
});
