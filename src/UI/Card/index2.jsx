import React from 'react';
import "./style.scss";
import Button from "../../UI/Button";


const index = ({ data: { image, title, id, size, price }  }) => {

    // const { img, title, prices } = props;

    return (
        <>
            <div className="box">
                <img className='box-img' src={image} alt="picture" />
                <div className="box__body">
                    <h3 className="box__body-title">{title}</h3>
                    <p className="box__body-textSP">Size: <span className='box__body-textSP-size'>{size}</span></p>
                    <p className="box__body-textSP">Price: <span className='box__body-textSP-price'>{price}</span></p>
                    <Button />
                </div>

            </div>
        </>

    );
};

export default index;