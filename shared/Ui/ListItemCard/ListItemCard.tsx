import React from 'react';
import {styled, Text, View} from 'tamagui';

const Card = styled(View, {
  borderWidth: 2,
  borderColor: 'black',
  borderRadius: 10,
  backgroundColor: 'white',
  paddingVertical: 10,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  maxHeight: 100,
  paddingHorizontal: 10,
});

const CardText = styled(Text, {
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  flex: 2.5,
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

const StatusText = styled(Text, {
  color: 'white',
  fontSize: 12,
  fontWeight: 'bold',
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

const RateNumberText = styled(Text, {
  color: 'black',
  fontSize: 20,
});

const EmojiAvatar = styled(View, {
  width: 50,
  height: 50,
  borderWidth: 2,
  borderRadius: 100,
  backgroundColor: 'blue',
});

const placeholder = {
  name: 'Бурная жизнь в круглосуточном магазине',
  staus: 'done',
};

export const ListItemCard = (): React.JSX.Element => {
  return (
    <Card>
      <View flex={0.6}>
        <EmojiAvatar />
      </View>
      <CardText>{placeholder.name}</CardText>
      <StatusWrap>
        <RateNumber>
          <RateNumberText>10</RateNumberText>
        </RateNumber>
        <StatusBlock>
          <StatusText>0</StatusText>
        </StatusBlock>
      </StatusWrap>
    </Card>
  );
};
