import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { getCategoryById } from '../../src/data/categories';
import { ConverterInput } from '../../src/components/ConverterInput';
import { UnitPicker } from '../../src/components/UnitPicker';
import { PresetList } from '../../src/components/PresetList';
import { useConversion } from '../../src/hooks/useConversion';
import { useAppTheme } from '../../src/theme/theme-context';
import { spacing } from '../../src/theme/spacing';

export default function ConverterScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const { colors } = useAppTheme();
  const category = getCategoryById(categoryId ?? '');
  const [pairIndex, setPairIndex] = useState(0);

  const pair = category?.pairs[pairIndex];
  const { fromText, toText, updateFrom, updateTo, applyPreset, clear } =
    useConversion(pair ?? category?.pairs[0]!);

  useEffect(() => {
    clear();
  }, [pairIndex, clear]);

  if (!category || category.pairs.length === 0) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Stack.Screen options={{ title: category?.name ?? 'Converter' }} />
        <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
          See the Reference tab for {category?.name ?? 'this category'}.
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: colors.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack.Screen
        options={{
          title: category.name,
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
        }}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <UnitPicker
          pairs={category.pairs}
          selectedIndex={pairIndex}
          onSelect={setPairIndex}
        />

        <View style={styles.converterArea}>
          <ConverterInput
            unit={pair!.from}
            value={fromText}
            onChangeText={updateFrom}
            autoFocus
          />

          <ConverterInput
            unit={pair!.to}
            value={toText}
            onChangeText={updateTo}
          />
        </View>

        {category.presets && category.presets.length > 0 && (
          <PresetList presets={category.presets} onSelect={applyPreset} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
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
  converterArea: {
    marginTop: spacing.md,
    gap: 0,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 60,
    fontSize: 16,
    paddingHorizontal: spacing.lg,
  },
});
