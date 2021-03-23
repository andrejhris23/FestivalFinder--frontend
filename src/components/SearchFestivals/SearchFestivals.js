import React, {useState} from 'react';
import { Container, Search, Dropdown , Label, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const SearchFestivals = (props) => {


    const genreOptions = [
        { key: 'af', value: 'Rock_music', flag: 'af', text: 'Rock Music' },
        { key: 'ax', value: 'Pop_music', flag: 'ax', text: 'Pop Music' },
        { key: 'al', value: 'Electronic_dance_music', flag: 'al', text: 'Electronic dance music' },
        { key: 'dz', value: 'Reggae', flag: 'dz', text: 'Reggae' },
        { key: 'as', value: 'Heavy_metal_music', flag: 'as', text: 'Heavy metal music' }
    ]



    const [country, setCountry] = useState('');
    const [genre, setGenre] = useState('');


    const handleCountrySearchChange = (e) => {
        e.preventDefault();

        setCountry(e.target.value);
    }

    const handleGenreChange = (e, data) => {
        e.preventDefault();

        console.log(data.value)
        setGenre(data.value);
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