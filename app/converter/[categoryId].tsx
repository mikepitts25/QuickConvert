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
import { SwapButton } from '../../src/components/SwapButton';
import { UnitPicker } from '../../src/components/UnitPicker';
import { PresetList } from '../../src/components/PresetList';
import { useConversion } from '../../src/hooks/useConversion';
import { colors } from '../../src/theme/colors';
import { spacing } from '../../src/theme/spacing';

export default function ConverterScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId ?? '');
  const [pairIndex, setPairIndex] = useState(0);

  const pair = category?.pairs[pairIndex];
  const { fromText, toText, updateFrom, updateTo, swap, applyPreset, clear } =
    useConversion(pair ?? category?.pairs[0]!);

  useEffect(() => {
    clear();
  }, [pairIndex, clear]);

  if (!category || category.pairs.length === 0) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: category?.name ?? 'Converter' }} />
        <Text style={styles.emptyText}>
          See the Reference tab for {category?.name ?? 'this category'}.
        </Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Stack.Screen
        options={{
          title: `${category.icon} ${category.name}`,
          headerStyle: { backgroundColor: colors.background },
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

          <SwapButton onPress={swap} />

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
    backgroundColor: colors.background,
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
    color: colors.textSecondary,
    paddingHorizontal: spacing.lg,
  },
});
