import React, {useState, useEffect} from 'react';
import initFirebase from '../lib/init-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
  
  
  initFirebase();


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
        <title>Instructor Assignment Sorter</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/dfslogo.svg" />
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
        </style>
      </Head>
      
      <ThemeProvider theme={theme}>
      <CssBaseline/>
          <Component { ...pageProps} />
      </ThemeProvider>
    </React.Fragment>

  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};