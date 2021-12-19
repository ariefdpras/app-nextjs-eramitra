import Head from "next/head";
import React from "react";

class WebHead extends React.Component {
  render() {
    return (
      <Head>
        <title>PT. Era Mitra Perdana</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="title" content="PT. Era Mitra Perdana" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/css/slick.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/css/slick-theme.css"
        />
        <link
          rel="stylesheet"
          href="/static/fonts/Bahnschrift.TTF"
          rel="stylesheet"
        />
      </Head>
    );
  }
}

export default WebHead;
