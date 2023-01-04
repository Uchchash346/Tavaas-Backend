import React from 'react';
import '../../styles/SideBar.css'

const SideBar = () => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label for="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <header>Tavaas Admin</header>
                <ul>
                    <li><a href="/"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="/"><i className="fas fa-link"></i>Orders</a></li>
                    <li><a href="/"><i className="fas fa-stream"></i>Products</a></li>
                    <li><a href="/create-product"><i className="fas fa-calendar-week"></i>Create Product</a></li>
                    <li><a href="/"><i className="far fa-question-circle"></i>About</a></li>
                    <li><a href="/"><i className="fas fa-sliders-h"></i>Services</a></li>
                    <li><a href="/"><i className="far fa-envelope"></i>Contact</a></li>
                </ul>
            </div>
            <section></section>
        </>
    );
};

export default SideBar;