import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { ConversionPair } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface Props {
  pairs: ConversionPair[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function UnitPicker({ pairs, selectedIndex, onSelect }: Props) {
  if (pairs.length <= 1) return null;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {pairs.map((pair, index) => {
        const isSelected = index === selectedIndex;
        return (
          <Pressable
            key={`${pair.from.id}-${pair.to.id}`}
            onPress={() => onSelect(index)}
            style={[styles.chip, isSelected && styles.chipSelected]}
          >
            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>
              {pair.from.abbreviation} → {pair.to.abbreviation}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
});
