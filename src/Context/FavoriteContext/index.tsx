/* eslint-disable prettier/prettier */
import { ProductData } from '@root/src/Types/ProductType/Product';
import React from 'react';

type SaveProviderModel = {
  add: (product: ProductData) => void,
  remove: (product: ProductData) => void,
}

export const FavoriteStateContext = React.createContext(
  // eslint-disable-next-line no-array-constructor
  new Array<ProductData>(),
);

export const FavoriteSaveContext = React.createContext<SaveProviderModel>({
  add: () => {},
  remove: () => {},
});

export const FavoriteContextProvider = ({children}: {children: React.ReactNode}) => {
  const [favorite, setFavorite] = React.useState<ProductData[]>([]);

  const removeFromFavorite = React.useCallback(
    (product: ProductData) => {
      const newFavorite = favorite.filter(e => e.id !== product.id);
      if (newFavorite !== null || newFavorite !== undefined) {
        setFavorite([...newFavorite]);
      } else {
      }
    },
    [setFavorite, favorite],
  );

  const addToFavorite = React.useCallback(
    (product: ProductData) => {
      const hasValue = favorite.filter((e) => e.id === product.id);
      if (Array.isArray(hasValue) && hasValue.length > 0) {
        setFavorite([{...product}, ...favorite]);
        removeFromFavorite(product);
      } else {
        setFavorite([{...product}, ...favorite]);
      }
    },
    [setFavorite, favorite, removeFromFavorite],
  );


  const hooks = React.useMemo(
    () => ({
      add: (product: ProductData) => addToFavorite(product),
      remove: (product: ProductData) => removeFromFavorite(product),
    }),
    [addToFavorite, removeFromFavorite],
  );

  return (
    <FavoriteStateContext.Provider value={[...favorite]}>
      <FavoriteSaveContext.Provider value={hooks}>
        {children}
      </FavoriteSaveContext.Provider>
    </FavoriteStateContext.Provider>
  );
};

export const useFavoriteState = () => React.useContext(FavoriteStateContext);
export const useFavoriteSave = () => React.useContext(FavoriteSaveContext);
