import React from 'react';

const SearchBox = ({handleSubmit}) => (
                <form onSubmit={handleSubmit} >
                    <input type="text" />
                    <input type="submit" value="submit"/>
                </form>
        );

export default SearchBox;