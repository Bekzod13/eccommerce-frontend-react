import {useContext, useState, createContext} from 'react';

const Context = createContext({
    user: null,
    token: null,
    setUser: ()=>{},
    setToken: ()=>{},
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem('LARA_TOKEN'));
    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('LARA_TOKEN', token);
        }else{
            localStorage.removeItem('LARA_TOKEN');
        }
    }
    const contextValues = {
        user,
        setUser,
        token,
        setToken
    }

    return (
        <Context.Provider value={contextValues}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
