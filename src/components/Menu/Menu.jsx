import React, { useState } from 'react';
import { Button, Input, Menu } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import './Menu.css';

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
                secondary
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
                        <Button>Log Out</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
    
}


export default MyMenu;