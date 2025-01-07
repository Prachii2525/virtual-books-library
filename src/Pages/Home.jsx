import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BookList from '../components/BookList'
import BookTrailerCarousel from "../components/BookTrailerCarousel";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>

            <Header />
            <Hero />
            <BookList />
            <BookTrailerCarousel />
            <Footer />

        </>

    )
}

export default Home