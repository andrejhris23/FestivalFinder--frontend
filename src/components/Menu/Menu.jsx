import React, { useState } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const MyMenu = () => {

    const [activeItem, setActiveItem] = useState('home');
    const history = useHistory();


    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        history.push(`/${name}`);
        console.log(history)
    }



    return (
        <div>
            <Menu pointing 
                fixed='top'
                size='small'>
            <Menu.Item
                name='search'
                active={activeItem === 'search'}
                onClick={handleItemClick}
            />
            <Menu.Item
                name='myFestivals'
                active={activeItem === 'myFestivals'}
                onClick={handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' />
                </Menu.Item>
            </Menu.Menu>
            </Menu>
        </div>
    )
    
}


export default MyMenu;