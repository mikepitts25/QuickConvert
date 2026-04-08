import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Unit } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface Props {
  unit: Unit;
  value: string;
  onChangeText: (text: string) => void;
  autoFocus?: boolean;
}

export function ConverterInput({ unit, value, onChangeText, autoFocus }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.abbreviation}>{unit.abbreviation}</Text>
        <Text style={styles.name}>{unit.name}</Text>
      </View>
      <TextInput
        style={styles.input}
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
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
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
    color: colors.primary,
  },
  name: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  input: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.textPrimary,
    padding: 0,
  },
});
