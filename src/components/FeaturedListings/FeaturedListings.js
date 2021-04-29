import React from 'react';
import {Box, Button, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles(theme => ({
    featureListings: {
        marginTop: '3rem',
        padding: '4rem 0',
        display: 'flex',
        alignItems: 'flex-end',
    },
    mainHeadingContainer: {
        marginBottom: '2rem',
    },
    mainHeading: {
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    featureEntity: {
        padding: '1rem',
    },
    imageContainer: {
        width: '100%',
        height: '20rem',
        position: 'relative',
    },
    entityHeadingContainer: {
        marginTop: '1rem',
    },
    entityDesc: {
        color: '#676767',
    },
    entityButtonContainer: {
        marginTop: '1rem',
    },
    entityButton: {
        borderRadius: 0,
        border: '1px solid black',
    }
}))

const FeaturedListings = () => {

    const classes = useStyles();

    const listings = [
        {
            id: 1,
            name: '903 Hermett Eve',
            desc: 'There is a song in the walls of the house that raises my spirits in quiet moments, when the wind becomes still air and it sounds as if the world has paused to take a moment to breathe. In those silent words, in the purity of its expression, I find my inner peace and realise that I am home.',
            photoURL: '/featureListings/1.jpg',
            link: 'url',
        }, {
            id: 2,
            name: '903 Hermett Eve',
            desc: 'There is a song in the walls of the house that raises my spirits in quiet moments, when the wind becomes still air and it sounds as if the world has paused to take a moment to breathe. In those silent words, in the purity of its expression, I find my inner peace and realise that I am home.',
            photoURL: '/featureListings/2.jpg',
            link: 'url',
        }, {
            id: 3,
            name: '903 Hermett Eve',
            desc: 'There is a song in the walls of the house that raises my spirits in quiet moments, when the wind becomes still air and it sounds as if the world has paused to take a moment to breathe. In those silent words, in the purity of its expression, I find my inner peace and realise that I am home.',
            photoURL: '/featureListings/3.jpg',
            link: 'url',
        },
    ]

    return (
        <Box id={'listings'} className={classes.featureListings}>
            <Container maxWidth={'lg'}>

                {/* Main Heading Featured Listings*/}
                <Box className={classes.mainHeadingContainer}>
                    <Typography className={classes.mainHeading} align={'center'} variant={'h2'}>Featured
                        Listings</Typography>
                </Box>

                {/* Images and description grid*/}
                <Grid container alignItems={'center'} justify={'center'}>

                    {
                        listings.map(({id, name, desc, photoURL}) => (
                            <Grid
                                item key={id}
                                className={classes.featureEntity}
                                style={{width: '100%'}}
                                md={4}
                                sm={6}
                                xs={12}
                            >
                                <Box>
                                    {/* image of feature entity*/}
                                    <Box className={classes.imageContainer}>
                                        <Image priority src={photoURL} layout={'fill'} objectFit={'cover'}/>
                                    </Box>
                                    {/* heading of feature entity*/}
                                    <Box className={classes.entityHeadingContainer}>
                                        <Typography gutterBottom variant={'h4'}>
                                            {name}
                                        </Typography>
                                    </Box>

                                    {/* entity description */}
                                    <Box>
                                        <Typography className={classes.entityDesc} variant={'h6'}>
                                            {
                                                desc.substr(0, 190)
                                            }...
                                        </Typography>
                                    </Box>

                                    <Box className={classes.entityButtonContainer}>
                                        <Button className={classes.entityButton}>
                                            Load More
                                        </Button>
                                    </Box>

                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturedListings;
