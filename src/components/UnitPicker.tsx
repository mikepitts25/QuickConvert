import { useState } from 'react';
import { Modal, Pressable, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ConversionPair } from '../types';
import { useAppTheme } from '../theme/theme-context';
import { spacing } from '../theme/spacing';

interface Props {
  pairs: ConversionPair[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function UnitPicker({ pairs, selectedIndex, onSelect }: Props) {
  const { colors } = useAppTheme();
  const [isOpen, setIsOpen] = useState(false);

  if (pairs.length <= 1) return null;

  const selectedPair = pairs[selectedIndex] ?? pairs[0];
  const selectedLabel = formatPairLabel(selectedPair);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.label, { color: colors.textSecondary }]}>Conversion</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Choose conversion"
        onPress={() => setIsOpen(true)}
        style={({ pressed }) => [
          styles.trigger,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
          pressed && styles.pressed,
        ]}
      >
        <Text
          numberOfLines={1}
          style={[styles.triggerText, { color: colors.textPrimary }]}
        >
          {selectedLabel}
        </Text>
        <MaterialCommunityIcons
          name="chevron-down"
          size={22}
          color={colors.textSecondary}
        />
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable style={styles.backdrop} onPress={() => setIsOpen(false)}>
          <View
            style={[
              styles.menu,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
              },
            ]}
          >
            <Text style={[styles.menuTitle, { color: colors.textSecondary }]}>
              Select conversion
            </Text>
            {pairs.map((pair, index) => {
              const isSelected = index === selectedIndex;
              return (
                <Pressable
                  key={`${pair.from.id}-${pair.to.id}`}
                  onPress={() => {
                    onSelect(index);
                    setIsOpen(false);
                  }}
                  style={({ pressed }) => [
                    styles.option,
                    {
                      backgroundColor: isSelected ? colors.primary : colors.surface,
                    },
                    pressed && styles.pressed,
                  ]}
                >
                  <Text
                    style={[
                      styles.optionText,
                      { color: isSelected ? '#FFFFFF' : colors.textPrimary },
                    ]}
                  >
                    {formatPairLabel(pair)}
                  </Text>
                  {isSelected && (
                    <MaterialCommunityIcons name="check" size={20} color="#FFFFFF" />
                  )}
                </Pressable>
              );
            })}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

function formatPairLabel(pair: ConversionPair) {
  return `${pair.from.name} (${pair.from.abbreviation}) → ${pair.to.name} (${pair.to.abbreviation})`;
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    paddingHorizontal: spacing.xs,
  },
  trigger: {
    minHeight: 52,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  triggerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'flex-end',
    padding: spacing.md,
  },
  menu: {
    borderRadius: 16,
    borderWidth: 1,
    padding: spacing.sm,
    gap: spacing.xs,
  },
  menuTitle: {
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    textTransform: 'uppercase',
  },
  option: {
    minHeight: 48,
    borderRadius: 10,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});
