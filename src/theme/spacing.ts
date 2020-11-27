import { ViewStyle } from 'react-native';
import { gutterLarge, gutterMedium, gutterSmall } from './constants';

type SpacingDirections = {
  left: ViewStyle;
  right: ViewStyle;
  top: ViewStyle;
  bottom: ViewStyle;
  x: ViewStyle;
  y: ViewStyle;
  all: ViewStyle;
};

type SpacingSizes = {
  none: SpacingDirections;
  small: SpacingDirections;
  medium: SpacingDirections;
  large: SpacingDirections;
};

function makeSpacingDirections(type: 'padding' | 'margin', value: number): SpacingDirections {
  return {
    left: { [`${type}Left`]: value },
    right: { [`${type}Right`]: value },
    top: { [`${type}Top`]: value },
    bottom: { [`${type}Bottom`]: value },
    x: { [`${type}Left`]: value, [`${type}Right`]: value },
    y: { [`${type}Top`]: value, [`${type}Bottom`]: value },
    all: { [`${type}Left`]: value, [`${type}Right`]: value, [`${type}Top`]: value, [`${type}Bottom`]: value },
  };
}

export const margin: SpacingSizes = {
  none: makeSpacingDirections('margin', 0),
  small: makeSpacingDirections('margin', gutterSmall),
  medium: makeSpacingDirections('margin', gutterMedium),
  large: makeSpacingDirections('margin', gutterLarge),
};

export const padding: SpacingSizes = {
  none: makeSpacingDirections('padding', 0),
  small: makeSpacingDirections('padding', gutterSmall),
  medium: makeSpacingDirections('padding', gutterMedium),
  large: makeSpacingDirections('padding', gutterLarge),
};
