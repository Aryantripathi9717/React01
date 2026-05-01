import { createContext } from "react";
//first make contexts you required for the application and then make provider component to wrap the application with provider and pass the value to the provider and consume the context in the required component using useContext hook

// //empty context
// export const ThemeContext = createContext()
// export const LangContext = createContext()
// //defaultcontext
// export const UserContext = createContext({name:"Guest"});


export const GlobalContext = createContext();