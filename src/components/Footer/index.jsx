import "./style.scss";
import SocialIcon from "../../assets/images/socialIcon.svg";
import Logotip from "../../assets/images/logo.svg";

const index = () => {
    return (
        <>

            <footer>
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__content--social">
                            <img src={Logotip} alt="Logotip" className="footer__content--social-logo" />
                            <h5 className="footer__content--social-title">10 New Town Street, V2
                                5NW, Newstate. USA</h5>
                                <p className="footer__content--social-email"><strong>shahzodbadriyev523@gmail.com</strong></p>
                                <img src={SocialIcon} alt="SocialIcon" className="footer__content--social-icons" />                                

                        </div>

                        <div className="footer__content--services">
                            <h3 className="footer__content--services-title"><strong>Our services</strong></h3>
                            <p className="footer__content--services-text">About Us</p>
                            <p className="footer__content--services-text">Feature</p>
                            <p className="footer__content--services-text">Gallary</p>
                        </div>

                        <div className="footer__content--services">
                            <h3 className="footer__content--services-title"><strong>Support</strong></h3>
                            <p className="footer__content--services-text">About Us</p>
                            <p className="footer__content--services-text">Feature</p>
                            <p className="footer__content--services-text">Gallary</p>
                        </div>

                        <div className="footer__content--services">
                            <h3 className="footer__content--services-title"><strong>Contact Us</strong></h3>
                            <p className="footer__content--services-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </div>
                    <hr  className="footer-hr"/>
                    <h5 className="footer-title">
                    Copyright {new Date().getFullYear()} The PUMA All rights Reserved
                        
                    </h5>
                </div>
            </footer>

        </>
    )
}

export default index;