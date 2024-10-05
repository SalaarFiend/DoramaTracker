import React, {useCallback} from 'react';
import {View} from 'tamagui';
import {ListItemCard} from '../ListItemCard/';
import {FlashList} from '@shopify/flash-list';
import {CARD_SIZE} from '../ListItemCard/ListItemCard';
import {times} from 'lodash';
import {ListItemCardType} from '../ListItemCard/types';

const data: ListItemCardType[] = times(10, (n: number) => ({
  name: n % 2 ? 'Бурная жизнь в круглосуточном магазине' : 'Моё имя',
  status: 'done',
  rate: n,
}));

export const List = (): React.JSX.Element => {
  const renderItem = useCallback(
    ({item}: {item: ListItemCardType}) => <ListItemCard {...item} />,
    [],
  );
  return (
    <View paddingVertical={12} paddingHorizontal={16} flex={1}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={CARD_SIZE}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
