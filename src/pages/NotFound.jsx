import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import Header from '../Components/Header';
import NotFound from '../Components/NotFound';
import Footer from '../Components/Footer';


function NotFoundPage() {
    return (
        <div>
            <NavbarComponent />
            <Header />
            <NotFound />
            <Footer />
        </div>
    );
}

export default NotFoundPage;