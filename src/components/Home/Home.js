import React from "react";
import Navbar from "./Navbar/Navbar"
import reg from "../Register/Reg"
import Login from "../Login/Login";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import './Home.css'
const Home = ({ currentPage, onPageChange }) => {
    return (
        <div className="home">
            <Header />
            <Navbar onPageChange={onPageChange} />
            {currentPage === 'home' && <h2>Welcome</h2>}
            {currentPage === 'Register' && <reg />}
            {currentPage === 'login' && <Login />}
            <Footer />
        </div>
    )
}
export default Home;
