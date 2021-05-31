import { Label, Grid, Button, Container } from 'semantic-ui-react';
import React, { useContext, useEffect } from "react";
import { UserContext } from '../../contexts/UserContext';
import { Link } from "react-router-dom";
import FestivalCard from '../FestivalCards/FestivalCard';
import authService from "../../service/authService";
import './MyFestivals.css';


const MyFestivals = () => {

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        waitUser();
    }, []);

    const waitUser = async() => {
        // console.log('Use eff myFestivals')
        const user  = await authService.fetchUser();
        // console.log(user)
        setUser(user)
    }

    return (
        <>
            <Container className='my-fest-container'>
                <br/><br/>

                <Grid divided='horizontaly'>
                    <Grid.Row>
                        <h1>Your saved festivals</h1>
                    </Grid.Row>
                    <Grid.Row>

                        <Grid className='festivals-grid' columns={3}>
                            <Grid.Row>
                                {console.log(user.festivals)}
                                {  

                                    (Object.keys(user).length !== 0) ?

                                        // console.log(user.festivals.length)

                                        (user.festivals.length === 0) ?
                                            <Label color='red' 
                                                size='huge'
                                                className='search-fest-label'>
                                            No festivals saved yet!</Label> :


                                            user.festivals.map(
                                                fest => 
                                                <FestivalCard f={fest} key={fest._id}/>
                                            )

                                    : <Label color='red' 
                                            size='huge'
                                            className='search-fest-label'>
                                        No festivals saved yet!</Label>
                                }
                                
                            </Grid.Row>
                        </Grid>
                    </Grid.Row>

                </Grid>


                

            </Container>

        </>
    )
}

export default MyFestivals;