import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Preset } from '../types';
import { useAppTheme } from '../theme/theme-context';
import { spacing } from '../theme/spacing';
import { getPresetChipFlexBasis } from './preset-grid';

interface Props {
  presets: Preset[];
  onSelect: (value: number) => void;
}

export function PresetList({ presets, onSelect }: Props) {
  const { colors } = useAppTheme();
  const chipFlexBasis = getPresetChipFlexBasis(presets);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: colors.textSecondary }]}>Quick presets</Text>
      <View style={styles.grid}>
        {presets.map((preset) => (
          <Pressable
            key={preset.label}
            onPress={() => onSelect(preset.fromValue)}
            style={({ pressed }) => [
              styles.chip,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                flexBasis: chipFlexBasis,
              },
              pressed && styles.pressed,
            ]}
          >
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
              style={[styles.chipText, { color: colors.textPrimary }]}
            >
              {preset.label}
            </Text>
          </Pressable>
        ))}
      </View>
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
    marginBottom: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  chip: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 40,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  pressed: {
    opacity: 0.6,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});
