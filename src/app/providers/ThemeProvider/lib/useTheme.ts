import { useContext } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    ThemeContext,
    ThemeType,
} from './ThemeContext'

interface useThemeResult {
    theme: ThemeType
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
