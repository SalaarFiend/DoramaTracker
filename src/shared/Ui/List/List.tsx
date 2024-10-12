import React, {useCallback} from 'react';
import {View} from 'tamagui';
import {ListItemCard} from '../ListItemCard';
import {FlashList} from '@shopify/flash-list';
import {CARD_SIZE} from '../ListItemCard/ListItemCard';
import {ListItemCardType} from '../../../entities';

type Props = {
  data: ListItemCardType[];
};

export const List = ({data}: Props): React.JSX.Element => {
  const renderItem = useCallback(
    ({item}: {item: ListItemCardType}) => <ListItemCard {...item} />,
    [],
  );
  return (
    <View paddingHorizontal={16} flex={1}>
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={CARD_SIZE}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
