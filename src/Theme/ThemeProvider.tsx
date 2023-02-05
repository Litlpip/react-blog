import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeContextProps, ThemeType} from "./ThemeContext";

const defaultTheme: ThemeType = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || 'light'

const ThemeProvider:FC = ({children}) => {

    const [theme, setTheme] = useState<ThemeType>(defaultTheme)

    const providerProps: ThemeContextProps = useMemo(()=>({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={providerProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
