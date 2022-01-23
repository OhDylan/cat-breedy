import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, SearchPage } from './pages';
import './App.css';

const App = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<LandingPage />} ></Route>
                <Route exact path="/search" element={<SearchPage />} ></Route>
            </Routes>
        </div>
    );
}

export default App;
