import "./style.scss";
import Logotip from "../../assets/images/logo.svg";

const index = () => {
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
                        <span className="nav-menu"> <i class="bi bi-list"></i> </span>
                    </nav>
                </div>
            </header>

        </>
    );
};

export default index;