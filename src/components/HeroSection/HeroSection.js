import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroSection: {
        background: `linear-gradient(to right bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(/hero/hero-min.jpg) center/cover`,
        padding: '8rem 0 2rem',
        width: '100%',
        height: '40rem',
        display: 'flex',
        alignItems: 'flex-end',
    },
    heroSectionHeadingContainer: {
        padding: '2rem',
    },
    heroSectionHeading: {
        color: 'white',
    },
}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box id={'home'} className={classes.heroSection}>
            <Container maxWidth={'lg'}>

                {/* hero section heading container*/}
                <Box className={classes.heroSectionHeadingContainer}>
                    <Typography className={classes.heroSectionHeading} variant={'h2'}>
                        Leading Bay Area<br/>
                        Real Estate Brokerage
                    </Typography>
                </Box>

            </Container>
        </Box>
    );
};

export default HeroSection;
