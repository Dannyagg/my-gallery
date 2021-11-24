import React from 'react';
import { useState } from 'react';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Ratings(_props) {

    const [rating, setRating] = useState(0)
    return (
        <div className="ratings-container"
            style={{
                marginTop: "10px",
                color: 'orange',
            }}>

            <h6
                style={{
                    color: 'orange',
                }}
            > ratings: {rating}</h6>

            {rating >= 1 ? (<IoIosStar onClick={() => setRating(1)} />) : (<IoIosStarOutline onClick={() => setRating(1)} />)}
            {rating >= 2 ? (<IoIosStar onClick={() => setRating(2)} />) : (<IoIosStarOutline onClick={() => setRating(2)} />)}
            {rating >= 3 ? (<IoIosStar onClick={() => setRating(3)} />) : (<IoIosStarOutline onClick={() => setRating(3)} />)}
            {rating >= 4 ? (<IoIosStar onClick={() => setRating(4)} />) : (<IoIosStarOutline onClick={() => setRating(4)} />)}
            {rating >= 5 ? (<IoIosStar onClick={() => setRating(5)} />) : (<IoIosStarOutline onClick={() => setRating(5)} />)}

        </div>
    )
}

export default Ratings

