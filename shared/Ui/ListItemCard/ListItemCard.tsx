import React from 'react';
import {styled, Text, View} from 'tamagui';
import type {ListItemCardType} from './types';
import {PixelText} from '../PixelText';

export const CARD_SIZE = 100;

export const ListItemCard = ({
  name,
  status,
  rate,
}: ListItemCardType): React.JSX.Element => {
  return (
    <Card>
      <View flex={0.6}>
        <EmojiAvatar />
      </View>
      <View flex={2.5}>
        <CardText numberOfLines={2}>{name}</CardText>
        <DateText>{`14.01.24 - 14.02.24 `}</DateText>
      </View>
      <StatusWrap>
        <RateNumber>
          <RateNumberText>{rate}</RateNumberText>
        </RateNumber>
        <StatusBlock>
          <StatusText>{status}</StatusText>
        </StatusBlock>
      </StatusWrap>
    </Card>
  );
};

const Card = styled(View, {
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 16,
  backgroundColor: 'white',
  paddingVertical: 10,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  maxHeight: CARD_SIZE,
  height: CARD_SIZE,
  paddingHorizontal: 10,
  marginVertical: 6,
});

const DateText = styled(PixelText, {
  color: '#A39BF9',
  fontSize: 12,
});

const CardText = styled(PixelText, {
  color: 'black',
  fontSize: 14,
  lineHeight: 20,
  fontWeight: 'bold',
  marginBottom: 4,
});

const StatusBlock = styled(View, {
  backgroundColor: '#6ED374',
  alignItems: 'center',
  borderRadius: 100,
  borderWidth: 2,
  height: 20,
  width: 40,
  marginTop: 12,
  justifyContent: 'center',
});

const StatusText = styled(PixelText, {
  color: 'white',
  fontSize: 12,
  // fontWeight: 'bold',
});

const StatusWrap = styled(View, {
  flex: 0.4,
});

const RateNumber = styled(View, {
  borderWidth: 2,
  borderRadius: 8,
  borderColor: 'black',
  paddingVertical: 2,
  paddingHorizontal: 7,
  width: 40,
  height: 40,
  alignItems: 'center',
  justifyContent: 'center',
});

const RateNumberText = styled(PixelText, {
  color: 'black',
  fontSize: 20,
});

const EmojiAvatar = styled(View, {
  width: 50,
  height: 50,
  borderWidth: 2,
  borderRadius: 100,
  backgroundColor: '#E9ABFB',
});
