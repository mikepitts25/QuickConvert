import { View, Text, StyleSheet } from 'react-native';
import { SizeLookupTable } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface Props {
  table: SizeLookupTable;
}

export function SizeTable({ table }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{table.name}</Text>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          {table.columns.map((col) => (
            <View key={col} style={styles.cell}>
              <Text style={styles.headerText}>{col}</Text>
            </View>
          ))}
        </View>
        {table.rows.map((row, i) => (
          <View
            key={i}
            style={[styles.row, i % 2 === 0 && styles.rowEven]}
          >
            {row.map((cell, j) => (
              <View key={j} style={styles.cell}>
                <Text style={styles.cellText}>{cell}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  table: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
  },
  rowEven: {
    backgroundColor: '#F3F4F6',
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cellText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
});
