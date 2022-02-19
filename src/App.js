import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'

import Home from './views/Home.js';
import LoginRegister from "./views/LoginRegister";
import NotFound from "./views/NotFound";

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<LoginRegister type='login'/>}/>
                    <Route path='/register' element={<LoginRegister type='register'/>}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
