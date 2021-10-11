/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import PropTypes from 'prop-types';

import movieContext from './movieContext';

export default function userProvider ({ children }) {
    const [movieList, setMovieList] = useState('');  
    const value = {
        movieList,
        setMovieList,
    };
    return (
        <movieContext.Provider value={ value } >
            {
                children
            }
        </movieContext.Provider>   
    );
}

userProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
}