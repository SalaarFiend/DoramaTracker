import {NavigationContainer} from '@react-navigation/native';
import {config} from '@tamagui/config';
import {createTamagui, TamaguiProvider} from '@tamagui/core';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AlertDialog, Button, PortalProvider, XStack, YStack} from 'tamagui';
import {StackNavigator} from './navigation/navigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import dayjs from 'dayjs';

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf {}
}

export function AlertDialogDemo() {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>
        <Button>Show Alert</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{opacity: 0}}
          exitStyle={{opacity: 0}}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{x: 0, y: -20, opacity: 0, scale: 0.9}}
          exitStyle={{x: 0, y: 10, opacity: 0, scale: 0.95}}
          x={0}
          scale={1}
          opacity={1}
          y={0}>
          <YStack space>
            <AlertDialog.Title>Accept</AlertDialog.Title>
            <AlertDialog.Description>
              By pressing yes, you accept our terms and conditions.
            </AlertDialog.Description>

            <XStack gap="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button>Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button theme="active">Accept</Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PortalProvider>
          <TamaguiProvider config={tamaguiConfig}>
            <StackNavigator />
          </TamaguiProvider>
        </PortalProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
