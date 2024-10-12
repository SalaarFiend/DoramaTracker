import React from 'react';
import {View} from 'tamagui';
import {List} from '../../shared/Ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useItemsStore} from '../../entities';

export function ListViewScreen(): React.JSX.Element {
  const {bottom} = useSafeAreaInsets();

  const {items} = useItemsStore();
  return (
    <View paddingBottom={bottom} backgroundColor={'#A39BF9'} flex={1}>
      <List data={items} />
    </View>
  );
}
