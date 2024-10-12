import React from 'react';
import {View} from 'tamagui';
import {AppColors, List} from '../../shared/Ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useItemsStore} from '../../entities';

const {
  background: {backgroundBaseColor},
} = AppColors;

export function ListViewScreen(): React.JSX.Element {
  const {bottom} = useSafeAreaInsets();

  const {items} = useItemsStore();
  return (
    <View paddingBottom={bottom} backgroundColor={backgroundBaseColor} flex={1}>
      <List data={items} />
    </View>
  );
}
