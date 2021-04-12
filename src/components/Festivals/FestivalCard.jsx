import { Label, Grid, Button, Card, Image } from 'semantic-ui-react';


const FestivalCard = ({f}) => {

    console.log(f)

    return(
        <>  
            
            <Grid.Column className='festival-card' key={f.name}> 
                
                <Card>
                
                    {f.image ? 
                    <Image src={f.image} wrapped ui={false}/>
                    :
                    <Image className='fstvl_img_not_found' src="https://i.ibb.co/jJgFNK1/facebook-profile-image.png" wrapped ui={false}/>
                    }
                    <Card.Content>
                        <Card.Description>
                            <Label color='black'
                                tag={true} 
                                size='medium'
                                className='fest-info-label'>
                                Name:</Label>
                            {' '+f.name}
                            <br/>


                            <Label color='black'
                                tag={true} 
                                size='medium'
                                className='fest-info-label'>
                                Locations:</Label>
                            
                            {f.locations.length === 0 ?
                            <p>/</p> :
                            f.locations.reduce((p, n)=> p+' | '+n)
                            }
                            
                            <br/>

                            <Label color='black'
                                tag={true} 
                                size='medium'
                                className='fest-info-label'>
                                Dates:</Label>

                            {f.dates.length === 0?
                            <p>/</p>:
                            f.dates.reduce((p, n)=> p+' | '+n)                    
                            }
                            <br/>

                            <Label color='black'
                                tag={true} 
                                size='medium'
                                className='fest-info-label'>
                                Genres:</Label>
                            {f.genres.length === 0?
                            <p>/</p>:
                            ' '+f.genres.reduce((p, n)=> p+' | '+n)
                            }
                            <br/>

                            <Label color='black'
                                tag={true} 
                                size='medium'
                                className='fest-info-label'>
                                Websites:</Label>
                            {f.websites.map(ws => {
                                return ws.length < 50 ?
                                <div className='fstvl-website-link'>
                                    <a href={ws}>{ws}</a>
                                </div> :
                                <div className='fstvl-website-link'>
                                    <a href={ws}>{ws.slice(1,35)}...</a>
                                </div>
                                
                            })}

                            <div>
                                <Button color='green'>Save</Button>
                            </div>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Grid.Column> 
            
        </>
    )
}

export default FestivalCard;