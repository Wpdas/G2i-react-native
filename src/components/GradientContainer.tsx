import React from 'react';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const deviceHeight = Dimensions.get('screen').height;

interface GradientContainerProps {
  readonly children: React.ReactNode;
  readonly colors: string[];
  readonly style?: {};
}

const GradientContainer: React.FC<GradientContainerProps> = ({
  children,
  colors,
  style,
}: GradientContainerProps) => (
  <LinearGradient
    colors={colors}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: deviceHeight,
      ...style,
    }}>
    {children}
  </LinearGradient>
);

export default GradientContainer;
