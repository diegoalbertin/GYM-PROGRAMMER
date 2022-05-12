import React from "react";
import {Route, Routes} from 'react-router-dom';
import Navigation_bar from './Navigation-bar';
import Profile from './profile';
import Option from "./Option";
import HomePage from './Home'

function AppRoute (){
    return(
        <>
        <div>
            <Navigation_bar/>
            <Routes>
                <Route exact path="" element={<HomePage />} />
                <Route exact path="/profile" element={<Profile test="ok"/>} />
                <Route exact path="/option" element={<Option/>} />
            </Routes>
        </div>
        </>
    )
}
export default AppRoute;