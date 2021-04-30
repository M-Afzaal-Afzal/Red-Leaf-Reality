import React from 'react';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    imageContainer: {
        position: 'relative',
        height: '20rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        position: 'relative',
        zIndex: 10,
        color: 'white',
    },
    imageDarkOverlay: {
        background: 'rgba(0,0,0,.5)',
        zIndex: '5',
        width: '100%',
        height: '100%',
        position: 'absolute',
    }
}))

const ImageGallery = () => {

    const classes = useStyles();

    const images = [
        {
            id: 1,
            imageURL: '/featureListings/1.jpg',
            text: 'Santa Cruz'
        }, {
            id: 2,
            imageURL: '/featureListings/2.jpg',
            text: 'San Francisco'
        }, {
            id: 3,
            imageURL: '/featureListings/3.jpg',
            text: 'Oakland'
        }, {
            id: 4,
            imageURL: '/featureListings/1.jpg',
            text: 'Berkeley Cruz'
        }, {
            id: 5,
            imageURL: '/featureListings/2.jpg',
            text: 'Santa Cruz'
        }, {
            id: 6,
            imageURL: '/featureListings/3.jpg',
            text: 'Santa Cruz'
        },
    ]

    return (
        <Container maxWidth={'lg'}>
            <Grid container alignItems={'center'} justify={'center'}>
                {
                    images.map(({id, imageURL, text}) => (

                        <Grid style={{width: '100%'}} key={id}
                              item
                              md={4}
                              sm={6}
                              xs={12}
                        >
                            <Box className={classes.imageContainer}>
                                <Image src={imageURL} layout={'fill'} objectFit={'cover'}/>
                                {/* image centered text*/}
                                <Typography className={classes.imageText} variant={'h3'}>
                                    {text}
                                </Typography>
                                {/* image dark overlay*/}
                                <Box className={classes.imageDarkOverlay}>
                                </Box>
                            </Box>

                        </Grid>
                    ))
                }

            </Grid>
        </Container>
    );
};

export default ImageGallery;
