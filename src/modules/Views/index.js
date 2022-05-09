import {Route, Routes} from "react-router-dom"
import Home from "../Home"
import Members from "../Members"
import Proyects from "../Proyects"
import Search from "../Search"
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header"

const ViewsContainer = () =>
    <>
    <Header />
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/members" element={<Members />} />
        <Route path="/search" element={<Search />} />
        </Routes>
    <Footer />
    </>

export default ViewsContainer
