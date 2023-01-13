import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Header from '../Components/Header';
import OurValues from '../Components/OurValues';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <div>
            <NavbarComponent />
            <Header />
            <OurValues />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default HomePage;
