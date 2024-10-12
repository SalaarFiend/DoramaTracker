import {View} from 'tamagui';
import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PixelText} from '../PixelText';
import {useItemsStore} from '../../../entities';
import {AppColors} from '../Colors/colors';

export function NavigationHeader({options, route}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  const {top} = useSafeAreaInsets();

  const {items} = useItemsStore();
  return (
    <View
      paddingTop={top}
      flexDirection="row"
      paddingHorizontal={10}
      justifyContent="space-between"
      borderBottomWidth={3}
      paddingBottom={12}>
      <PixelText fontWeight={'bold'}>{title}</PixelText>
      <PixelText
        fontWeight={'bold'}
        color={
          AppColors.alternateTextColor
        }>{`Total: ${items.length}`}</PixelText>
    </View>
  );
}
