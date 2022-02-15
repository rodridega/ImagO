import React from 'react';

const Card = (props) => {
    const {source} = props
    
    return ( 
        <div className='card'>
            <img src={source} ></img>
        </div>
     );
}
 
export default Card;