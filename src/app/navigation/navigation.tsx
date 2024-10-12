import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EScreens} from './screen';
import {ListViewScreen} from '../../screens';
import {NavigationHeader} from '../../shared/Ui';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EScreens.ListView}
        component={ListViewScreen}
        options={{
          header: props => <NavigationHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
