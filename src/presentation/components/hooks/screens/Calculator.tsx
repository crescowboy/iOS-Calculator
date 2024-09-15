import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {colors, styles} from '../../../../config/theme/app.theme';
import {CalculatorButton} from '../../CalculatorButton';
import {useCalculator} from '../useCalculator';

export const Calculator = () => {
  const {number, prevNumber, buildNumber, toggleSing, clean, deleteOperation,  divideOperation,
    multiplyOperator,
    subtractOperation,
    addOperation, calculatorResult} =
    useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {number}
        </Text>
        <Text  style={styles.subResult}>
          {(prevNumber === '0') ? ' ' : prevNumber}
        </Text>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clean()}
          label="C"
          color={colors.lighGray}
          buttonText="black"
        />
        <CalculatorButton
          onPress={() => toggleSing()}
          label="+/-"
          color={colors.lighGray}
          buttonText="black"
        />
        <CalculatorButton
          onPress={() => deleteOperation()}
          label="del"
          color={colors.lighGray}
          buttonText="black"
        />
        <CalculatorButton
          onPress={divideOperation}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={multiplyOperator}
          label="X"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={subtractOperation}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => buildNumber('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={addOperation}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          color={colors.darkGray}
          dobleSize
        />
        <CalculatorButton
          onPress={() => buildNumber('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={calculatorResult}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};
