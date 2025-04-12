import {create} from 'zustand';
// import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CofeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (_set, _get) => ({
      CoffeeList: CoffeeData,
      BeansList: BeansData,
      CartPrice: 0,
      FavouritesList: [],
      CartList: [],
      orderHistoryList: [],
    }),
    {name: 'coffee-app', storage: createJSONStorage(() => AsyncStorage)},
  ),
);
