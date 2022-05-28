import React from 'react';

const Review = (props) => {

    const { name, photoUrl, rating, review_text } = props.info;
    return (
        <div>
            <div className="reviewInner">
                <img src={photoUrl} alt="" />
                <h4>{name}</h4>
                <p>{review_text.slice(0, 100)}</p>
                <div className='ratings'>
                    <p><b>Rating : {rating}</b></p>
                </div>
            </div>
        </div>
    );
};

export default Review;