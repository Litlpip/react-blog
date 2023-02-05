import * as React from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import {Suspense} from "react";
import {useTheme} from "./Theme/useTheme";
import {classNames} from "./helpers/classNames";

export const App = () => {
    const {theme, toggleTheme}= useTheme()
    return (
        <div className={classNames('App',{hovered: true},[theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Информация</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}></Route>
                <Route path={'/about'} element={<AboutPageAsync/>}></Route>
            </Routes>
            </Suspense>
        </div>
    );
};
