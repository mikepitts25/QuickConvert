import { Pressable, Text, StyleSheet } from 'react-native';
import { Category } from '../types';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

interface Props {
  category: Category;
  onPress: () => void;
}

export function CategoryCard({ category, onPress }: Props) {
  const firstPair = category.pairs[0];
  const subtitle = firstPair
    ? `${firstPair.from.abbreviation} \u2194 ${firstPair.to.abbreviation}`
    : 'Size charts';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: category.color },
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.icon}>{category.icon}</Text>
      <Text style={styles.name}>{category.name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 16,
    padding: spacing.md,
    margin: spacing.sm,
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  icon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
