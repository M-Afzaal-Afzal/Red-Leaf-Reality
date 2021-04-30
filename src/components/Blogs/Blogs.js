import React from 'react';
import {Box, Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(theme => ({
    blogs: {
        marginTop: '3rem',
        padding: '4rem 0',
    },
    imageContainer: {
        position: 'relative',
        height: '15rem',
        width: '100%',
    },
    mainHeadingContainer: {
        marginBottom: '2rem',
    },
    mainHeading: {
        fontWeight: 'bold',
        letterSpacing: '1px',
    },
    entityContainer: {
        padding: '.7rem',
    },
    blogHeading: {
        fontWeight: "bold",
        margin: '1rem 0 1.5rem',
    },
    blogDesc: {
        color: theme.palette.gray.main,
    }
}))

const Blogs = () => {

    const classes = useStyles();

    const blogs = [
        {
            id: 1,
            title: 'Best Golf Countries to visit',
            desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut
                                            delectus dolor eligendi eum explicabo maiores, possimus sequi similique sint
                                            suscipit voluptas! Aliquid corporis cum nostrum omnis, porro quos?`,
            photoURL: '/featureListings/1.jpg',
            link: '',
        }, {
            id: 2,
            title: 'Best Golf Countries to visit',
            desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut
                                            delectus dolor eligendi eum explicabo maiores, possimus sequi similique sint
                                            suscipit voluptas! Aliquid corporis cum nostrum omnis, porro quos?`,
            photoURL: '/featureListings/2.jpg',
            link: '',
        }, {
            id: 3,
            title: 'Best Golf Countries to visit',
            desc: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut
                                            delectus dolor eligendi eum explicabo maiores, possimus sequi similique sint
                                            suscipit voluptas! Aliquid corporis cum nostrum omnis, porro quos?`,
            photoURL: '/featureListings/3.jpg',
            link: '',
        },
    ]

    return (
        <Box className={classes.blogs}>
            <Container maxWidth={'lg'}>

                <Box className={classes.mainHeadingContainer}>
                    <Typography className={classes.mainHeading} align={'center'} variant={'h2'}>
                        Blog
                    </Typography>
                </Box>
                <Grid container alignItems={'center'} justify={'center'}>

                    {blogs.map(({id, title, desc, photoURL}) => (
                        <Grid key={id} style={{width: '100%'}}
                              item
                              md={4}
                              sm={6}
                              xs={12}
                        >
                            <Box className={classes.entityContainer}>
                                <Card>
                                    <Box className={classes.imageContainer}>
                                        <Image src={photoURL} layout={'fill'} objectFit={'cover'}/>
                                    </Box>
                                    <CardContent>
                                        <Box>
                                            <Typography variant={'h5'} className={classes.blogHeading}>
                                                {title}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant={'h6'} className={classes.blogDesc}>
                                                {desc}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <Box style={{padding: '1rem 0'}}>
                                            <Button size={'lg'}>
                                                Read More
                                            </Button>
                                        </Box>
                                    </CardActions>


                                </Card>

                            </Box>

                        </Grid>
                    ))}


                </Grid>
            </Container>
        </Box>
    );
};

export default Blogs;
