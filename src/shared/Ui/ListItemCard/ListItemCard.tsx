import React, {useCallback} from 'react';
import {styled, View} from 'tamagui';
import {PixelText} from '../PixelText';

import {ListItemCardType} from '../../../entities';
import {AppColors} from '../Colors/colors';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EScreens, RootStackNavigationProp} from '../../../app/navigation';
import {CustomIcon, IconNames} from '../Icon';

export const CARD_SIZE = 100;

const {textColors} = AppColors;

export const ListItemCard = ({
  name,
  status,
  rate,
  id,
}: ListItemCardType): React.JSX.Element => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const goToEdit = useCallback(() => {
    navigation.navigate(EScreens.EditScreen, {id});
  }, []);

  return (
    <Pressable onPress={goToEdit} key={name + rate}>
      <Card>
        <View flex={0.4}>
          <CustomIcon name={IconNames.HandCrossFingerHeart} size={30} />
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
    </Pressable>
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
  color: textColors.alternateTextColor,
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
