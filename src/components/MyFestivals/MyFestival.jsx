import { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react'
import "semantic-ui-css/semantic.min.css";

const MyFestivals = () => {
    
    useEffect(() => {

    }, [])
    
    const fetchUserFestivals = () => {
        // TODO : call axios authService
    }

    const [festivals, setFestivals] = useState(null);

    return(
        <div>{
            (!festivals) ? 
            <p>You don't have any saved festivals</p>
            : <Item.Group items={festivals} />
            }</div>
    );
}

export default MyFestivals;