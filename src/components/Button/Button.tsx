import { margin } from '@theme';
import React, { ComponentProps, forwardRef } from 'react';
import { Pressable, ViewStyle } from 'react-native';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import { getButtonStyle, StyleProps } from './Button.styles';

type Props = ComponentProps<typeof Pressable> &
  StyleProps & {
    text?: string;
    icon?: string;
    iconLeft?: string;
    iconRight?: string;
  };

// @ts-ignore
const Button = forwardRef<Pressable, Props>(({ children, text, icon, iconLeft, iconRight, style, ...props }, ref) => {
  const [buttonStyle, textStyle, iconStyle] = getButtonStyle(props);

  return (
    // @ts-ignore
    <Pressable ref={ref as any} {...props} style={[buttonStyle, style as ViewStyle]}>
      {children ? (
        children
      ) : icon ? (
        <Icon style={iconStyle} name={icon} />
      ) : (
        <>
          {iconLeft && <Icon style={[iconStyle, margin.small.right]} name={iconLeft} />}
          {text && <Text style={textStyle}>{text}</Text>}
          {iconRight && <Icon style={[iconStyle, margin.small.left]} name={iconRight} />}
        </>
      )}
    </Pressable>
  );
});

export default Button;
