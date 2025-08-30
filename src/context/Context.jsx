import { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);
// console.log(AppContext)
export const AppProvider = (props) => {
    const [activeNav, setActiveNav] = useState('About');
    return (
        <AppContext.Provider value={{activeNav,setActiveNav}}>
            {props.children}
        </AppContext.Provider>
    )
}
// custom hook
export const useAppContext = () => useContext(AppContext);
