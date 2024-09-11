import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles, colors} from '../../config/theme/app.theme';

interface Props {
  label: string;
  color?: string;
  buttonText?: string;
  dobleSize?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  buttonText = styles.buttonText.color,
  dobleSize,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: dobleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={{...styles.buttonText, color: buttonText}}>{label}</Text>
    </Pressable>
  );
};
