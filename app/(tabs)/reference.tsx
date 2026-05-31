import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { womensSizes, mensSizes, childrensSizes } from '../../src/data/clothingSizes';
import { SizeTable } from '../../src/components/SizeTable';
import { useAppTheme } from '../../src/theme/theme-context';
import { spacing } from '../../src/theme/spacing';

function SectionHeader({ title }: { title: string }) {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.sectionHeader, { borderBottomColor: colors.primary }]}>
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>{title}</Text>
    </View>
  );
}

export default function ReferenceScreen() {
  const { colors } = useAppTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <Stack.Screen
        options={{
          title: 'Clothing',
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
        }}
      />
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.textPrimary }]}>Size Reference</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
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

      <Text style={[styles.disclaimer, { color: colors.textSecondary }]}>
        Sizes are approximate and may vary by brand. When in doubt, try before you buy!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: spacing.md,
    paddingBottom: 40,
  },
  header: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  sectionHeader: {
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    borderBottomWidth: 2,
    paddingBottom: spacing.xs,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  disclaimer: {
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
  },
});
