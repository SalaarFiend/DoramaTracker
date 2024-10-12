import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EScreens} from './screen';
import {EditScreen, ListViewScreen} from '../../screens';
import {NavigationHeader} from '../../shared/Ui';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={EScreens.ListView}
        component={ListViewScreen}
        options={{
          header: props => <NavigationHeader {...props} showItems />,
        }}
      />
      <Stack.Screen
        name={EScreens.EditScreen}
        component={EditScreen}
        options={{
          header: props => <NavigationHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
