import React, { createContext } from 'react';

type ContextType = {
    name: string;
    age: number
}

type Props = { children?: React.ReactNode}

const initialState = {
    name: "Davies",
    age: 10
}

export const Context = createContext<ContextType>(initialState);

export const ContextProvider/*: React.FC*/ = ({ children }: Props) => {
    return (
        <Context.Provider value={initialState}> 
            { children }
        </Context.Provider>
    );
}