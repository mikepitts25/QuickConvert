import { View, ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { Preset } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface Props {
  presets: Preset[];
  onSelect: (value: number) => void;
}

export function PresetList({ presets, onSelect }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>Quick presets</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {presets.map((preset) => (
          <Pressable
            key={preset.label}
            onPress={() => onSelect(preset.fromValue)}
            style={({ pressed }) => [styles.chip, pressed && styles.pressed]}
          >
            <Text style={styles.chipText}>{preset.label}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: spacing.lg,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  container: {
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.cooking,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  pressed: {
    opacity: 0.6,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
});
