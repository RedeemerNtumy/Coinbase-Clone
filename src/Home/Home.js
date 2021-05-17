import React from 'react';
import Ample from '../Components/Ample/Ample';
import Crypto from '../Components/Crypto/Crypto';
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Bluebar from '../Components/Bluebar/Bluebar'
import Footer from '../Components/Footer/Footer'
import Discover from '../Components/Discover/Discover'
import Manage from '../Components/Manage/Manage'
import Trustsection from '../Components/Trustsection/Trustsection'
import Steps from '../Components/Steps/Steps'
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Crypto />
            <Ample />
            <Manage />
            <Trustsection />
            <Bluebar />
            <Steps />
            <Discover />
            <Footer />
        </div>
    );
}

export default Home;