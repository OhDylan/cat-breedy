import React from 'react';
import { Input, AutoComplete } from 'antd';

const SearchBar = ({options, setQuery, search}) => {

    const handleAutoComplete = (value) => {
        setQuery(value);
    };

    const handleSearch = (value) => {
        search(value);
    };

    return (
        <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{
                width: "100%"
            }}
            options={options}
            onSearch={handleAutoComplete}
        >
            <Input.Search size="large" placeholder="input here" enterButton  onSearch={handleSearch} />    
        </AutoComplete>
    )
}

export default SearchBar;
