import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { sizeTables } from '../../src/data/clothingSizes';
import { SizeTable } from '../../src/components/SizeTable';
import { colors } from '../../src/theme/colors';
import { spacing } from '../../src/theme/spacing';

export default function ReferenceScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Size Reference</Text>
        <Text style={styles.subtitle}>
          US, EU & UK clothing and shoe sizes
        </Text>
      </View>
      {sizeTables.map((table) => (
        <SizeTable key={table.id} table={table} />
      ))}
      <Text style={styles.disclaimer}>
        Sizes are approximate and may vary by brand. When in doubt, try before you buy!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
    paddingTop: 60,
    paddingBottom: 40,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
  },
});
