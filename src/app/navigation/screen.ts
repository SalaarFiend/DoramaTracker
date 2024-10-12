import {NavigationProp} from '@react-navigation/native';

export enum EScreens {
  ListView = 'ListView',
  EditScreen = 'Edit Screen',
}

export type RootParamsList = {
  [EScreens.EditScreen]: {
    id: string;
  };
  [EScreens.ListView]: undefined;
};

export type RootStackNavigationProp = NavigationProp<RootParamsList>;
