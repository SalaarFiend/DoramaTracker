import React, {memo, useMemo, useState} from 'react';
import {Slider, styled, View} from 'tamagui';
import {PixelText} from '../PixelText';
import {AppColors} from '../Colors';

const {rate} = AppColors;

const MAX_WIDTH_SLIDER = 300;

const colorMap = (value: number) => {
  if (value <= 30) {
    return rate.zeroToThree;
  }

  if (value > 30 && value <= 65) {
    return rate.fourToSix;
  }

  if (value >= 70 && value <= 100) {
    return rate.sevenToTen;
  }
};

export const PixelSlider = memo(function PixelSlider() {
  const [value, setValue] = useState([10]);

  const rateValue = useMemo(() => value[0] / 10, [value]);
  return (
    <View>
      <RowRateText>
        <RateText>0</RateText>
        <RateNumber backgroundColor={colorMap(value[0])}>
          <CurrentRateText>{rateValue.toFixed(1)}</CurrentRateText>
        </RateNumber>
        <RateText>10</RateText>
      </RowRateText>
      <Slider
        width={MAX_WIDTH_SLIDER}
        defaultValue={[10]}
        value={value}
        max={100}
        min={0}
        step={5}
        onValueChange={setValue}>
        <Slider.Track
          backgroundColor={'white'}
          borderWidth={4}
          height={16}
          borderRadius={0}>
          <Slider.TrackActive backgroundColor={colorMap(value[0])} />
        </Slider.Track>
        <Slider.Thumb
          index={0}
          size={'$3'}
          borderWidth={4}
          backgroundColor={colorMap(value[0])}
          borderColor={'black'}
        />
      </Slider>
    </View>
  );
});

const RateText = styled(PixelText, {
  fontWeight: 'bold',
  fontSize: 18,
});

const RowRateText = styled(View, {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: MAX_WIDTH_SLIDER,
  marginBottom: 18,
  alignItems: 'center',
});

const RateNumber = styled(View, {
  borderWidth: 3,
  borderColor: 'black',
  paddingVertical: 2,
  paddingHorizontal: 7,
  width: 60,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
});

const CurrentRateText = styled(PixelText, {
  fontWeight: 'bold',
  color: 'white',
});
