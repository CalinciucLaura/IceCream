import React from "react"
import "./app.scss"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import Contact from "./components/contact/Contact"
import Services from "./components/services/Services"

const App = () => {
    return (
        <div>
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <div id="About">
                <About />
            </div>
            <section id="Menu">
                <Menu />
            </section>
            <section id="Services">
                <Services />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    )
};

export default App;
