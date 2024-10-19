import React from 'react';
import {AppColors, PixelText, PixelTextStyle} from '../../shared/Ui';
import {Input, styled, View, YStack} from 'tamagui';
import {Keyboard} from 'react-native';

const {
  background: {backgroundBaseColor},
  border: {baseBorder},
} = AppColors;

export function EditScreen() {
  return (
    <View
      flex={1}
      backgroundColor={backgroundBaseColor}
      onTouchStart={Keyboard.dismiss}>
      <YStack flex={1} paddingVertical={12} paddingHorizontal={16}>
        <LabelForInput>Name</LabelForInput>
        <PixelInput />
        <View alignItems="center" marginVertical={12}>
          <LabelForInput>Rate</LabelForInput>
          <PixelInput width={100} keyboardType="number-pad" maxLength={3} />
        </View>
      </YStack>
    </View>
  );
}



const PixelInput = styled(Input, {
  backgroundColor: 'white',
  borderRadius: 0,
  borderWidth: 4,
  borderColor: baseBorder,
  ...PixelTextStyle,
  textAlign: 'center',
});

const LabelForInput = styled(PixelText, {
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 10,
  marginBottom: 4,
});
