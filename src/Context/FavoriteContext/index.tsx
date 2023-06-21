/* eslint-disable prettier/prettier */
import React from 'react';

export const FavoriteStateContext = React.createContext(
  // eslint-disable-next-line no-array-constructor
  new Array<ProductModel>(),
);
export const FavoriteSaveContext = React.createContext<SaveProviderModel>({});

type ProductModel = {
  createdAt: String | string;
  name: String | string;
  image: String | string;
  price: String | string;
  description: String | string;
  model: String | string;
  brand: String | string;
  id: String | string;
};

type SaveProviderModel = {
  add: (product: ProductModel) => void,
  remove: (product: ProductModel) => void,
}

export const FavoriteContextProvider = ({children}: {children: React.ReactNode}) => {
  const [favorite, setFavorite] = React.useState<ProductModel[]>([]);

  const addToFavorite = React.useCallback(
    (product: ProductModel) => {

      setFavorite([{...product}, ...favorite])
    },
    [setFavorite, favorite],
  );
  const removeFromFavorite = React.useCallback(
    (product: ProductModel) => {
      const newFavorite = favorite.filter(e => e.id !== product.id);

      if (newFavorite !== null || newFavorite !== undefined) {
        setFavorite(newFavorite);
      }
    },
    [setFavorite, favorite],
  );

  const api = React.useMemo(
    () => ({
      add: (product: ProductModel) => addToFavorite(product),
      remove: (product: ProductModel) => removeFromFavorite(product),
    }),
    [addToFavorite, removeFromFavorite],
  );

  return (
    <FavoriteStateContext.Provider value={[...favorite]}>
      <FavoriteSaveContext.Provider value={api}>
        {children}
      </FavoriteSaveContext.Provider>
    </FavoriteStateContext.Provider>
  );
};

export const useFavoriteState = () => React.useContext(FavoriteStateContext);
export const useFavoriteSave = () => React.useContext(FavoriteSaveContext);
