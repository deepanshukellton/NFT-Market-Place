import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header'; 
import Home from './routes/Home';

import Footer from './components/Footer';



const AppRouter : React.FC = ()=>(
    <BrowserRouter>
        <div>
        <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                
                
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;
