import React from 'react'
import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQS from './sections/faqs/FAQS';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const app = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <FAQS />
            <Contact />
            <Footer />
            <FloatingNav />
        </main>
    )
}

export default app