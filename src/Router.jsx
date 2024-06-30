
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Lodging from "./pages/Lodging";

import lodgingData from "./assets/logements.json" //// fichier JSON contenant les données des logements
import './assets/css/style.css' //// Feuille de style à utiliser pour tout les composants React

function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home data={lodgingData} />} />
                    <Route exact path="/lodging/:id" element={<Lodging data={lodgingData} />}/>
                    <Route exact path="/about" element={<About />}/>
                    <Route exact path="/*" element={<Error />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default Router;