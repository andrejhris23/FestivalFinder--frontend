import React, {useState} from 'react';
import { Container, Search, Dropdown , Label, Grid, Button, Modal, Card, Image } from 'semantic-ui-react';
import usersAndFestivalsService from '../../service/usersAndFestivalsService';
import './SearchFestivals.css'
import 'semantic-ui-css/semantic.min.css';


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


    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [festivals, setFestivals] = useState([]);


    const handleCountrySearchChange = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
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
            });
        }
        else{
            setShowModal(true);
        }
    }



    return (
        <>
            
            <Container>

                <Grid divided='vertically'>
                    <Grid.Row columns={3}>

                        <Grid.Column>
                            <Label className='search-elements'>Search country:</Label>
                            <Search
                                type='text'
                                size='big'
                                showNoResults={false}
                                onSearchChange={handleCountrySearchChange}
                                className='search-bar search-elements'
                            />
                    
                            <Dropdown
                                placeholder='Select Genre'
                                fluid
                                search
                                selection
                                options={genreOptions}
                                onChange={handleGenreChange}
                                className='genre-dropdown search-elements'
                            />

                            <Button 
                                secondary
                                onClick={handleSearchButtonClick}
                                size='big'
                                className='search-elements'
                            >
                                SEARCH
                            </Button>

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
                            
                            {
                                festivals.map(f => {
                                    return <Card>
                                        <Image src={f.image} wrapped ui={false}/>
                                        <Card.Content>
                                            <Card.Description>
                                                {f.name}
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                })
                            }
                        </Grid.Column>

                    </Grid.Row>

                </Grid>
                
            </Container>

        </>
    )

}

export default SearchFestivals;