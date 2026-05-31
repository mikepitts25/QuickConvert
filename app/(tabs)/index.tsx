import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { CategoryGrid } from '../../src/components/CategoryGrid';
import { ThemeToggleButton } from '../../src/components/ThemeToggleButton';
import { useAppTheme } from '../../src/theme/theme-context';
import { spacing } from '../../src/theme/spacing';

export default function HomeScreen() {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <View style={styles.wordmark}>
            <View
              style={[
                styles.travelBadge,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="navigation-variant"
                size={15}
                color={colors.primary}
              />
              <Text style={[styles.travelText, { color: colors.primary }]}>
                Travel
              </Text>
            </View>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.78}
              style={[styles.title, { color: colors.textPrimary }]}
            >
              Quick Convert
            </Text>
          </View>
          <View style={styles.themeButton}>
            <ThemeToggleButton />
          </View>
        </View>
      </View>
      <CategoryGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 70,
  },
  themeButton: {
    position: 'absolute',
    right: 0,
  },
  wordmark: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 58,
    gap: 5,
  },
  travelBadge: {
    minHeight: 26,
    borderRadius: 13,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  travelText: {
    fontSize: 13,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
  },
});
