import { FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { categories } from '../data/categories';
import { CategoryCard } from './CategoryCard';
import { spacing } from '../theme/spacing';
import { Category } from '../types';

export function CategoryGrid() {
  const router = useRouter();

  const handlePress = (category: Category) => {
    if (category.id === 'clothing') {
      // Navigate to reference tab for clothing
      router.push('/(tabs)/reference');
    } else {
      router.push(`/converter/${category.id}`);
    }
  };

  return (
    <FlatList
      data={categories}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CategoryCard category={item} onPress={() => handlePress(item)} />
      )}
      contentContainerStyle={styles.grid}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: spacing.sm,
    paddingBottom: spacing.xl,
  },
});
