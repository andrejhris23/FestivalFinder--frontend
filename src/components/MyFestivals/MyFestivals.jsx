import { Label, Grid, Button, Card, Image, Container } from 'semantic-ui-react';
import React, { useContext } from "react";
import { UserContext } from '../../contexts/UserContext';
import { Link } from "react-router-dom";
import FestivalCard from '../FestivalCards/FestivalCard';


const MyFestivals = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <>
            <Container>
                <h1>Your saved festivals</h1>

                <Link to='/search'>
                    <Button 
                        secondary
                        size='big'
                        className=''
                    >
                        SEARCH OTHER FESTIVALS
                    </Button>
                </Link>


                <Grid className='festivals-grid' columns={3}>
                    <Grid.Row>
                        
                        {  

                            (user.festivals.length === 0) ?
                                <Label color='red' 
                                    size='huge'
                                    className='search-fest-label'>
                                No festivals saved yet!</Label> :


                                user.festivals.map(
                                    fest => 
                                    <FestivalCard f={fest}/>
                                )

                                
                        }
                        
                    </Grid.Row>
                </Grid>

            </Container>

        </>
    )
}

export default MyFestivals;