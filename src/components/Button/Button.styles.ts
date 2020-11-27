import { borderRadiusBase, colors, fontSizes, fontWeights, gutter, shadow } from '@theme';
import { TextStyle, ViewStyle } from 'react-native';

export type StyleProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'transparent' | 'flat' | 'outlined';
  color?: 'primary' | 'dark' | 'light' | 'medium' | 'danger' | 'success';
  block?: boolean;
  disabled?: boolean;
};

const sizes = {
  small: 32,
  medium: 44,
  large: 56,
};

function getVariantStyles(props: StyleProps): [ViewStyle, TextStyle] {
  const color = colors[props.color || 'primary'];
  const variant = props.variant || 'flat';

  if (variant === 'transparent') {
    return [{}, { color }];
  }

  if (variant === 'flat') {
    return [{ backgroundColor: color, ...shadow(1) }, { color: props.color === 'light' ? colors.text : colors.white }];
  }

  if (variant === 'outlined') {
    return [{ borderWidth: 1, borderColor: props.color === 'dark' ? colors.medium : color }, { color }];
  }

  return [{}, {}];
}

export function getButtonStyle(props: StyleProps): [ViewStyle, TextStyle, TextStyle] {
  const variantStyles = getVariantStyles(props);

  return [
    {
      borderRadius: borderRadiusBase,
      justifyContent: props.block ? 'center' : 'flex-start',
      paddingHorizontal: gutter * 2,
      height: sizes[props.size || 'medium'],
      alignItems: 'center',
      flexDirection: 'row',
      ...variantStyles[0],
      ...(props.disabled ? { backgroundColor: colors.medium } : {}),
    },
    {
      textTransform: 'uppercase',
      fontSize: fontSizes.small,
      fontFamily: fontWeights.Bold,
      ...variantStyles[1],
    },
    {
      fontSize: fontSizes.medium,
      ...variantStyles[1],
    },
  ];
}
