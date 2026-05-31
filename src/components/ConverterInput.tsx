import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Unit } from '../types';
import { useAppTheme } from '../theme/theme-context';
import { spacing } from '../theme/spacing';

interface Props {
  unit: Unit;
  value: string;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
}

export function ConverterInput({ unit, value, onChangeText, autoFocus }: Props) {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.labelRow}>
        <Text style={[styles.abbreviation, { color: colors.primary }]}>{unit.abbreviation}</Text>
        <Text style={[styles.name, { color: colors.textSecondary }]}>{unit.name}</Text>
      </View>
      <TextInput
        style={[styles.input, { color: colors.textPrimary }]}
        value={value}
        onChangeText={onChangeText}
        keyboardType="decimal-pad"
        placeholder="0"
        placeholderTextColor={colors.textSecondary}
        autoFocus={autoFocus}
        selectTextOnFocus
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
    gap: spacing.sm,
  },
  abbreviation: {
    fontSize: 16,
    fontWeight: '700',
  },
  name: {
    fontSize: 14,
  },
  input: {
    fontSize: 32,
    fontWeight: '600',
    padding: 0,
  },
});
