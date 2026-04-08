import { useState, useCallback } from 'react';
import { ConversionPair } from '../types';
import { convert } from '../utils/convert';
import { formatResult, parseInput } from '../utils/format';

export function useConversion(pair: ConversionPair) {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');

  const updateFrom = useCallback(
    (text: string) => {
      setFromText(text);
      const num = parseInput(text);
      if (num === null) {
        setToText('');
        return;
      }
      const result = convert(num, pair.conversion, 'toMetric');
      setToText(formatResult(result));
    },
    [pair]
  );

  const updateTo = useCallback(
    (text: string) => {
      setToText(text);
      const num = parseInput(text);
      if (num === null) {
        setFromText('');
        return;
      }
      const result = convert(num, pair.conversion, 'fromMetric');
      setFromText(formatResult(result));
    },
    [pair]
  );

  const swap = useCallback(() => {
    const prevTo = toText;
    setFromText(prevTo);
    const num = parseInput(prevTo);
    if (num === null) {
      setToText('');
      return;
    }
    const result = convert(num, pair.conversion, 'toMetric');
    setToText(formatResult(result));
  }, [toText, pair]);

  const applyPreset = useCallback(
    (value: number) => {
      const text = String(value);
      setFromText(text);
      const result = convert(value, pair.conversion, 'toMetric');
      setToText(formatResult(result));
    },
    [pair]
  );

  const clear = useCallback(() => {
    setFromText('');
    setToText('');
  }, []);

  return { fromText, toText, updateFrom, updateTo, swap, applyPreset, clear };
}
