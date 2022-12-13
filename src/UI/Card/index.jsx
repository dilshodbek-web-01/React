import React from 'react';
import "./style.scss";

const index = ({ user: { image, title, id, description, link }  }) => {
    console.log(image); 

    // const { title, img } = props;

    // const cardStyle = {
    //     boxShadow: "0 0 20px silver",
    //     backgroundColor: 1 > 10 ? "#000" : "#fff"
    // }

    return (
        <>
            <div className="card">
                <div className="card__inside">
                    <img className='card__inside-img' src={image} alt="picture" />
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <a href="#" className="card-link">{link}</a>
            </div>
        </>

    );
};

export default index;