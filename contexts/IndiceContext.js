'use client'

// importações de dependências:
import { createContext, useContext, useState } from "react";

const IndiceContext = createContext();

export function IndiceProvider({ children }) {
  const [ indice, setIndice ] = useState([]);
  const [ titulo, setTitulo ] = useState("");
  
  return (
    <IndiceContext.Provider value={{ indice, setIndice, titulo, setTitulo }}>
      {children}
    </IndiceContext.Provider>
  );
}

export function useIndice() {
  return useContext(IndiceContext);
}
