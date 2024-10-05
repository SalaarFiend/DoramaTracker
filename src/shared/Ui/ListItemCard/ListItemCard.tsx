import React from 'react';
import {styled, View} from 'tamagui';
import {PixelText} from '../PixelText';
import {EPixelEmojiMap, PixelEmoji} from '../PixelEmoji';
import {ListItemCardType} from '../../../entities';

export const CARD_SIZE = 100;

export const ListItemCard = ({
  name,
  status,
  rate,
}: ListItemCardType): React.JSX.Element => {
  return (
    <Card>
      <View flex={0.4}>
        <PixelEmoji
          width={30}
          height={30}
          emoji={EPixelEmojiMap.HandCrossFingerHeart}
        />
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
  borderWidth: 3,
  borderColor: 'black',
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
  borderWidth: 3,
  height: 20,
  width: 40,
  marginTop: 12,
  justifyContent: 'center',
});

const StatusText = styled(PixelText, {
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
});

const StatusWrap = styled(View, {
  flex: 0.4,
});

const RateNumber = styled(View, {
  borderWidth: 3,
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
