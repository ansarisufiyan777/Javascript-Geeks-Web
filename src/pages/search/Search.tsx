import React from 'react';
import './Search.scss'

class Search extends React.Component {
    render() {
        return (
            <div className="search-box">
                <input type="text" placeholder="Type to search" className="search-txt" />
                <a href="" className="search-btn">
                    <i className="search icon"></i>
                </a>
            </div>
        )
    }
}


export default Search;