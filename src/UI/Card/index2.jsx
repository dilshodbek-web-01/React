import React from 'react';
import "./style.scss";
import Button from "../../UI/Button";


const index = (props) => {

    const { img, title, prices } = props;

    return (
        <>
            <div className="box">
                <img className='box-img' src={img} alt="picture" />
                <div className="box__body">
                    <h3 className="box__body-title">{title}</h3>
                    <p className="box__body-textSP">Size: <span className='box__body-textSP-size'>Dubble-XL</span></p>
                    <p className="box__body-textSP">Price: <span className='box__body-textSP-price'>{prices}</span></p>
                    <Button />
                </div>

            </div>
        </>

    );
};

export default index;