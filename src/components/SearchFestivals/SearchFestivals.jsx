import React, {useState} from 'react';
import { Container, Search, Dropdown , Label, Grid } from 'semantic-ui-react';
import usersAndFestivalsService from '../../service/usersAndFestivalsService';
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


    const handleCountrySearchChange = (e) => {
        e.preventDefault();
        setCountry(e.target.value);

        if(genre !== ''){
            let rez = usersAndFestivalsService.searchFestivals(country, genre).then(resp => {
                console.log(resp.data);
            });
        }
    }

    const handleGenreChange = (e, data) => {
        e.preventDefault();

        const theGenre = data.value;

        setGenre(theGenre);
        console.log(data.value);

        console.log(genre);

        if(country !== ''){
            let rez = usersAndFestivalsService.searchFestivals(country, genre).then(resp => {
                console.log(resp.data);
            });
        }
    }

    

    return (
        <>
            
            <Container>

                <Grid divided='vertically'>
                    <Grid.Row columns={2}>

                    <Grid.Column>
                    <Label>Search country:</Label>
                    <Search
                        type='text'
                        size='big'
                        showNoResults={false}
                        onSearchChange={handleCountrySearchChange}
                    />
                    </Grid.Column>

                    <Grid.Column>
                    <Dropdown
                        placeholder='Select Genre'
                        fluid
                        search
                        selection
                        options={genreOptions}
                        onChange={handleGenreChange}
                    />
                    </Grid.Column>

                    </Grid.Row>
                </Grid>
                
            </Container>

        </>
    )

}

export default SearchFestivals;