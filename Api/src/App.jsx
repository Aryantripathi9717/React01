import { useContext, useState } from "react";
import { ThemeContext, UserContext, LangContext } from "./context";

const App = ()=>{
  const {theme , toggleTheme} = useContext(ThemeContext)
  const {lang, setLang} = useContext(LangContext)
  const {user, setUser} = useContext(UserContext)

  return (
    <>
    <h1>Theme:{theme}</h1>
    <button onClick={toggleTheme}>{theme==="light"? "dark" : "light"}</button>
    <h1>Lang: {lang}</h1>
    <button onClick={()=>setLang((prev)=>(prev==="en" ? "hindi" : "en"))}>{lang==="en" ? "hindi" : "en"}</button>
    <h1>User:{user.name}</h1>
    </>
  )
}
export default App;