import { View, Text, StyleSheet } from 'react-native';
import { SizeLookupTable } from '../types';
import { useAppTheme } from '../theme/theme-context';
import { spacing } from '../theme/spacing';

interface Props {
  table: SizeLookupTable;
}

export function SizeTable({ table }: Props) {
  const { colors, mode } = useAppTheme();
  const evenRowColor = mode === 'dark' ? colors.inputBackground : '#F3F4F6';

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>{table.name}</Text>
      <View style={[styles.table, { borderColor: colors.border }]}>
        <View style={[styles.headerRow, { backgroundColor: colors.primary }]}>
          {table.columns.map((col) => (
            <View key={col} style={styles.cell}>
              <Text style={styles.headerText}>{col}</Text>
            </View>
          ))}
        </View>
        {table.rows.map((row, i) => (
          <View
            key={i}
            style={[
              styles.row,
              { backgroundColor: i % 2 === 0 ? evenRowColor : colors.surface },
            ]}
          >
            {row.map((cell, j) => (
              <View key={j} style={styles.cell}>
                <Text style={[styles.cellText, { color: colors.textPrimary }]}>{cell}</Text>
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
    marginBottom: spacing.sm,
  },
  table: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
  },
  headerRow: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
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
  },
});
