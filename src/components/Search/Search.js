import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

function Search(props) {
    function clickHandler(){
        let pattern = document.getElementById('searchPattern').value;
        props.search(pattern);
    }
    return (
        <InputGroup className="mb-3">
            <FormControl id="searchPattern"
            placeholder="Search movie"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button onClick={clickHandler} variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default Search;
