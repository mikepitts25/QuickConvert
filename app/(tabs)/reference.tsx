import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { womensSizes, mensSizes, childrensSizes } from '../../src/data/clothingSizes';
import { SizeTable } from '../../src/components/SizeTable';
import { colors } from '../../src/theme/colors';
import { spacing } from '../../src/theme/spacing';

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
}

export default function ReferenceScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Size Reference</Text>
        <Text style={styles.subtitle}>
          US, EU & UK clothing and shoe sizes
        </Text>
      </View>

      <SectionHeader title="Women's" />
      {womensSizes.map((table) => (
        <SizeTable key={table.id} table={table} />
      ))}

      <SectionHeader title="Men's" />
      {mensSizes.map((table) => (
        <SizeTable key={table.id} table={table} />
      ))}

      <SectionHeader title="Children's" />
      {childrensSizes.map((table) => (
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
  sectionHeader: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    paddingBottom: spacing.xs,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
  },
  disclaimer: {
    fontSize: 12,
    color: colors.textSecondary,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
  },
});
