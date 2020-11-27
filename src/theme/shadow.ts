function interpolate(i: number, a: number, b: number, a2: number, b2: number): number {
  return ((i - a) * (b2 - a2)) / (b - a) + a2;
}

// https://ethercreative.github.io/react-native-shadow-generator/
export const shadow = (depth: number) => ({
  // Android
  elevation: depth,
  // iOS
  shadowColor: '#000',
  shadowOffset: { width: 0, height: depth === 1 ? 1 : Math.floor(depth * 0.5) },
  shadowOpacity: interpolate(depth - 1, 1, 24, 0.2, 0.6),
  shadowRadius: interpolate(depth * 1.49, 1, 38, 1, 16),
});
