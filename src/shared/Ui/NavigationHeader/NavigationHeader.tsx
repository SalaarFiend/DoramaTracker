import {styled, View} from 'tamagui';
import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PixelText} from '../PixelText';
import {useItemsStore} from '../../../entities';
import {AppColors} from '../Colors/colors';

type Props = {
  showItems?: boolean;
} & StackHeaderProps;

export function NavigationHeader({options, route, showItems = false}: Props) {
  const title = getHeaderTitle(options, route.name);

  const {top} = useSafeAreaInsets();

  const {items} = useItemsStore();

  if (!showItems) {
    return (
      <Header paddingTop={top}>
        <PixelText fontWeight={'bold'} textAlign="center">
          {title}
        </PixelText>
      </Header>
    );
  }

  return (
    <Header paddingTop={top} flexDirection="row" justifyContent="space-between">
      <PixelText fontWeight={'bold'}>{title}</PixelText>
      <PixelText
        fontWeight={'bold'}
        color={
          AppColors.textColors.alternateTextColor
        }>{`Total: ${items.length}`}</PixelText>
    </Header>
  );
}

const Header = styled(View, {
  paddingHorizontal: 10,
  borderBottomWidth: 3,
  paddingBottom: 12,
});
