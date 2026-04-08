import { ConversionFormula } from '../types';

export function convert(
  value: number,
  conversion: ConversionFormula,
  direction: 'toMetric' | 'fromMetric'
): number {
  if (conversion.type === 'factor') {
    return direction === 'toMetric'
      ? value * conversion.factor
      : value / conversion.factor;
  }
  return direction === 'toMetric'
    ? conversion.toMetric(value)
    : conversion.fromMetric(value);
}
