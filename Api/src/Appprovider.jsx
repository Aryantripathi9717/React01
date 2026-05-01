// import { useState } from "react";

import { useReducer } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";
 //here we are creating provider component to wrap the application with provider and pass the value to the provider and consume the context in the required component using useContext hook

// Reducer decides how the state changes where action tells what to do
function useReducer(state,action){
    switch(action.type){
        case "TOGGLE_THEME":
            return {
                ...state,
                theme : state.theme === "light" ? "dark" : "light"
            };

        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };

            case "SET_LANG":
                return {
                    ...state,
                    lang: action.payload
                };
                default: return {
                    state,
                }
    }
}

const AppProvider = ({children})=>{

    const initialState = {
        theme: "light",
        lang: "en",
        user: {name: "Guest"}
    }

    const [state,dispatch] = useReducer(reducer,initialState)

    // const [theme,setTheme] = useState("light")
    // const [lang, setLang] = useState("en")
    // const [user, setUser] = useState({name: "Guest"})

    const toggleTheme =()=>{
        setTheme(prev=>(prev==="light" ? "dark" : "light"));
    }
    
    return(

    //     <ThemeContext.Provider value={{theme,toggleTheme}}>
    //     <LangContext value={{lang,setLang}}>
    //         <UserContext value={{user,setUser}}>
    //             {children}
    //         </UserContext>
    //     </LangContext>
    // </ThemeContext.Provider>
    <GlobalContext.Provider value={{state,dispatch}}>
        {children}
    </GlobalContext.Provider>
    )
}
export default AppProvider;