import React from 'react';
import {AppColors} from '../../shared/Ui';
import {Text, View} from 'tamagui';

const {
  background: {backgroundBaseColor},
} = AppColors;

export function EditScreen() {
  return (
    <View backgroundColor={backgroundBaseColor}>
      <Text>EditScreen</Text>
    </View>
  );
}
