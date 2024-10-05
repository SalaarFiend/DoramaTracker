import React from 'react';
import {View} from 'tamagui';
import {ListItemCard} from '../ListItemCard/';

export const List = (): React.JSX.Element => {
  return (
    <View paddingVertical={12} paddingHorizontal={16} flex={1}>
      <ListItemCard />
    </View>
  );
};
