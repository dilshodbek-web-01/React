import React from 'react';
import "./style.scss";

const index = (props) => {

    const { title, img } = props;

    // const cardStyle = {
    //     boxShadow: "0 0 20px silver",
    //     backgroundColor: 1 > 10 ? "#000" : "#fff"
    // }

    return (
        <>
            <div className="card">
                <div className="card__inside">
                    <img className='card__inside-img' src={img} alt="picture" />
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat mauris nisl est accumsan quis tempus.</p>
                <a href="#" className="card-link">Read More</a>
            </div>
        </>

    );
};

export default index;