import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../Shared/Search/Search';

import './Banner.css'

const Banner = () => {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className='banner'>
            <div className="banner__search">
                {
                    // Datepicker and search
                    showSearch && <Search></Search>
                }
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>{showSearch ? 'Hide' : 'Search Dates'}</Button>
            </div>

            <div className="banner__info">
                <h1>Get Out and Stretch Your Imagination</h1>

                <h5>Plan a different kind of gataway to uncover the hidden gems near you.</h5>

                <Button variant='outlined' onClick={() => history.push('/search')}>Explore Nearby</Button>
            </div>
        </div>
    );
};

export default Banner;