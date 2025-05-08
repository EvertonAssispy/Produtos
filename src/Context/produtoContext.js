import { createContext, useContext } from 'react';

export const ProdutosContext = createContext();

export function useProdutosContext() {
  return useContext(ProdutosContext);
}

export const ListContext = createContext()

export function useListContext() {
  return useContext(ListContext);
}


