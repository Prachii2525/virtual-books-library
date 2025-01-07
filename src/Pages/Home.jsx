import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BookList from '../components/BookList'
import BookTrailerCarousel from "../components/BookTrailerCarousel";

const Home = () => {
    return (
        <>

            <Header />
            <Hero />
            <BookList />
            <BookTrailerCarousel />

        </>

    )
}

export default Home