import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Projects from './components/Projects/projects'
import Skills from './components/skills/skills'
import About from './components/about/about'
import Footer from './components/footer/footer'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </>
    )   
}

export default App