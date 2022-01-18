import React, { useState } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';


const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelct(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelct} />


            <h2> Number of Guests <PeopleIcon />
            </h2>
            <input min={1} defaultValue={2} type="number" name="guests" />
            <Button>Search Airbnb</Button>

        </div>
    );
};

export default Search;