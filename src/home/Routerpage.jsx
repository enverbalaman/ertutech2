import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadTop from '../components/LoadTop';
import BackToTop from '../components/BackToTop';
import OnepageEight from '../onepage/OnepageEight';




function RouterPage() {
    return (
        <div>
            <Router>
                <LoadTop />
                <Routes>
                    <Route path="/" element={<OnepageEight />}></Route>                    
                </Routes>
                <BackToTop />
            </Router>
        </div>
    )
}

export default RouterPage