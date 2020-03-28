import React from 'react';
import App from "next/app";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/utils/theme';
import withData from "../src/utils/apollo";
import Navigation from "../src/components/navigation";

class InitApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Insert Dynamic Title</title>
        </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navigation>
              <Component {...pageProps} />
            </Navigation>
          </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default withData(InitApp);