import React, {useState} from 'react';
import { Container, Search, Dropdown , Label, Grid, Button, Modal } from 'semantic-ui-react';
import usersAndFestivalsService from '../../service/usersAndFestivalsService';
import { Link } from "react-router-dom";
import './SearchFestivals.css'
import 'semantic-ui-css/semantic.min.css';
import FestivalCard from '../FestivalCards/FestivalCard';


const SearchFestivals = (props) => {


    const genreOptions = [
        { key: 'af', value: 'Rock_music', icon: 'music', text: 'Rock Music' },
        { key: 'ax', value: 'Pop_music', icon: 'music', text: 'Pop Music' },
        { key: 'al', value: 'Electronic_dance_music', icon: 'music', text: 'Electronic dance music' },
        { key: 'dz', value: 'Reggae', icon: 'music', text: 'Reggae' },
        { key: 'as1', value: 'Heavy_metal_music', icon: 'music', text: 'Heavy metal music' },
        { key: 'as2', value: 'Classical_music', icon: 'music', text: 'Classical music' },
        { key: 'as3', value: 'Jazz', icon: 'music', text: 'Jazz' },
        { key: 'as4', value: 'House_music', icon: 'music', text: 'House music' },
        { key: 'as5', value: 'Hip_hop_music', icon: 'music', text: 'Hip hop music' },
        { key: 'as6', value: 'Trance_music', icon: 'music', text: 'Trance music' },
        { key: 'as7', value: 'Techno', icon: 'music', text: 'Techno' },
        { key: 'as8', value: 'Other', icon: 'music', text: 'Other genre' }
    ]

    // set by inputs
    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [showNoFestivalFoundMsg, setShowNoFestivalFoundMsg] = useState(false);
    // set from API
    const [festivals, setFestivals] = useState([]);


    const handleCountrySearchChange = (e) => {
        e.preventDefault();
        const theCountry = e.target.value;
        const theCountryFormated = theCountry.replace(' ','_');
    
        setCountry(theCountryFormated);
    }

    const handleGenreChange = (e, data) => {
        e.preventDefault();
        const theGenre = data.value;
        setGenre(theGenre);
    }

    const handleSearchButtonClick = (e) => {
        
        if(country !== '' && genre !== ''){
            usersAndFestivalsService.searchFestivals(country, genre).then(resp => {
                console.log(resp.data);
                setFestivals(resp.data);
                setShowNoFestivalFoundMsg(true);    
            });
        }
        else{
            setShowModal(true);
        }
    }



    return (
        <>
            
            <Container className='search-fest-container'>

                <div className='festival-grid-outer-div'>
                    <Grid divided='vertically'>

                        <Grid.Row columns={2}>

                            <Grid.Column width='2'>
                                <Label color='black' size='huge' className='search-fest-label'>SEARCH COUNTRY:</Label>
                                <br/><br/>
                                <Search
                                    type='text'
                                    size='big'
                                    showNoResults={false}
                                    onSearchChange={handleCountrySearchChange}
                                    className='search-bar'
                                />
                        
                                <Dropdown
                                    placeholder='Select Genre'
                                    fluid
                                    search
                                    selection
                                    options={genreOptions}
                                    onChange={handleGenreChange}
                                    className='genre-dropdown'
                                />

                                <Button 
                                    secondary
                                    onClick={handleSearchButtonClick}
                                    size='big'
                                    className=''
                                >
                                    SEARCH
                                </Button>

                                <Link to='/myFestivals'>
                                <Button 
                                    secondary
                                    onClick={handleSearchButtonClick}
                                    size='big'
                                    className=''
                                >
                                    My saved festivals
                                </Button>
                                </Link>

                                <Modal open={showModal}>
                                    <Modal.Content>
                                        Country or genre is empty!
                                        <Button
                                        onClick={()=>{setShowModal(false)}}
                                        className='modal-btn'>
                                            Ok
                                        </Button>
                                    </Modal.Content>
                                </Modal>
                            </Grid.Column>

                            <Grid.Column>

                                    {/* Uste eden grid za festivalite */}
                                    <Grid className='festivals-grid' columns={3}>
                                        <Grid.Row>
                                            
                                            {
                                                (festivals.length === 0 && showNoFestivalFoundMsg) ?
                                                    <Label color='red' 
                                                        size='huge'
                                                        className='search-fest-label'>
                                                    No festivals found for this country & genre!</Label> :


                                                    festivals.map(
                                                        fest => 
                                                        <FestivalCard f={fest}/>
                                                    )

                                                    
                                            }
                                            
                                        </Grid.Row>
                                    </Grid>
                                

                
                            </Grid.Column>

                        </Grid.Row>
                        

                    </Grid>
                </div>
                
            </Container>

            
            

        </>
    )

    

}

export default SearchFestivals;