'use client'

import { createContext, useState, FC, ReactNode } from "react";

const SearchContext = createContext({})

const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [filterSearch, setFilterSearch] = useState("hello")
    return (
        <SearchContext.Provider value={{filterSearch, setFilterSearch}}>{children}</SearchContext.Provider>
    )
}

export default SearchProvider