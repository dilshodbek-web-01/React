import React, { useRef } from 'react';
import "./style.scss";
import Logotip from "../../assets/images/logo.svg";

const index = () => {

    const dropDown = useRef();

    const slide = () => {
        dropDown.current.classList.toggle('swiper');
    };


    return (
        <>

            <header>
                <div className="container">
                    <nav className="nav">
                        <img src={Logotip} alt="logotip" className="nav-logo" />
                        <ul className="nav__list">
                            <li className="nav__list--item"><a href="#" className="nav__list--item-link">Menu</a></li>
                            <li className="nav__list--item"><a href="#" className="nav__list--item-link">About</a></li>
                            <li className="nav__list--item"><a href="#" className="nav__list--item-link">Feature</a></li>
                            <li className="nav__list--item"><a href="#" className="nav__list--item-link">Gallary</a></li>
                        </ul>
                        <button type="submit" className="nav-btn">Buy Now</button>
                        <span className="nav-menu" onClick={()=> { slide() }}> <i class="bi bi-list"></i> </span>
                        <div ref={dropDown} className="drop__down">
                            <ul className="drop__down--list">
                                <li className="drop__down--list--item">
                                    <a href="#" className="drop__down--list--item-linkDrop"></a>Menu</li>
                                <li className="drop__down--list--item">
                                    <a href="#" className="drop__down--list--item-linkDrop"></a>About</li>
                                <li className="drop__down--list--item">
                                    <a href="#" className="drop__down--list--item-linkDrop"></a>Feature</li>
                                <li className="drop__down--list--item">
                                    <a href="#" className="drop__down--list--item-linkDrop"></a>Gallary</li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default index;