'use client'

// importações de dependências:
import { createContext, useContext, useState } from "react";

const IndiceContext = createContext();

export function IndiceProvider({ children }) {
  const [indice, setIndice] = useState([]);
  return (
    <IndiceContext.Provider value={{ indice, setIndice }}>
      {children}
    </IndiceContext.Provider>
  );
}

export function useIndice() {
  return useContext(IndiceContext);
}
