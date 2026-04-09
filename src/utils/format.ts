export function formatResult(value: number): string {
  if (!isFinite(value)) return '';
  if (value === 0) return '0';

  const abs = Math.abs(value);
  if (abs >= 1000) return value.toFixed(1);
  if (abs >= 100) return value.toFixed(2);
  if (abs >= 1) return value.toFixed(2);
  if (abs >= 0.01) return value.toFixed(4);
  return value.toPrecision(4);
}

export function parseInput(text: string): number | null {
  const cleaned = text.replace(/[^0-9.\-]/g, '');
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return null;
  const num = parseFloat(cleaned);
  return isNaN(num) ? null : num;
}
