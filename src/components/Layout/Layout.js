import React from 'react';
import Header from "./Header";
// import Footer from "./Footer";
import {makeStyles, Paper} from "@material-ui/core";
// import darkTheme from "../../theme/DarkTheme";
import lightTheme from "../../theme/LightTheme";
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Footer";
// import {useSelector} from "react-redux";
// import {selectIsDarkMode} from "../../store/darkMode/darkModeSlice";

const useStyles = makeStyles((theme) => ({
    mainPaperContainer: {
        width: '100%',
        minHeight: '100vh',
        border: '0',
        boxShadow: 'none',
        borderRadius: '0',
    },
    toolbarMargin: {
        ...theme.mixins.toolbar
    }
}))

const Layout = ({children}) => {

    const classes = useStyles();

    // const isDarkMode = useSelector(selectIsDarkMode);

    return (
        <>
            <ThemeProvider theme={ lightTheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Header/>
                <div className={classes.toolbarMargin} />
                <Paper className={classes.mainPaperContainer}>
                    {children}
                </Paper>

                {/* in future if we may have footer we will use that */}

                <Footer/>

            </ThemeProvider>

        </>
    );
};

export default Layout;
