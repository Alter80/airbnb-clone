import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ({
    img, location, title, description, star, price, total
}) => {
    return (
        <div className='searchResult'>
            <img src={img} alt='searchImage' />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className="searchResult_info">
                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>_____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult_infoBottom">
                    <div className="searchResult_stars">
                        <StarIcon className='searchResult_star' />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>

                    <div className="searchResult_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;