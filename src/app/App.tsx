import * as React from 'react'
import './styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { AppRouter } from 'app/providers/router'

export const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('App', { hovered: true }, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Информация</Link>
            <AppRouter />
        </div>
    )
}
