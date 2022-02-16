import React from 'react';

const Card = (props) => {
    const {source, likes, views, href} = props
    
    return ( 
        <div className='card'>
            <img src={source} ></img>
            <div className='cardText'>
                <p> Me gusta: {likes}  </p>
                <p> {views} Veces vista </p>
                <a href={href} target="_blank">Ver imagen</a>
            </div>
        </div>
     );
}
 
export default Card;