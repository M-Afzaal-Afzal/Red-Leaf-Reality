import React from 'react';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    topProducerSection: {
        background: '#e9e9e9'
    },
    firstEntityItem: {
        padding: '2rem',
        paddingTop: '8rem',
        [theme.breakpoints.down('sm')]:{
           maxWidth: '30rem',
            margin: 'auto',
            padding: '2rem 0',
        }
    },
    secondEntityItem: {
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
        }
    },
    producerTextContainer: {
        width: '100%',
        height: '100%',
    },
    producerImageContainer: {
        position: 'relative',
        width: '100%',
        height: '38rem',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30rem',
        }
    },
    producerHeadingContainer: {
        marginBottom: '2rem',
    },
    producerHeading: {
        fontWeight: 'bold',
    },
    producerDescription: {
        color: '#676767',
    }
}))

const TopProducer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.topProducerSection}>
            <Container maxWidth={'lg'}>
                <Grid container justify={'center'} >
                    <Grid className={classes.firstEntityItem} item xs={12} md={6}>

                        <Box className={classes.producerTextContainer}>
                            <Box className={classes.producerHeadingContainer}>
                                {/* main heading of top producer*/}
                                <Typography gutterBottom className={classes.producerHeading} variant={'h3'}>
                                    Top Producer in Bay Area
                                </Typography>
                            </Box>
                            {/* top producer description*/}
                            <Typography className={classes.producerDescription} variant={'h5'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur esse et, fugit,
                                harum
                                incidunt ipsum itaque iure maiores minus nesciunt nostrum odit provident quae quaerat
                                saepe
                                suscipit voluptatem! Facilis, officiis?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam debitis
                                dolorem doloribus, dolorum explicabo fuga ipsam necessitatibus non officia omnis
                                provident ratione sint voluptates voluptatum? Cumque ducimus modi sunt!
                            </Typography>
                        </Box>


                    </Grid>

                    {/* Producer Image */}
                    <Grid className={classes.secondEntityItem} item xs={12} md={6}>
                        <Box className={classes.producerImageContainer}>
                            <Image src={'/topProducer/producer.jpg'} layout={'fill'} objectFit={'cover'}/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopProducer;
