import React from 'react';
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
    testimonials: {
        padding: '8rem 0 8rem',
        width: '100%',
        background: '#e2e1e1',
    },
    testimonial: {
        padding: '1rem',
    },
    testimonialsHeadingContainer: {
        marginBottom: '6rem',
    },
    testimonialsHeading: {
        fontWeight: 'bold',
    },
    testimonialText: {
        padding: '1.5rem',
    },
    clientNameContainer: {
        marginTop: '2rem',
    },
    clientName: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

}))

const Testimonials = () => {

    const classes = useStyles();

    const testmonials = [
        {
            id: 1,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
            aut consequatur
            deleniti dicta dignissimos dolorum est inventore modi molestiae necessitatibus nobis non
            nulla obcaecati saepe, sapiente sit suscipit voluptate?`,
            author: 'Brock Anthony',
        }, {
            id: 2,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
            aut consequatur
            deleniti dicta dignissimos dolorum est inventore modi molestiae necessitatibus nobis non
            nulla obcaecati saepe, sapiente sit suscipit voluptate?`,
            author: 'Alay Anthony',
        }, {
            id: 3,
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
            aut consequatur
            deleniti dicta dignissimos dolorum est inventore modi molestiae necessitatibus nobis non
            nulla obcaecati saepe, sapiente sit suscipit voluptate?`,
            author: 'Aena Anthony',
        },
    ]

    return (
        <Box className={classes.testimonials}>
            <Container maxWidth={'lg'}>
                <Box className={classes.testimonialsHeadingContainer}>
                    <Typography align={'center'} className={classes.testimonialsHeading} variant={'h3'}>
                        Testimonials
                    </Typography>
                </Box>
                <Grid container align={'center'} alignItems={'center'} justify={'center'}>

                    {
                        testmonials.map(({id, text, author}) => (
                            <Grid item key={id} style={{width: '100%'}} md={4} sm={6} xs={12}
                            >
                                <Box className={classes.testimonialText}>
                                    <Typography variant={'h5'}>
                                        <strong>"</strong>{text}<strong>"</strong>
                                    </Typography>
                                    <Box className={classes.clientNameContainer}>
                                        <Typography className={classes.clientName} variant={'h5'} align={'center'}>
                                            <RemoveIcon/> {author}
                                        </Typography>
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

export default Testimonials;
