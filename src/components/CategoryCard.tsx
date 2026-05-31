import { Pressable, Text, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Category } from '../types';
import { useAppTheme } from '../theme/theme-context';
import { spacing } from '../theme/spacing';

interface Props {
  category: Category;
  onPress: () => void;
}

export function CategoryCard({ category, onPress }: Props) {
  const { colors } = useAppTheme();
  const firstPair = category.pairs[0];
  const subtitle = firstPair
    ? `${firstPair.from.abbreviation} \u2194 ${firstPair.to.abbreviation}`
    : 'Size charts';
  const cardColor = (colors as Record<string, string>)[category.id] ?? category.color;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: cardColor,
          borderColor: colors.border,
        },
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.iconBadge, { backgroundColor: category.icon.backgroundColor }]}>
        <MaterialCommunityIcons
          name={category.icon.name}
          size={30}
          color={category.icon.color}
        />
      </View>
      <Text style={[styles.name, { color: colors.textPrimary }]}>{category.name}</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
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
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 12,
  },
});
