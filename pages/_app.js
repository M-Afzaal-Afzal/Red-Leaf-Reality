import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../src/globalStyles/stylesheet.css'
import { SnackbarProvider } from 'notistack';

import {Provider} from 'react-redux'
import store from "../src/store/store";
import Layout from "../src/components/Layout/Layout";

export default function MyApp(props) {
    const {Component, pageProps} = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>

            <Head>
                <title>My page</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            {/*   Store provider   */}
            <Provider store={store}>

                <SnackbarProvider maxSnack={3}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SnackbarProvider>


            </Provider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};
