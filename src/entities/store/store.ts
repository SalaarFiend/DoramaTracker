import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {storageForZustand} from '../../shared/storePersist';
import {ListItemCardType} from '../model/model';
import {times, uniqueId} from 'lodash';

interface State {
  items: ListItemCardType[];
}

const placeholderData = times(
  10,
  (n: number): ListItemCardType => ({
    name: n % 2 ? 'Бурная жизнь в круглосуточном магазине' : 'Моё имя',
    status: 'done',
    rate: n,
    id: uniqueId('item' + n),
  }),
);

export const useItemsStore = create<State>()(
  persist(
    () => ({
      items: placeholderData,
    }),
    {
      name: 'main-storage',
      storage: storageForZustand<State>(),
    },
  ),
);
