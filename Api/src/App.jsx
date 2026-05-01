import { useContext, useState } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";
import { useReducer } from "react";

const App = ()=>{
  // const {theme , toggleTheme} = useContext(ThemeContext)
  // const {lang, setLang} = useContext(LangContext)
  // const {user, setUser} = useContext(UserContext)


      const [state,dispatch] = useReducer(ThemeContext);
      const {theme,lang,user}  = state;

  return (
    <>
    <h1>Theme:{theme}</h1>
    <button onClick={()=>dispatch({type:TOGGLE_THEME})}>ThemeChange</button>
    <h1>Lang: {lang}</h1>
    <button onClick={()=>dispatch({type:SET_LANG,payload:"en"})}>
      en
    </button>
    <h1>User:{user.name}</h1>
    <button onClick={()=>dispatch({type:SET_LANG,payload:"fr"})}>
      fr
    </button>
    </>
  )
}
export default App;