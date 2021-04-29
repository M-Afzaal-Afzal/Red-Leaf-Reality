import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    Divider,
    Hidden,
    IconButton,
    makeStyles,
    Toolbar, Typography
} from "@material-ui/core";
// import {useDispatch, useSelector} from "react-redux";
// import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";
// import Image from "next/image";
import {Link} from 'react-scroll'
import {DehazeRounded} from "@material-ui/icons";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    leftIconsContainer: {
        textAlign: "left",
        display: 'flex',
        alignItems: 'center',
    },
    rightIconsContainer: {
        textAlign: "right",

    },
    centerIconsContainer: {
        textAlign: "center",
    },
    imageContainer: {
        position: 'relative',
        width: '200px',
        height: '50px',
    },
    logoLink: {
        display: "inline-block",
        cursor: 'pointer',
        // height: '100%'
    },
    list: {
        width: 250,
    },
    drawerImageContainer: {
        position: "relative",
        width: '150px',
        height: '150px',
    },
    drawerLogoItem: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        marginTop: '2rem',
    },
    headerButton: {
        letterSpacing: '1px',
    }
}))

const Header = () => {

    const classes = useStyles();

    // const isDarkMode = useSelector(selectIsDarkMode);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const dispatch = useDispatch();
    //
    // const darkModeHandler = () => {
    //     dispatch(toggleDarkMode());
    // }

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <AppBar color={'default'} elevation={5} position={'fixed'}>
            <Container maxWidth={'lg'}>
                <Toolbar color={'gray'} disableGutters>

                    {/* Left Icons*/}

                    <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>
                        <Box className={classes.logoLink} component={Link} to={'home'} smooth={true}>
                            <Typography variant={'h5'}>
                                Red Leaf Reality
                            </Typography>
                        </Box>
                    </Box>

                    {/* Right Icons*/}

                    <Box className={`${classes.grow} ${classes.rightIconsContainer}`}>
                        <Hidden smDown>
                            <Button className={classes.headerButton} size={'large'} component={Link} to={'about'} smooth={true}>
                                About
                            </Button>
                            <Button className={classes.headerButton} size={'large'} component={Link} to={'listings'} smooth={true}>
                                Listings
                            </Button>
                            <Button className={classes.headerButton} size={'large'} component={Link} to={'contact'} smooth={true}>
                                CONTACT
                            </Button>

                        </Hidden>

                        <Hidden mdUp>
                            <IconButton onClick={toggleDrawer}>
                                <DehazeRounded/>
                            </IconButton>
                        </Hidden>

                    </Box>

                    <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                        <List className={classes.list}>

                            {/* drawer logo */}
                            <ListItemText className={classes.drawerLogoItem} button>
                                <Box component={Link} to={'home'} smooth={true}>
                                    {/*<Box onClick={toggleDrawer} className={classes.drawerImageContainer}>*/}
                                    {/*    <Image*/}
                                    {/*        src={'https://res.cloudinary.com/dcrjxslxs/image/upload/v1619661183/Logov_rrl6mp.png'}*/}
                                    {/*        layout={'fill'} objectFit={'cover'}*/}
                                    {/*        priority*/}
                                    {/*    />*/}
                                    {/*</Box>*/}
                                    <Typography variant={'h5'}>
                                        Red Leaf Reality
                                    </Typography>
                                </Box>
                            </ListItemText>

                            <Divider/>

                            <Box component={Link} to={'about'} smooth={true}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={'About'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>

                            <Box component={Link} to={'contact'} smooth={true}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={'Contact'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>

                            <Box component={Link} to={'listings'} smooth={true}>
                                <Box onClick={toggleDrawer}>
                                    <ListItem button>
                                        <ListItemText primary={'Listings'}/>
                                    </ListItem>
                                </Box>
                            </Box>
                            <Divider/>


                            <Divider/>

                        </List>
                    </Drawer>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
