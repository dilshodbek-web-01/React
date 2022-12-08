import "./style.scss";
import Card from "../../UI/Card";
import Box from "../../UI/Card/index2";
import Button from "../../UI/Button/index";
import Puma from "../../assets/images/image-stoke.png";
import Next from "../../assets/images/next.svg";
import Video from "../../assets/images/video-play.png";
import Quality from "../../assets/images/quality.png";
import flexible from "../../assets/images/flexible.png";
import longLasting from "../../assets/images/longLasting.png";
import Left from "../../assets/images/left.svg";
import Right from "../../assets/images/right.svg";
import Shoes1 from "../../assets/images/shoes1.png";
import Shoes2 from "../../assets/images/shoes2.png";
import Shoes3 from "../../assets/images/shoes3.png";
import Shoes4 from "../../assets/images/shoes4.png";

const index = () => {
    return (
        <>

            <main>
                <section id="intro">
                    <div className="container">
                        <div className="wrapper">

                            <div className="wrapper__right">
                                <h2 className="wrapper__right-title">Life is better in running <br /> shoes.</h2>
                                <p className="wrapper__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eu ultrices ut</p>
                            </div>
                            <div className="wrapper__left">
                                <img src={Puma} alt="puma" className="wrapper__left-img" />
                                <img src={Next} alt="next" className="wrapper__left-imgNext" />
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="selects">
                            <div className="selects__content">
                                <h5 className="selects__content-title">Brand</h5>
                                <select id="#" className="selects__content-select">
                                    <option value=""><strong>Puma</strong></option>
                                </select>
                            </div>
                            <hr className="selects-hr" />

                            <div className="selects__content">
                                <h5 className="selects__content-title">Person</h5>
                                <select id="#" className="selects__content-select">
                                    <option value=""><strong>man</strong></option>
                                </select>
                            </div>
                            <hr className="selects-hr" />

                            <div className="selects__content">
                                <h5 className="selects__content-title">Size</h5>
                                <select id="#" className="selects__content-select">
                                    <option value=""><strong>large</strong></option>
                                </select>
                            </div>
                            <hr className="selects-hr" />

                            <div className="selects__content">
                                <h5 className="selects__content-title">Price</h5>
                                <select id="#" className="selects__content-select">
                                    <option value=""><strong>$150</strong></option>
                                </select>
                            </div>
                            <hr className="selects-hr" />

                            <button className="selects__content-btn">Buy Now</button>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="video">
                            <div className="video__right">
                                <h4 className="video__right-littleTitle">VIDEO</h4>
                                <h2 className="video__right-title">Desire the feel of satisfaction.</h2>
                                <p className="video__right-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque auctor proin amet sagittis semper ipsum at lectus. At</p>
                            </div>
                            <div className="video__left">
                                <img src={Video} alt="videoImg" className="video__left-img" />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="feature">
                            <h3 className="feature-firstTitle">Feature</h3>
                            <h2 className="feature-title">We have best feature in Shoes</h2>
                            <div className="feature__lists">
                                <Card title="Quality" img={Quality} />
                                <Card title="Flexible" img={flexible} />
                                <Card title="Long Lasting" img={longLasting} />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="gallery">
                            <h3 className="gallery-firstTitle">GALLARY</h3>
                            <h2 className="gallery-title">40+YEARS’ EXPRERIENCE</h2>

                            <div className="gallery__categories">
                                <div className="gallery__categories--content">
                                    <h3 className="gallery__categories--content-title">Categories:</h3>
                                    <a href="#" className="gallery__categories--content-link">All</a>
                                    <a href="#" className="gallery__categories--content-link">Male</a>
                                    <a href="#" className="gallery__categories--content-link">Female</a>
                                    <a href="#" className="gallery__categories--content-link">Kids</a>
                                </div>
                                <div className="gallery__categories--next">
                                    <img src={Left} alt="left" className="gallery__categories--next-img" />
                                    <img src={Right} alt="next" className="gallery__categories--next-img" />
                                </div>
                            </div>
                            
                            <div className="gallery__boxs">
                                <Box title="Puma RS-X Bold" img={Shoes1} prices="$200"/>
                                <Box title="Puma Sneakers" img={Shoes2} prices="$180"/>
                                <Box title="Puma Ferrari" img={Shoes3} prices="$190"/>
                                <Box title="Puma Running" img={Shoes4} prices="$200"/>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default index;