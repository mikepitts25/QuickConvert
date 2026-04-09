import { View, Text, StyleSheet } from 'react-native';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { colors } from '../../src/theme/colors';
import { spacing } from '../../src/theme/spacing';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>QuickConvert</Text>
        <Text style={styles.subtitle}>Common conversions for US expats</Text>
      </View>
      <CategoryGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
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
});
