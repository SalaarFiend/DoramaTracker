import React from 'react';
import {View} from 'tamagui';
import {List} from '../../shared/Ui';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function ListViewScreen(): React.JSX.Element {
  const {top, bottom} = useSafeAreaInsets();
  return (
    <View
      paddingTop={top}
      paddingBottom={bottom}
      backgroundColor={'#A39BF9'}
      flex={1}>
      <List />
    </View>
  );
}
