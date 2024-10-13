import React from 'react';
import {AppColors, PixelSlider, PixelText} from '../../shared/Ui';
import {Input, styled, View, YStack} from 'tamagui';

const {
  background: {backgroundBaseColor},
} = AppColors;

export function EditScreen() {
  return (
    <View flex={1} backgroundColor={backgroundBaseColor}>
      <YStack flex={1} paddingVertical={12} paddingHorizontal={16}>
        <LabelForInput>Name</LabelForInput>
        <PixelInput />
        <View alignItems="center" marginVertical={12}>
          <PixelSlider />
        </View>
      </YStack>
    </View>
  );
}

const PixelInput = styled(Input, {
  backgroundColor: 'white',
  borderRadius: 0,
  borderWidth: 4,
});

const LabelForInput = styled(PixelText, {
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 10,
  marginBottom: 4,
});
